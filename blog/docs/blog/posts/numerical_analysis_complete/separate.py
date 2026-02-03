import sys
import re
import os


def toSnakeCase(string):
    return re.sub(r"(?<=[a-z])(?=[A-Z])|[^a-zA-Z]", "_", string).strip("_").lower()


def limpiar_espacios_latex(texto: str) -> str:
    def procesar_bloque(match):
        # Capturamos la indentación (espacios/tabs) antes del primer $$
        indentacion = match.group(1)
        contenido = match.group(2)
        
        # Filtramos líneas vacías pero preservamos el contenido útil
        lineas = contenido.splitlines()
        lineas_limpias = []
        
        for linea in lineas:
            if linea.strip():
                # Si la línea no tiene la indentación correcta, se la ponemos
                # Si ya la tiene, la dejamos como está
                if not linea.startswith(indentacion):
                    lineas_limpias.append(indentacion + linea.lstrip())
                else:
                    lineas_limpias.append(linea)
        
        # Reconstruimos el bloque manteniendo los $$ indentados
        inicio = f"{indentacion}$$"
        fin = f"{indentacion}$$"
        return f"{inicio}\n" + "\n".join(lineas_limpias) + f"\n{fin}"

    # El patrón ahora captura: (espacios_previos)(\$\$.*?\$\$)
    # Usamos ^ para detectar la indentación al inicio de la línea
    patron = re.compile(r'^([ \t]*)\$\$(.*?)\$\$', re.DOTALL | re.MULTILINE)
    return patron.sub(procesar_bloque, texto) 


def convertir_a_admonition(texto: str) -> str:
    lineas = texto.splitlines()
    resultado = []
    i = 0

    while i < len(lineas):
        linea = lineas[i]

        # Detectar el inicio de un bloque: "- Ejemplo" (al margen izquierdo)
        # Solo capturamos si empieza con "-" y tiene contenido indentado después
        match_inicio = re.match(r"^- (.+)", linea)

        if match_inicio:
            titulo = match_inicio.group(1).strip()
            contenido_bloque = []
            j = i + 1
            es_bloque_real = False

            # Buscamos contenido indentado
            while j < len(lineas):
                sig_linea = lineas[j]

                # Si la línea tiene texto y NO está indentada, el bloque terminó
                if sig_linea.strip() and not (
                    sig_linea.startswith("    ") or sig_linea.startswith("\t")
                ):
                    break

                # Si encontramos al menos una línea indentada, confirmamos que es bloque
                if sig_linea.startswith("    ") or sig_linea.startswith("\t"):
                    es_bloque_real = True

                contenido_bloque.append(sig_linea)
                j += 1

            if es_bloque_real:
                resultado.append(f'??? example "{titulo}"')
                # Agregamos el contenido manteniendo su indentación original
                resultado.extend(contenido_bloque)
                i = j - 1  # Saltamos el puntero al final del bloque
            else:
                # Si no hubo contenido indentado, era una lista simple
                resultado.append(linea)
        else:
            # Líneas normales o encabezados ##
            resultado.append(linea)

        i += 1

    return "\n".join(resultado)


def clean_text(text: str) -> str:
    funcs = [limpiar_espacios_latex, convertir_a_admonition]
    for fun in funcs:
        text = fun(text)
    return text


def create_folders_and_files(files_dic: dict[str, dict[str, str]]):
    for section_name, files in files_dic.items():
        folder_name = toSnakeCase(section_name)
        try:
            os.mkdir(toSnakeCase(section_name))
        except FileExistsError:
            print(f"Section {section_name} already exists, continue...")

        files['.nav.yml'] = f"title: {section_name}"
        files['.nav.en.yml'] = f"title: {section_name}"

        for subsection_name, content in files.items():
            parsed_content = clean_text(content)
            file_name = toSnakeCase(subsection_name) if "yml" not in subsection_name else subsection_name
            path = folder_name + "/" + file_name + ".md"
            if "yml" in path:
                path = path[:-3]
            metadata = f"---\ntitle: {subsection_name if subsection_name != "index" else section_name}\ntags: ['Análisis Numérico (Completo)']\n---\n"
            with open(path, "w") as file:
                if not "yml" in path:
                    file.write(metadata)
                file.write(parsed_content)


def parse_sections(text: str, starts: str) -> dict[str, str]:
    lines = text.splitlines()
    sections = {}
    actual_name = "index"
    current_content = []
    for line in lines:
        if line.startswith(starts):
            if actual_name is not None:
                sections[actual_name] = "\n".join(current_content).strip()
            actual_name = line[2:].strip()
            current_content = []
        else:
            if actual_name is not None:
                current_content.append(line)

    sections[actual_name] = "\n".join(current_content).strip()

    return sections


def main():
    if len(sys.argv) < 2:
        print("There is not a target file")
        exit(1)
    filename = sys.argv[1]
    try:
        with open(filename, "r") as file:
            file_content = file.read()

        sections_dic: dict[str, str] = parse_sections(file_content, "# ")
        files_dic: dict[str, dict[str, str]] = {}

        for k, v in sections_dic.items():
            files_dic[k] = parse_sections(v, "## ")

        create_folders_and_files(files_dic)

        print("Everything OK")
    except Exception as e:
        print(f"An error {e}")
    return 0


if __name__ == "__main__":
    main()
