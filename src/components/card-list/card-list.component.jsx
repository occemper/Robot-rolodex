import { Component } from "react";

import './card-list.styles.css'
import Card from "../card/card.component";

class CardList extends Component {

    render() {
        const { robots: robots } = this.props;

        return (
            <div className='card-list'>
                {robots.map((robot) => {
                    const { name, email, id } = robot;
                    return (
                        <Card robot={robot} />
                    );
                }
                )
                }
            </div >
        )
    }
}

export default CardList;