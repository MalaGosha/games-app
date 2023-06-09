import React from 'react';
import {Link} from "react-router-dom";
import MainContainer from '../../components/MainContainer/MainContainer';
import Bar from '../../components/Bar/Bar';

const Home: React.FC = () => {

    return (
        <div>
            <Bar />
            <MainContainer />
        </div>
    )

}

export default Home;