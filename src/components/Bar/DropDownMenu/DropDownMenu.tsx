import React from 'react';
import classes from './DropDownMenu.module.css';
import { useGamesContext } from '../../../context/GamesContext';

type DropDownMenuProps = {
    options: string[];
    visibility: boolean;
}

const DropDownMenu: React.FC<DropDownMenuProps> = (props: DropDownMenuProps) => {
    const { games } = useGamesContext();

    const showOptions = (option: string, index: number) => {
        return (
            <div className={classes.DropDownOption} key={index}>
                {option}
            </div>
        )
    }

    const showGamePoster = (urlImage: string, index: number) => {       
        return (
            <div className={classes.DropDownGamePoster} key={index}>
                <img src={urlImage} alt='Poster' key={index} width={400}/>
            </div>
        )
    }

    const options = props.options.map((option, index) => showOptions(option, index))
    const gamesPosters = games.map((game, index) => showGamePoster(game.urlImage, index))

    return (
        <div 
            className={props.visibility
                ? classes.DropDownContainer__Visibility 
                : classes.DropDownContainer__Hidden}
        >
            <div className={classes.DropDownOptions}>
                {options}
            </div>
            <div className={classes.DropDownGamesPosters}>
                {gamesPosters}
            </div>
        </div>
    );
};

export default DropDownMenu;
