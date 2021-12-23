import './card.css'

function Card({title, subtitle, giantRef}) {
    const doMore = () => {
        let elementGiant = giantRef.current;
        
        elementGiant.classList.add('visible');
        elementGiant.classList.remove('hidden');
    
    
    }

    return (
        <div className="card-container">
            <div className="card-head">
                <div className="title-component">
                    <h1 className="card-title">{title}</h1>
                    <button className="card-button" onClick={doMore}>More</button>
                </div>
                <h3 className="card-subtitle">{subtitle}</h3>
            </div>
        </div>
    )
}

export default Card;