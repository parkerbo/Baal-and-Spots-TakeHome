import "./card.css"

const Card = ({card}) => {
    return(
        <div className="feature-card">
            <h2>{card.title}</h2>
            <h3>{card.description}</h3>
            <button className="feature-card-button">Learn more</button>
        </div>
    )
}
export default Card;
