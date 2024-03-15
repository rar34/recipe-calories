import PropTypes from 'prop-types'

const Recipe = ({ recipe }) => {
    // console.log(recipe)
    const { recipe_name, recipe_image, short_description, ingredients } = recipe;
    console.log(ingredients);
    return (
        <div>
            <div className="card bg-base-100 shadow-lg">
                <figure><img src={recipe_image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


Recipe.propTypes = {
    recipe: PropTypes.object
}
export default Recipe;