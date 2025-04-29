import marker from "../assets/marker.png"

const JournalEntry = (props) => {
    return(
        <article className="journal-entry">
            <div className="main-img-container">
                <img className="main-img" src={props.img.src} alt={props.img.alt}/>
            </div>
            <div>
                <img className="marker-img" src={marker} alt="marker"/>
                <span className="Country">{props.country} </span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2>{props.title}</h2>
                <p className="date">{props.dates}</p>
                <p>{props.text}</p>
            </div>
            
        </article>
    )
}
export default JournalEntry;