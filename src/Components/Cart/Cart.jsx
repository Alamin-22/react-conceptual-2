import PropTypes from 'prop-types';
const Cart = ({ selectedActors, totalCost, remaining }) => {
    // console.log(selectedActors)
    return (
        <div>
            <h1 className="text-4xl">Total Actors: {selectedActors.length}</h1>
            <h3>Remaining: {remaining}</h3>
            <h3>Total Cost: {totalCost}</h3>
            {
                selectedActors.map((actor,idx) => <li key={idx}>{actor.name}</li>)
            }
        </div>
    );
};
Cart.propTypes = {
    selectedActors: PropTypes.array.isRequired,
    remaining: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired
    
}
export default Cart;