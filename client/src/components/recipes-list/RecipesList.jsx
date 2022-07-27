import React, { useState } from 'react'
import Recipe from '../recipe/Recipe'

function RecipesList() {

    const [recipes, setRecipes] = useState(null)

    return (
        recipes &&
        recipes.map(recipe => {
            return (
                <Recipe />
            )
        })
    )
}

export default RecipesList