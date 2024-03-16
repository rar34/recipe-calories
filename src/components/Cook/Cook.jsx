import PropTypes from 'prop-types'
import WantToCook from '../WantToCook/WantToCook';

const Cook = ({ wantToCook }) => {
    console.log(wantToCook);
    return (
        <div className='lg:w-1/3'>
            <h2 className="text-center text-2xl font-semibold">Want To Cook: {wantToCook.length}</h2>
            <hr />

            {
                wantToCook.map((cook, idx) => <WantToCook key={idx} cook={cook}></WantToCook>)
            }
            <h2 className="text-center">Currently Cooking: </h2>
        </div>
    );
};

Cook.propTypes = {
    wantToCook: PropTypes.array
}
export default Cook;