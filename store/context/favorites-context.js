import { createContext, useState } from 'react'

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
})

const FavoritesContextProvider = ({ children }) => {
  const [favoritesMealIds, setFavoriteMealIds] = useState([])

  const addFavorite = (id) => {
    setFavoriteMealIds((currentFavId) => [...currentFavId, id])
  }

  const removeFavorite = (id) => {
    setFavoriteMealIds((currentFavId) => currentFavId.filter((mealId) => mealId.id === id))
    console.log(favoritesMealIds, 'axiomatico')
  }

  const values = {
    ids: favoritesMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  }

  return <FavoritesContext.Provider value={values}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider
