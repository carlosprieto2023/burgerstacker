// import React, { Component } from "react";

const Ingredient = (props) => {

    const { name, color } = props.ingredient
    // console.log("name of ing", name)
    // console.log("color of ing", color)

    return (
        <p
            style={{ backgroundColor: color }}
            onClick={props.clickFunc}
            id={props.itemKey}
        >
            {name}
        </p>
    )

}

export default Ingredient