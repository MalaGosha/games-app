import React, { useEffect, useState } from 'react';
import classes from './NavigationButton.module.css';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

type NavigationButtonProps = {
    nameButton: string;
}

const arrayNewGames = [ 'On PC', 'On XBOX', 'On PS4', 'On PC and XBOX', 'On PC and PS4'];
const arrayTopGames = [ 'This month', 'This year', 'Last year']

const NavigationButton: React.FC<NavigationButtonProps> = (props: NavigationButtonProps) => {
const [displayDropDown, setDisplayDropDown] = useState<boolean>(false);
const [arrayToDropDown, setArrayToDropDown] = useState<string[]>(arrayNewGames);

    const showDropDown = () => {
        setDisplayDropDown(!displayDropDown)
    };

    useEffect(() => {
        if (props.nameButton === 'new games'){
            setArrayToDropDown(arrayNewGames);
        }
        if (props.nameButton === 'top games'){
            setArrayToDropDown(arrayTopGames);
        }
    },[]);

    return (
        <>
            <button 
                className={classes.NavigationButtonName}
                onClick={showDropDown}
            >
                {props.nameButton}
            </button>
            { displayDropDown 
                ? <DropDownMenu 
                    arrayData={arrayToDropDown}
                    />
                : ''
            }
            
        </>
    )

}

export default NavigationButton;