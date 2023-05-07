import { Fragment } from 'react';
import styles from './Footer.module.css';
import {AiOutlineCopyright} from 'react-icons/ai';
import propTypes from 'prop-types';

const Footer = ({year}) => {
  return (
    <Fragment>
        <div className={styles.Footer}>
            <p className={styles.Text}> <AiOutlineCopyright /> {year} All right reserved </p>
        </div>
    </Fragment>
  )
}
Footer.propTypes = {
    year: propTypes.number.isRequired
}

export default Footer