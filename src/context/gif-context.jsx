import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useEffect, useState } from "react";

const GifContext = createContext();

const GifProvider = ({children}) => {
    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState("gifs");
    const [favorites, setFavorites] = useState([]);

    const giphy = new GiphyFetch(import.meta.env.GIPHY_KEY);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favoriteGIFs")) || [];
        setFavorites(favorites);
    }, []);

    const addToFavorites = (id) => {
        console.log(id);
        if (favorites.includes(id)) {
            const updatedFavorites = favorites.filter((itemId) => itemId !== id);
            localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
        } else {
            const updatedFavorites = [...favorites];
            updatedFavorites.push(id);
            localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
            setFavorites(updatedFavorites);
        }
    };

    return <GifContext.Provider value={{ giphy, gifs, setGifs, filter, setFilter, favorites, addToFavorites }}>
        {children}
    </GifContext.Provider>
}
export const GifState = () => {
    return useContext(GifContext);
}

export default GifProvider;