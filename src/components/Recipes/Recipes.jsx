import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleWantToCookBtn}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);


    return (
        <div className="lg:w-2/3 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
                    {
                        recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} handleWantToCookBtn={handleWantToCookBtn}></Recipe>)
                    }
                </div>
            </div>
    );
};


Recipes.propTypes = {
    handleWantToCookBtn: PropTypes.func
}
export default Recipes;