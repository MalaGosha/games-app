import React from 'react';
import classes from './DropDownMenu.module.css';

type DropDownMenuProps = {
    data: string[];
    visibility: boolean;
}

const DropDownMenu: React.FC<DropDownMenuProps> = (props: DropDownMenuProps) => {

    return (
        <div 
            className={props.visibility
                ? classes.DropDownContainer__Visibility 
                : classes.DropDownContainer__Hidden}
        >
            {props.data.map((item, index) => {
                return (
                    <div className={classes.DropDownItem} key={index}>
                        {item}
                    </div>
                )
            })}
        </div>
    );
};

export default DropDownMenu;
