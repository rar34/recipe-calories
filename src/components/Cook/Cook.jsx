import PropTypes from 'prop-types'
import WantToCook from '../WantToCook/WantToCook';
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';

const Cook = ({ wantToCook, handleCurrentlyCooking, cook, totalTime, totalCalories }) => {
    // console.log(cook);
    return (
        <div className='lg:w-1/3 cards my-6 px-3'>
            <h2 className="text-center text-2xl font-semibold">Want To Cook: {wantToCook.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='flex justify-between'>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>

                </table>
            </div>
            <hr />

            {
                wantToCook.map((cook, idx) => <WantToCook key={idx} cook={cook} handleCurrentlyCooking={handleCurrentlyCooking}></WantToCook>)
            }
            <h2 className="text-center">Currently Cooking: {cook.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='flex justify-between'>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>

                </table>
            </div>
            {
                cook.map((c, idx) => <CurrentlyCooking key={idx} cook={c}></CurrentlyCooking>)
            }
            <hr />
            <div className='flex justify-between'>
                <p className='font-bold'>Total Time: {totalTime} minutes</p>
                <p className='font-bold'>Total Calories: {totalCalories} calories</p>
            </div>
        </div>
    );
};

Cook.propTypes = {
    wantToCook: PropTypes.array,
    handleCurrentlyCooking: PropTypes.func,
    cook: PropTypes.object,
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number
}
export default Cook;