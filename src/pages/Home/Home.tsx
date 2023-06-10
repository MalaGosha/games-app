import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';
import MainContainer from '../../components/MainContainer/MainContainer';
import Bar from '../../components/Bar/Bar';
import DropDownMenu from '../../components/Bar/DropDownMenu/DropDownMenu';
import { useDropDownContext } from '../../context/DropDownContext';

const Home: React.FC = () => {
    const { dropDown } = useDropDownContext();

    return (
        <div className={classes.MainPhoto}>
            <Bar />
            <DropDownMenu 
                data={dropDown.array}
                visibility={dropDown.display} 
            /> 
            <MainContainer />
        </div>
    );
};

export default Home;
