import PropTypes from 'prop-types'

const WantToCook = ({ cook, handleCurrentlyCooking }) => {
    // console.log(wantToCook)
    const { recipe_name, preparing_time, calories } = cook;

    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            <tr className='flex justify-between'>
                                <td>{}</td>
                                <td>{recipe_name}</td>
                                <td>{preparing_time} minutes</td>
                                <td>{calories} calories</td>
                                <button onClick={() => handleCurrentlyCooking(cook)} className="btn rounded-[50px] border-0 bg-green-400">Preparing</button>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />
        </div>
    );
};


WantToCook.propTypes = {
    cook: PropTypes.object,
    recipe_name: PropTypes.string,
    handleCurrentlyCooking: PropTypes.func

}
export default WantToCook;