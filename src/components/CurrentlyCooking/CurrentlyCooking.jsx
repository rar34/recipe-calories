import PropTypes from 'prop-types'

const CurrentlyCooking = ({ cook }) => {
    const { recipe_name, preparing_time, calories } = cook;
    // console.log(cook);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">

                    {/* <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>{recipe_name}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};


CurrentlyCooking.propTypes = {
    cook: PropTypes.object
}
export default CurrentlyCooking;