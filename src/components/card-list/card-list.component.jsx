import { Component } from "react";

import './card-list.styles.css'

class CardList extends Component {

    render() {
        const { robots: robots } = this.props;

        return (
            <div className='card-list'>
                {robots.map((robot) => {
                    const { name, email, id } = robot;
                    return (
                        <div className="card-container" key={id} >
                            <img
                                src={`https://robohash.org/12${id}?size=180x180`}
                                alt={`robot ${name}`} />
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    );
                }
                )
                }
            </div >
        )
    }
}

export default CardList;