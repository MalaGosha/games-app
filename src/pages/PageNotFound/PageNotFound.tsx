import React from 'react';
import {Link} from "react-router-dom";
import classes from './PageNotFound.module.css';

const PageNotFound: React.FC = () => {

    return (
        <div>
            Paige not found
            <Link to="/">
                <button className={classes.Btn__ReturnToMainPaige}>
                    Return to main paige
                </button>
            </Link>
        </div>
    )

}

export default PageNotFound;