import React, { Component } from "react";
import Ingredient from "./Ingredient";

export default class BurgerPane extends Component {
    render() {
        const { ingredients } = this.props

        let burgerBits = ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient
                    ingredient={ing}
                    itemKey={i}
                    clickFunc={this.props.remove}
                />
            </li>
        ))

        return (
            <section className="pane">
                <h3>Burger Pane</h3>
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}