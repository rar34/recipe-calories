import PropTypes from 'prop-types'

const CurrentlyCooking = ({ cook, index }) => {
    const { recipe_name, preparing_time, calories } = cook;
    // console.log(cook);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        <tr className='flex justify-between'>
                            <td>{index + 1}</td>
                            <td className='w-1/2'>{recipe_name}</td>
                            <td className='w-1/4'>{preparing_time} minutes</td>
                            <td className='w-1/4'>{calories} calories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};


CurrentlyCooking.propTypes = {
    cook: PropTypes.object,
    index: PropTypes.object
}
export default CurrentlyCooking;