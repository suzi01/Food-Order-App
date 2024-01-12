import meaalsImage from '../../assets/meals.jpg';
import classes from "./Header.module.css";
import {Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={meaalsImage} alt="A table full of delicious food!"/>
        </div>
    </Fragment>
}
export default Header;