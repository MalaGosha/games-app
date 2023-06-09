import React from 'react';
import classes from './DropDownMenu.module.css';

type DropDownMenuProps = {
    arrayData: string[];
}

const DropDownMenu: React.FC<DropDownMenuProps> = (props: DropDownMenuProps) => {
    return (
        <div className={classes.DropDownContainer}>
            {props.arrayData.map((data, index) => {
                return (
                    <div className={classes.DropDownItem} key={index}>
                        {data}
                    </div>
                )
            })}
        </div>
    );
};

export default DropDownMenu;
