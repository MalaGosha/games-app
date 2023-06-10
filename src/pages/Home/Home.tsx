import React from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import Bar from '../../components/Bar/Bar';
import DropDownMenu from '../../components/Bar/DropDownMenu/DropDownMenu';
import { useDropDownContext } from '../../context/DropDownContext';

const Home: React.FC = () => {
    const { dropDown } = useDropDownContext();

    return (
        <div>
            <Bar />
            {dropDown.display 
            ? <DropDownMenu 
                data={dropDown.array} /> 
            : ''}
            <MainContainer />
        </div>
    );
};

export default Home;
