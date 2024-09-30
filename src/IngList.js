import React, { Component } from "react";
import Ingredient from "./Ingredient";


export default class IngList extends Component {

    render() {
        // console.log("props inside INGList", this.props)
        const { ingredients, add } = this.props

        let allIng = ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient
                    ingredient={ing}
                    clickFunc={add}
                />
            </li>
        ))

        return (
            <section className="pane">
                <h3>Ingredient List</h3>
                <ul>
                    {allIng}
                </ul>
            </section>
        )
    }
}

