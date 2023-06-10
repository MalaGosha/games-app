import React, { useEffect, useState } from 'react';
import classes from './NavigationButton.module.css';
import { arrayFreeGames, arrayNewGames, arrayTopGames } from '../../../utils/itemsToDropDown';
import { useDropDownContext } from '../../../context/DropDownContext';
import { NavigationMenu } from '../../../utils/NavigationMenuEnum';
import { getFreeGames } from '../../../api/getFreeGames';
import { useGamesContext } from '../../../context/GamesContext';

type NavigationButtonProps = {
    nameButton: string;
};

const NavigationButton: React.FC<NavigationButtonProps> = (props: NavigationButtonProps) => {
    const [arrayToDropDown, setArrayToDropDown] =useState<string[]>([]);
    const [displayDropDown, setDisplayDropDown] = useState(false);
    const { setGames } = useGamesContext();
    const { setDropDown } = useDropDownContext();

    const showDropDown = () => {
        setDisplayDropDown(!displayDropDown);
    };

    useEffect(() => {
        switch (props.nameButton) {
            case NavigationMenu.NEW_GAMES:
                setArrayToDropDown(arrayNewGames);
                break;
            case NavigationMenu.TOP_GAMES:
                setArrayToDropDown(arrayTopGames);
                break;
            case NavigationMenu.FREE_GAMES:
                setArrayToDropDown(arrayFreeGames);
                getFreeGames().then(response => {
                    response.freeGames.current.map(game => {
                        const title = game.title
                        const description = game.description
                        const keyImages = game.keyImages
                        setGames([{title, description, keyImages: keyImages}])
                    })});
                break;
        }
        setDropDown({display: displayDropDown, array: arrayToDropDown});

    }, [displayDropDown]);

    return (
        <>
            <button
                className={classes.NavigationButtonName}
                onClick={showDropDown}
            >
                {props.nameButton}
            </button>
        </>
    );
};

export default NavigationButton;
