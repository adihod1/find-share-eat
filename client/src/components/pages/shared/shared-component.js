import React, { useEffect } from 'react'
import RecipesList from '../../recipes-list/recipe-list-connector'

function Shared({ fetchRecipesByUserIdAction, recipesValue, user }) {

    useEffect(() => {
        if (user && user?.id) {
            fetchRecipesByUserIdAction(user.id)
        }
    }, [user])

    return (
        <div className={"home-container"}>
            {recipesValue && <RecipesList recipes={recipesValue.Recipes} showFilter={false} />}
        </div>
    )
}

export default Shared