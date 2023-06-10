import React, { useState, useContext } from 'react';

type DropDownContextType = {
    setDisplayDropDown: (arg: boolean) => void;
    displayDropDown: boolean;
};

const Context = React.createContext<DropDownContextType>({
    setDisplayDropDown: () => false,
    displayDropDown: false,

});

const DropDownContext = ({ children }: { children: JSX.Element }) => {
    const [displayDropDown, setDisplayDropDown] = useState<boolean>(false);
    return (
        <Context.Provider value={{displayDropDown, setDisplayDropDown}}>
            {children}
        </Context.Provider>
    );
};

export default DropDownContext;

export const useDropDownContext = () => {
    return useContext(Context);
};