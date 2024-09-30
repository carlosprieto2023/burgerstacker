import React, { Component } from "react";

export default class Ingredient extends Component {
    render() {
        const { name, color } = this.props.ingredient
        // console.log("name of ing", name)
        // console.log("color of ing", color)

        return (
            <p
                style={{ backgroundColor: color }}
                onClick={this.props.clickFunc}
            >
                {name}
            </p>
        )
    }
}