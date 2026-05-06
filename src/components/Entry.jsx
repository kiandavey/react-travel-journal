import marker from "../assets/images/marker.png"


export default function Entry(props) {
    const entry = props.entry;

    return(
        <>
            <div className="card">
                <img src={entry.img.src} alt={entry.img.alt} className="card-img"/>

                <div className="card-content">
                    <div className="card-location">
                        <img src={marker} alt="Location Marker" className="marker"/>
                        <span className="country">{entry.country}</span>
                        <a href={entry.googleMapsLink}>View on Google Maps</a>
                    </div>

                    <h1 className="card-title">{entry.title}</h1>

                    <p className="card-date">{entry.dates}</p>

                    <p className="card-description">{entry.text}</p>
                </div>
            </div>
        </>
    )
}





/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */