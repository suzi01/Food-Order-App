import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import cartContext from "../../../Store/cart-context";

const MealItem = props => {
    const cartCtx = useContext(cartContext)

    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id:props.id,
            name: props.name,
            amount: amount,
            price:props.price
        })
        console.log(cartCtx)
    }

    return (
        <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} />
        </div>
    </li>)
}

export default MealItem