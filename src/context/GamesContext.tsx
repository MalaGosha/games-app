import React, { useState, useContext } from 'react';

export type KeyImagesType = {
    type: string; 
    url: string;
}

export type GamesType = {
    title: string;
    description: string;
    keyImages: KeyImagesType[];
}

type GamesContextType = {
    setGames: (arg: GamesType[]) => void;
    games: GamesType[];
};

const Context = React.createContext<GamesContextType>({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setGames: () => {},
    games: [{title: '', description: '', keyImages: []}],

});

const GamesContext = ({ children }: { children: JSX.Element }) => {
    const [games, setGames] = useState<GamesType[]>([{title: '', description: '', keyImages: []}]);
    return (
        <Context.Provider value={{games, setGames}}>
            {children}
        </Context.Provider>
    );
};

export default GamesContext;

export const useGamesContext = () => {
    return useContext(Context);
};