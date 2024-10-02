import React, { useState } from 'react'
import IngList from './IngList'
import BurgerPane from './BurgerPane'

// Old starting line:
// export default class BurgerStacker extends Component {
const BurgerStacker = () => {
    const [burgerIngredients, setBurgerIngredients] = useState([]);

    const ingredients = [
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
    ]


    const addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        console.log(`clicked ${ingName} and it is ${ingColor}`)
        // The old way using class components
        // this.setState({
        //     burgerIngredients: [
        //         { name: ingName, color: ingColor },
        //         ...this.state.burgerIngredients
        //     ]
        // })
        setBurgerIngredients([
            { name: ingName, color: ingColor },
            ...burgerIngredients
        ]);
    }


    const removeFromStack = (e) => {
        const clickIndex = e.target.id
        const currBurger = burgerIngredients.slice()
        currBurger.splice(clickIndex, 1)
        // this.setState({
        //     burgerIngredients: currBurger
        // })
        setBurgerIngredients(currBurger);
    }

    const clearBurger = () => {
        // this.setState({
        //     burgerIngredients: []
        // })
        setBurgerIngredients([]);
    }


    return (
        <>
            <h1>Burger Stacker</h1>
            <div className='panes'>
                <IngList
                    ingredients={ingredients}
                    add={addToStack}
                />
                <BurgerPane
                    ingredients={burgerIngredients}
                    clear={clearBurger}
                    remove={removeFromStack}
                />
            </div>
        </>
    )

}

export default BurgerStacker