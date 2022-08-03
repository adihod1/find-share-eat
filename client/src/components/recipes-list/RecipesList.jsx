import React, { useEffect, useState } from 'react'
import Recipe from '../recipe/recipe-connector'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import './recipesList.scss'
import Modal from 'react-bootstrap/Modal';

const emptyRecipeList = () => (
    <p className="empty-recipe-list">
        Your recipe list is empty <br />
        <span className="icon">
            <FontAwesomeIcon icon={faKitchenSet} /> <br />
        </span>
    </p>
)

const BUCKET_URL = `https://storage.googleapis.com/findshareeat/`

const RecipesList = ({ fetchRecipesAction, recipesValue }) => {

    const [chosenRecipe, setChosenRecipe] = useState({})

    const printRecipe = () => {
        window.print();
      };

    useEffect(() => {
        fetchRecipesAction()
    }, [])

    return (
        <div className={"recipes-list-container"}>
            <Modal show={chosenRecipe ? Object.keys(chosenRecipe).length > 0 : false}
                onHide={() => setChosenRecipe({})}>
                <Modal.Header closeButton className={'modal-header'}>
                    <Modal.Title class-name={'modal-title'}>{chosenRecipe.recipeName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={'modal-container'}>
                        <img src={`${BUCKET_URL}${chosenRecipe.image}`} className={`modal-image`} />
                        <p className={'modal-description'}>{chosenRecipe.instructions}</p>
                        <button className="button-print-recipe" onClick={printRecipe}>Print Recipe</button>
                    </div>
                </Modal.Body>
            </Modal>

            {!recipesValue.length ? emptyRecipeList() :
                <Container>
                    <Row>
                        {recipesValue.length && recipesValue.map((recipe, index) => {
                            return (
                                <Col key={recipe.image + recipe.description}>
                                    <Recipe baseUrl={BUCKET_URL} openModal={setChosenRecipe} recipe={recipe} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            }

        </div>
    )
}

export default RecipesList