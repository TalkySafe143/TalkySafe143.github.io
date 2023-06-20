export default function Experience({ period, name, description }) {
    return (
        <div className="timeline-item">
            <div className="timeline-date">{period}</div>
            <div className="timeline-content">
                <h3>{name}</h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}