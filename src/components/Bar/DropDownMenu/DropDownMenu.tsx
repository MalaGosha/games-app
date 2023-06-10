import React from 'react';
import classes from './DropDownMenu.module.css';
import { useGamesContext } from '../../../context/GamesContext';

type DropDownMenuProps = {
    data: string[];
    visibility: boolean;
}

const DropDownMenu: React.FC<DropDownMenuProps> = (props: DropDownMenuProps) => {
const { games } = useGamesContext();

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
            {games.map((item, index) => {
                return (
                    <div className={classes.DropDownItem} key={index}>
                        {item.title}
                        {item.description}
                        {item.keyImages.map((image, index) => {
                            return ( <img src={image.url} alt='' key={index}/>)
                        })}

                    </div>
                )
            })}
        </div>
    );
};

export default DropDownMenu;
