import React, { Component } from "react";
import Ingridient from "./Ingridient";


export default class IngList extends Component {

    render() {
        console.log("props inside INGList", this.props)
        const { ingredients } = this.props

        let allIng = ingredients.map((ing, i) => (
            <li key={i}>
                <Ingridient ingredient={ing} />
            </li>
        ))

        return (
            <div>
                <h2>Ingredient List</h2>
                <ul>
                    {allIng}
                </ul>
            </div>
        )
    }
}

