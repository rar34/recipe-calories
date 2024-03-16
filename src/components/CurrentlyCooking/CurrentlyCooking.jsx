import PropTypes from 'prop-types'

const CurrentlyCooking = ({ cook }) => {
    const { recipe_name, preparing_time, calories } = cook;
    // console.log(cook);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        <tr className='flex justify-between'>
                            <td></td>
                            <td className='w-1/2'>{recipe_name}</td>
                            <td className='w-1/4'>{preparing_time}</td>
                            <td className='w-1/4'>{calories}</td>
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