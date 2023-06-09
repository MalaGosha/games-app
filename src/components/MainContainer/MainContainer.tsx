import React from 'react';
import {Link} from "react-router-dom";
import MainPhotos from './MainPhotos/MainPhotos';
import SliderMenu from './SliderMenu/SliderMenu';

const MainContainer: React.FC = () => {

    return (
        <div>
            <MainPhotos />
            <SliderMenu />
        </div>
    )

}

export default MainContainer;