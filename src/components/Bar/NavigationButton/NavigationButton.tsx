import React, { useEffect, useState } from 'react';
import classes from './NavigationButton.module.css';
import { arrayFreeGames, arrayNewGames, arrayTopGames } from '../../../utils/itemsToDropDown';
import { useDropDownContext } from '../../../context/DropDownContext';
import { NavigationMenu } from '../../../utils/NavigationMenuEnum';

type NavigationButtonProps = {
    nameButton: string;
};

const NavigationButton: React.FC<NavigationButtonProps> = (props: NavigationButtonProps) => {
    const [arrayToDropDown, setArrayToDropDown] =useState<string[]>([]);
    const [displayDropDown, setDisplayDropDown] = useState(false);
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
                break;
        }
    }, []);

    useEffect(() => {
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
