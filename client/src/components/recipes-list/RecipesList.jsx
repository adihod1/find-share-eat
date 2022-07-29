import React from 'react'
import Recipe from '../recipe/Recipe'
import { mockRecipes } from '../../mock.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './recipesList.scss'

function RecipesList() {

    return (
        <div className={"recipes-list-container"}>
            <Container>
                <Row>
                    {mockRecipes.length &&
                        mockRecipes.map(({ image, description, time }, index) => {
                            return (
                                <Col key={image + description} md="12" lg="6" xl="3">
                                    <Recipe image={image} description={description} time={time} />
                                </Col>
                            )
                        })}
                </Row>
            </Container>
        </div>
    )
}

export default RecipesList