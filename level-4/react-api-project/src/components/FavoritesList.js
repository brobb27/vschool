import React, { useContext } from 'react'
import {ContextInfo} from './contextInfo'
import Favorited from './Favorited'

function FavoritesList() {
    // Context variables needed
    const { favoritesList } = useContext(ContextInfo)

    // Favorited components
    const FavoritedComponents = favoritesList.map(item => <Favorited key={item.id} venue={item}/>)



    return (
        <div id='favoritesList'>
            <h1>My Favorites</h1>
            {FavoritedComponents}
        </div>
    )
}

export default FavoritesList