import React from 'react';
import classes from './DropDownMenu.module.css';

type DropDownMenuProps = {
    data: string[];
}

const DropDownMenu: React.FC<DropDownMenuProps> = (props: DropDownMenuProps) => {
    return (
        <div className={classes.DropDownContainer}>
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
