import React, { Component } from 'react'
import IngList from './IngList'
import BurgerPane from './BurgerPane'

export default class BurgerStacker extends Component {
    state = {
        ingredients: [
            { name: 'Kaiser Bun', color: 'saddlebrown' },
            { name: 'Sesame Bun', color: 'sandybrown' },
            { name: 'Gluten Free Bun', color: 'peru' },
            { name: 'Lettuce Wrap', color: 'olivedrab' },
            { name: 'Beef Patty', color: '#3F250B' },
            { name: 'Soy Patty', color: '#3F250B' },
            { name: 'Black Bean Patty', color: '#3F250B' },
            { name: 'Chicken Patty', color: 'burlywood' },
            { name: 'Lettuce', color: 'lawngreen' },
            { name: 'Tomato', color: 'tomato' },
            { name: 'Bacon', color: 'maroon' },
            { name: 'Onion', color: 'lightyellow' },
            { name: 'Cheese', color: 'gold' }
        ],
        burgerIngredients: []
    }

    // ingredientsJsx = this.state.ingredients.map(ing => {
    //     return <p>{ing.name}</p>
    // })

    addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        console.log(`clicked ${ingName} and it is ${ingColor}`)
        this.setState({
            burgerIngredients: [
                { name: ingName, color: ingColor },
                ...this.state.burgerIngredients
            ]
        })
    }

    // This method removes individual items on click
    removeFromStack = (e) => {
        //this will need to target an item from the burgerIngredients array
        const clickIndex = e.target.id
        console.log("The index of the item clicked", clickIndex)
        // remove that one piece
        // we'll use slice which creates a copy of the original array
        const currBurger = this.state.burgerIngredients.slice()
        // splice out the selected item
        currBurger.splice(clickIndex, 1)
        console.log('This is the current burger', currBurger)
        // set state with the newly upadated array
        this.setState({
            burgerIngredients: currBurger
        })
    }

    // This clears the burgerIngredients
    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    render() {
        // console.log("this is ingredientsJsx", this.ingredientsJsx)
        return (
            <>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                    <IngList
                        ingredients={this.state.ingredients}
                        add={this.addToStack}
                    />
                    <BurgerPane
                        ingredients={this.state.burgerIngredients}
                        clear={this.clearBurger}
                        remove={this.removeFromStack}
                    />
                </div>
            </>
        )
    }
}