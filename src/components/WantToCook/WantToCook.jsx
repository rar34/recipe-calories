import PropTypes from 'prop-types'

const WantToCook = ({cook}) => {
    // console.log(wantToCook)
    const {recipe_name, preparing_time, calories} = cook;
    return (
        <div className="">
            <div className="">
                <div>
                    
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <td>{recipe_name}</td>
                                        <td>{preparing_time} min</td>
                                        <td>{calories}</td>
                                        <button className="btn rounded-[50px] border-0 bg-green-400">Preparing</button>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        
                        {/* <div className="overflow-x-auto">
                            <table className="table">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};


WantToCook.propTypes = {
    cook: PropTypes.object,
    recipe_name: PropTypes.string,

}
export default WantToCook;