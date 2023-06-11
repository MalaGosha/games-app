import React, { useEffect, useState } from 'react';
import classes from './NavigationButton.module.css';
import {
    optionsFreeGames,
    optionsNewGames,
    optionsTopGames,
} from '../../../../utils/optionsToDropDown';
import { useDropDownContext } from '../../../../context/DropDownContext';
import { NavigationMenu } from '../../../../utils/NavigationMenuEnum';
import { getFreeGames } from '../../../../api/getFreeGames';
import { GamesType, useGamesContext } from '../../../../context/GamesContext';
import { displayError } from '../../../../utils/functionToDisplayError';
import { transformFreeGames } from '../../../../utils/functionsToGetGames';

type NavigationButtonProps = {
    nameButton: string;
};

const NavigationButton: React.FC<NavigationButtonProps> = (props: NavigationButtonProps) => {
    const [optionsToDropDown, setOptionsToDropDown] = useState<string[]>([]);
    const [displayDropDown, setDisplayDropDown] = useState(false);
    const { setGames } = useGamesContext();
    const { setDropDown } = useDropDownContext();

    const showDropDown = () => {
        setDisplayDropDown(!displayDropDown);
    };

    useEffect(() => {
        switch (props.nameButton) {
            case NavigationMenu.TOP_GAMES:
                setOptionsToDropDown(optionsTopGames);
                setGames([
                    {
                        title: 'Top games',
                        description: ' This are top games',
                        urlImage: '',
                        type: NavigationMenu.TOP_GAMES,
                    },
                ]);
                break;
            case NavigationMenu.NEW_GAMES:
                setOptionsToDropDown(optionsNewGames);
                setGames([
                    {
                        title: 'New games',
                        description: ' This are new games',
                        urlImage: '',
                        type: NavigationMenu.NEW_GAMES,
                    },
                ]);
                break;
            case NavigationMenu.FREE_GAMES:
                setOptionsToDropDown(optionsFreeGames);
                getFreeGames().then(response => {
                    const transformedFreeGames = transformFreeGames(response);
                    setGames(transformedFreeGames);
                }). catch(error => {
                    displayError('Error from getFreeGames: ', error);
                });
                break;
        }
        setDropDown({ display: displayDropDown, options: optionsToDropDown });
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
