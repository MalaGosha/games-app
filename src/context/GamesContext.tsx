import React, { useState, useContext } from 'react';

export type GamesType = {
    title: string;
    description: string;
    urlImage: string;
    type: string;
}

type GamesContextType = {
    setGames: (arg: GamesType[]) => void;
    games: GamesType[];
};

const Context = React.createContext<GamesContextType>({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setGames: () => {},
    games: [{title: '', description: '', urlImage: '', type: ''}],

});

const GamesContext = ({ children }: { children: JSX.Element }) => {
    const [games, setGames] = useState<GamesType[]>([{title: '', description: '', urlImage: '', type: ''}]);
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