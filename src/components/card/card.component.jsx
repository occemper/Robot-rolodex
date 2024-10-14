import './card.styles.css'

const Card = ({ robot }) => {
    const { id, name, email } = robot;

    return (
        <div className="card-container" >
            <img
                src={`https://robohash.org/12${id}?size=180x180`}
                alt={`robot ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}


export default Card;