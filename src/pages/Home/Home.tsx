import React from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import Bar from '../../components/Bar/Bar';
import DropDownMenu from '../../components/Bar/DropDownMenu/DropDownMenu';
import { useDropDownContext } from '../../context/DropDownContext';

const Home: React.FC = () => {
    const { displayDropDown } = useDropDownContext();

    return (
        <div>
            <Bar />
            {displayDropDown ? <DropDownMenu data={[]} /> : ''}
            <MainContainer />
        </div>
    );
};

export default Home;
