import {Fragment} from 'react';
import styles from './Card.module.css';
import propTypes from 'prop-types';
import {IoIosMan} from 'react-icons/io';
import {FaUserAstronaut} from 'react-icons/fa';
import {BiMaleSign, BiFemaleSign} from 'react-icons/bi';
import {MdLocationOn} from 'react-icons/md';
import {AiFillCalendar} from 'react-icons/ai';

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
    const isHuman = character.species === 'Human';
    const isFemale = character.gender === 'Female';

    return (

    <Fragment>
        <div className={styles.Card}>
            <div>
                <p>{character.name}</p>
                <p>{character.status}</p>
            </div>
            <div>
                <p>{isHuman ? <IoIosMan /> : <FaUserAstronaut />} {character.species}</p>
                <p>{isFemale ? <BiFemaleSign /> : <BiMaleSign />} {character.gender}</p>
                <p><MdLocationOn /> {character.location}</p>
                <p><AiFillCalendar /> {formatCreated()}</p>
            </div>
        </div>
    </Fragment>
    
    )
}
Card.propTypes = {
    character: propTypes.object.isRequired
}

export default Card