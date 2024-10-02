// import React, { Component } from "react";
import Ingredient from "./Ingredient";


const IngList = (props) => {


    // console.log("props inside INGList", this.props)
    const { ingredients, add } = props

    let allIng = ingredients.map((ing, i) => (
        <li key={i}>
            <Ingredient
                ingredient={ing}
                clickFunc={add}
                itemKey={i}
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

export default IngList

