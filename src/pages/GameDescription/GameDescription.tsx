import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';
import MainContainer from '../../components/MainContainer/MainContainer';
import Bar from '../../components/Bar/Bar';
import DropDownMenu from '../../components/Bar/DropDownMenu/DropDownMenu';
import { useDropDownContext } from '../../context/DropDownContext';

const GameDescription: React.FC = () => {
    const { dropDown } = useDropDownContext();

    return (
        <div className={classes.MainPhoto}>
            <Bar />
            <DropDownMenu 
                options={dropDown.options}
                visibility={dropDown.display} 
            /> 
            <MainContainer />
        </div>
    );
};

export default GameDescription;
