import React, { useEffect, useState } from 'react'
import Recipe from '../recipe/recipe-connector'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import './recipesList.scss'
import Modal from 'react-bootstrap/Modal';
import RecipeFilters from "../recipe-filters/recipe-filters-connector";

const emptyRecipeList = () => (
    <p className="empty-recipe-list">
        Your recipe list is empty <br />
        <span className="icon">
            <FontAwesomeIcon icon={faKitchenSet} /> <br />
        </span>
    </p>
)

const BUCKET_URL = `https://storage.googleapis.com/findshareeat/`

const RecipesList = ({
    recipes,
    fetchRecipesAction,
    recipesValue,
    sortFilterValue,
    searchFilterValue,
    ingredientsFilterValue,
    categoriesFilterValue,
    showFilter
}) => {

    const [chosenRecipe, setChosenRecipe] = useState([])

    const handlePrint = (
        window.print
    )

    useEffect(() => {
        if (showFilter) {
            const filters = {
                search: searchFilterValue,
                sort: sortFilterValue.value,
                ingredients: ingredientsFilterValue.map(({ value }) => value),
                categories: categoriesFilterValue.map(({ value }) => value)
            }
            fetchRecipesAction(filters)
        }
    }, [sortFilterValue, searchFilterValue, ingredientsFilterValue, categoriesFilterValue])


    return (
        <>
            <Row>
                {showFilter && <RecipeFilters />}
            </Row>
            <div className={"recipes-list-container"}>
                <Modal show={chosenRecipe ? Object.keys(chosenRecipe).length > 0 : false}
                    onHide={() => setChosenRecipe({})}>
                    <Modal.Header closeButton className={'modal-header'}>
                        <Modal.Title class-name={'modal-title'}>{chosenRecipe.recipeName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={'modal-container'}>
                            <img src={`${BUCKET_URL}${chosenRecipe.image}`} className={`modal-image`} />
                            <p className={'modal-description'}>{chosenRecipe.description}</p>
                            <p>{`Cooking time: ${chosenRecipe.cookingTime}`}</p>
                            <h3>Ingridients:</h3>
                            {chosenRecipe?.Ingridients?.map(ingridient => {
                                return (
                                    <p>{ingridient}</p>
                                )
                            })}
                            <h3>Instructions:</h3>
                            <p>{chosenRecipe.instructions}</p>
                            <button className="button-print-recipe" onClick={handlePrint}>Print recipe</button>
                        </div>
                    </Modal.Body>
                </Modal>
                {recipes === undefined || recipes.length === 0 ? emptyRecipeList() :
                    <Container>
                        <Row>
                            {recipes.length && recipes.map((recipe, index) => {
                                return (
                                    <Col xs={3} key={recipe.image + recipe.description}>
                                        <Recipe baseUrl={BUCKET_URL} openModal={setChosenRecipe} recipe={recipe} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                }
            </div>
        </>
    )
}

export default RecipesList