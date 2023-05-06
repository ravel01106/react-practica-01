import { Fragment } from 'react';
import styles from './Header.module.css';
import propTypes from 'prop-types';

const Header = ({title, subtitle}) => {
    return (
        <Fragment>
            <div className= {styles.Header}>
                <h1>{title}</h1>
                <h5>{subtitle}</h5>
            </div>
        </Fragment>

    );
}
Header.propTypes = {
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired
}
export default Header