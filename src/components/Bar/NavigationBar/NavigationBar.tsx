import React from 'react';
import classes from './NavigationBar.module.css';
import NavigationButton from '../NavigationButton/NavigationButton';

const NavigationBar: React.FC = () => {
    return (
        <div className={classes.NavigationBar}>
            <NavigationButton 
                nameButton="top games" 
            />
            <NavigationButton 
                nameButton="new games" 
            />
        </div>
    );
};

export default NavigationBar;
