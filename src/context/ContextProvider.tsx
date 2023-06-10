import React from 'react';
import DropDownContext from './DropDownContext';
import GamesContext from './GamesContext';

type ContextTypeProps = {
    children: JSX.Element;
};

const ContextProvider: React.FC<ContextTypeProps> = (props: {children: JSX.Element}) => {
    return (
        <>
            <DropDownContext>
                <GamesContext>
                    {props.children}
                </GamesContext>
            </DropDownContext>
        </>
    );
};

export default ContextProvider;
