import React, { useState, useContext } from 'react';

type DropDownType = {
    display: boolean;
    options: string[];
}

type DropDownContextType = {
    setDropDown: (arg: DropDownType) => void;
    dropDown: DropDownType;
};

const Context = React.createContext<DropDownContextType>({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setDropDown: () => {},
    dropDown: {display: false, options: []},

});

const DropDownContext = ({ children }: { children: JSX.Element }) => {
    const [dropDown, setDropDown] = useState<DropDownType>({display: false, options: []});
    return (
        <Context.Provider value={{dropDown, setDropDown}}>
            {children}
        </Context.Provider>
    );
};

export default DropDownContext;

export const useDropDownContext = () => {
    return useContext(Context);
};