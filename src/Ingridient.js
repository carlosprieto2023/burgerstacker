import React, { Component } from "react";

export default class Ingridient extends Component {
    render() {
        const { name, color } = this.props.ingredient
        console.log("name of ing", name)
        console.log("color of ing", color)

        return (
            <p
                style={{ backgroundColor: color }}
            >
                {name}
            </p>
        )
    }
}