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
    const iconsStyle = {color: '#0B6EFD'};

    return (

    <Fragment>
        <div className={styles.Card}>
            <div className={styles.Presentation}>
                <img className={styles.Photo} src={`./images/${character.id}.jpeg`} alt="#" />
                <div className={styles.NameAndStatus}>
                    <p className={styles.Name}>{character.name}</p>
                    <p>{character.status}</p>
                </div>

            </div>
            <div className={styles.Details}>
                <p>{isHuman ? <IoIosMan style={iconsStyle}/> : <FaUserAstronaut style={iconsStyle}/>} {character.species}</p>
                <p>{isFemale ? <BiFemaleSign style={iconsStyle}/> : <BiMaleSign style={iconsStyle}/>} {character.gender}</p>
                <p><MdLocationOn style={iconsStyle}/> {character.location}</p>
                <p><AiFillCalendar style={iconsStyle}/> {formatCreated()}</p>
            </div>
        </div>
    </Fragment>
    
    )
}
Card.propTypes = {
    character: propTypes.object.isRequired
}

export default Card