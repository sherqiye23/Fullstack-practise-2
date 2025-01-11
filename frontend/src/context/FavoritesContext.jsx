import { createContext, useEffect, useState } from "react";
export const FavoritesContext = createContext()

export default function FavoritesProvider({children}) {
    let localfavs = JSON.parse(localStorage.getItem("favoritesPractise2"))
    let [favorites, setFavorites] = useState(localfavs ? localfavs : [])

    useEffect(() => {
        localStorage.setItem("favoritesPractise2", JSON.stringify(favorites))
    }, [favorites])

    let value = {
        favorites,
        setFavorites
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}