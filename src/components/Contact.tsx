import emailjs from '@emailjs/browser'
import {useEffect, useState} from "react";

export default function Contact() {

    const [subject, setSubject] = useState("");
    const [from_name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [confirm, setConfirm] = useState(null);

    const useSendEmail = () => {
            emailjs.init(process.env.REACT_APP_MAIL_KEY);
            emailjs.send(
                process.env.REACT_APP_MAIL_SERVICE,
                process.env.REACT_APP_MAIL_TEMPLATE,
                {
                    to_name: "Sebastian",
                    from_name,
                    message,
                    email,
                    subject
                }
            ).then(res => setConfirm(true)).catch(err => setConfirm(false));
    }

    return (
        <section className="content-card contact" id="contact">
            <h1>Contact</h1>
            <form className="form" id="form" >
                <div className="input-box">
                    <input type="text" className="text-input" name="name" placeholder="Name" value={from_name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <input type="email" className="text-input" name="email" id="email" placeholder="Email"
                        value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <input type="subject" className="text-input" name="subject" id="subject"
                           placeholder="Subject"
                            value={subject}
                           onChange={e => setSubject(e.target.value)}
                    />
                </div>
                <div className="input-box">
                    <textarea name="text" className="message" placeholder="Message..."
                        value={message}
                              onChange={e => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <div className="input-box">
                    <input style={{ textAlign: 'center' }} className="submit-btn" id="submit" value="submit" onClick={useSendEmail} />
                </div>
                {
                    confirm ? <h1 style={{ textAlign:'center', transition:'all' }}>Se ha enviado correctamente.</h1> : ""
                }
            </form>
        </section>
    );
}