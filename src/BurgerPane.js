// import React, { Component } from "react";
import Ingredient from "./Ingredient";

const BurgerPane = (props) => {

    const { ingredients } = props

    let burgerBits = ingredients.map((ing, i) => (
        <li key={i}>
            <Ingredient
                ingredient={ing}
                itemKey={i}
                clickFunc={props.remove}
            />
        </li>
    ))

    return (
        <section className="pane">
            <h3>Burger Pane</h3>
            <ul>
                {burgerBits}
            </ul>
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )

}

export default BurgerPane;