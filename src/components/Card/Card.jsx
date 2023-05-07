import {Fragment} from 'react';
import styles from './Card.module.css';
import propTypes from 'prop-types';

const Card = ({character}) => {
    const months = ["January", "February", "March", 
        "April", "May", "June", "July", "August", "September", 
        "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"];

    const formatCreated = () => {

        const dateCharacter = new Date(character.created);
        const dateFormat = days[dateCharacter.getDay()] + ", " +
            dateCharacter.getDate() + " de " + months[dateCharacter.getMonth()]
            + " de " + dateCharacter.getFullYear();
        return dateFormat;

    }

    return (

    <Fragment>
        <div className={styles.Card}>
            <div>
                <p>{character.name}</p>
                <p>{character.status}</p>
            </div>
            <div>
                <p>{character.species}</p>
                <p>{character.gender}</p>
                <p>{character.location}</p>
                <p>{formatCreated()}</p>
            </div>
        </div>
    </Fragment>
    
    )
}
Card.propTypes = {
    character: propTypes.object.isRequired
}

export default Card