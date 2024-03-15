import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);


    return (
        <div className="my-20 max-w-[1320px] mx-auto">
            <h2 className="text-4xl font-semibold text-center mt-0">Our Recipes</h2>
            <p className="text-center">Indulge in diverse recipes, clear instructions, and enticing visuals. Join our culinary community to elevate your cooking skills effortlessly.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-2/3 my-6">
                {
                    recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;