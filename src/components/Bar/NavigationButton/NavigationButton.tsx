import React, { useEffect, useState } from 'react';
import classes from './NavigationButton.module.css';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { arrayNewGames, arrayTopGames } from '../../../utils/itemsToDropDown';
import { useDropDownContext } from '../../../context/DropDownContext';

type NavigationButtonProps = {
    nameButton: string;
};

const NavigationButton: React.FC<NavigationButtonProps> = (
    props: NavigationButtonProps
) => {
    const [arrayToDropDown, setArrayToDropDown] =
        useState<string[]>(arrayNewGames);
    const { displayDropDown, setDisplayDropDown } = useDropDownContext();

    const showDropDown = () => {
        setDisplayDropDown(!displayDropDown);
    };

    useEffect(() => {
        if (props.nameButton === 'new games') {
            setArrayToDropDown(arrayNewGames);
        }
        if (props.nameButton === 'top games') {
            setArrayToDropDown(arrayTopGames);
        }
    }, []);

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
