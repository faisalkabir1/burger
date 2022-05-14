import React, { Component } from "react";
import './BurgerStyle.css';


export default class Burger extends Component {
    state = {
        Lettuce: 0,
        Tomato: 0,
        Cheese: 0,
        Meat: 0
    }
    render() {
        return (
            <>
                <div className="burgerIngredients">
                    Burger

                </div>
                <div className="ingredientsBlock">
                    <>Lettuce</>
                    <button className="ingrBtn"> Add </button>
                    <button className="ingrBtn"> Remove</button>

                </div>
            </>
        )
    }
}