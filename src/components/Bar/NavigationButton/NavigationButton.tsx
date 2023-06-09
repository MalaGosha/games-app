import React, { useState } from 'react';
import classes from './NavigationButton.module.css';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

type NavigationButtonProps = {
    nameButton: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = (props: NavigationButtonProps) => {
const [displayDropDown, setDisplayDropDown] = useState<boolean>(false);

    const showDropDown = () => {
        setDisplayDropDown(!displayDropDown)
    };

    return (
        <>
            <button 
                className={classes.NavigationButtonName}
                onClick={showDropDown}
            >
                {props.nameButton}
            </button>
            { displayDropDown 
                ? <DropDownMenu />
                : ''
            }
            
        </>
    )

}

export default NavigationButton;