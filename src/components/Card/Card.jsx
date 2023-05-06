import {Fragment} from 'react';
import styles from './Card.module.css';
import propTypes from 'prop-types';

const Card = ({character}) => {
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
                <p>{character.created}</p>
            </div>
        </div>
    </Fragment>
  )
}
Card.propTypes = {
    character: propTypes.object.isRequired
}

export default Card