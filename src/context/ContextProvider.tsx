import React from 'react';
import DropDownContext from './DropDownContext';

type ContextTypeProps = {
    children: JSX.Element;
};

const ContextProvider: React.FC<ContextTypeProps> = (props: {
    children: JSX.Element;
}) => {
    return (
        <>
            <DropDownContext>{props.children}</DropDownContext>
        </>
    );
};

export default ContextProvider;
