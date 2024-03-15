
import PropTypes from 'prop-types'
import { IoMdTime } from "react-icons/io";
import { MdOutlineLocalFireDepartment } from "react-icons/md";



const Recipe = ({ recipe }) => {
    // console.log(recipe)
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;
    // console.log(ingredients);
    return (
        <div>
            <div className="card bg-base-100 shadow-lg">
                <figure><img src={recipe_image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    
                    <div>
                        {
                            ingredients.map((ingredient,idx) => <li key={idx}>{ingredient}</li> )
                        }

                    </div>
                    <hr />
                    <div className='flex gap-6 mb-4'>
                        <span className='flex items-center gap-2'>{<IoMdTime/>} {preparing_time} min</span>
                        <span className='flex items-center gap-2'>{<MdOutlineLocalFireDepartment/>} {calories} Calories</span>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-green-400 rounded-full border-0">Want to Cook</button>
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