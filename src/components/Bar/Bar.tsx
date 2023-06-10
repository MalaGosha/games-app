import React from 'react';
import classes from './Bar.module.css';
import NavigationBar from './NavigationBar/NavigationBar';
import logo from './../../assets/logo.png';
import { Link } from 'react-router-dom';
import Login from './Login/Login';

const Bar: React.FC = () => {
    return (
        <div className={classes.Bar}>
            <Link to="/">
                <div className={classes.LogoContainer}>
                    <img src={logo} alt="logo" className={classes.Logo} />
                </div>
            </Link>
            <NavigationBar />
            <Login />
        </div>
    );
};

export default Bar;
