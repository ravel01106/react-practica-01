import {Fragment} from 'react';
import styles from './Card.module.css';
import propTypes from 'prop-types';
import {IoIosMan} from 'react-icons/io';
import {FaUserAstronaut, FaCommentDots} from 'react-icons/fa';
import {BiMaleSign, BiFemaleSign} from 'react-icons/bi';
import {MdLocationOn} from 'react-icons/md';
import {AiFillCalendar} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';

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
    const detailsStyle = {color: '#0B6EFD'};
    const commentStyle = {color: 'white'};
    const isAlive = character.status === 'Alive';

    return (

    <Fragment>
        <div className={styles.Card}>
            <div className={styles.InLine}>
                <img className={styles.Photo} src={`./images/${character.id}.jpeg`} alt="#" />
                <div className={styles.NameAndStatus}>
                    <p className={styles.Name}>{character.name}</p>
                    {isAlive ? <p className={styles.Green}>{character.status}</p> : <p className={styles.Red}>{character.status}</p>}
                </div>

            </div>
            <div className={styles.Details}>
                <p>{isHuman ? <IoIosMan style={detailsStyle}/> : <FaUserAstronaut style={detailsStyle}/>} {character.species}</p>
                <p>{isFemale ? <BiFemaleSign style={detailsStyle}/> : <BiMaleSign style={detailsStyle}/>} {character.gender}</p>
                <p><MdLocationOn style={detailsStyle}/> {character.location}</p>
                <p><AiFillCalendar style={detailsStyle}/> {formatCreated()}</p>
            </div>
            <div className={styles.Buttons}>
                <button className={styles.Profile}><BsFillPersonFill /> Perfil</button>
                <button className={styles.Contact}><FaCommentDots style={commentStyle}/> Contacto</button>
            </div>
        </div>
    </Fragment>
    
    )
}
Card.propTypes = {
    character: propTypes.object.isRequired
}

export default Card