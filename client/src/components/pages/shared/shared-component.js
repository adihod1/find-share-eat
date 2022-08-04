import React, {useEffect} from 'react'
import RecipesList from '../../recipes-list/recipe-list-connector'

function Saved({ fetchRecipesByUserIdAction, recipesValue, user }) {

    useEffect(() => {
        if (user && user?.id) {
            fetchRecipesByUserIdAction(user.id)
        }
    }, [user])

    return (
        <div className={"home-container"}>
            {<RecipesList recipes={recipesValue.Recipes}/>}
        </div>
    )
}

export default Saved