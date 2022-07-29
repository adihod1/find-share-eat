import React, { useState, useEffect } from 'react'
import Recipe from '../recipe/Recipe'
import { mockRecipes } from '../../mock.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './recipesList.scss'
import Modal from 'react-bootstrap/Modal';

function RecipesList() {

    const [chosenRecipe, setChosenRecipe] = useState({})

    return (
        <div className={"recipes-list-container"}>
            {Object.keys(chosenRecipe).length &&
                <Modal show={Object.keys(chosenRecipe).length} onHide={() => setChosenRecipe({})}>
                    <Modal.Header closeButton className={'modal-header'}>
                        <Modal.Title class-name={'modal-title'}>{chosenRecipe.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={'modal-container'}>
                            <img src={chosenRecipe.image} />
                            <p className={'modal-description'}>{chosenRecipe.description}</p>
                        </div>
                    </Modal.Body>
                </Modal>
            }
            <Container>
                <Row>
                    {mockRecipes.length &&
                        mockRecipes.map((recipe, index) => {
                            return (
                                <Col key={recipe.image + recipe.description} md="12" lg="6" xl="3">
                                    <Recipe openModal={setChosenRecipe} recipe={recipe} />
                                </Col>
                            )
                        })}
                </Row>
            </Container>
        </div>
    )
}

export default RecipesList