import { useState } from "react";
import { useEffect } from "react";
import "./Home.css"
import Cart from "../Cart/Cart";

const Home = () => {

    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);


    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setAllActors(data));
    }, [])


    const handleSelectActor = (actor) => {
        const isExist = selectedActors.find((item) => item.id == actor.id);
        let count = actor.salary;
        if (isExist) {
            return alert("Already Booked")
        }
        else {

            selectedActors.forEach((item) => {
                count = count + item.salary
            })

            const totalRemaining = 20000 - count;
            if (count > 20000) {
                return alert("tk sesh r hobe na")
            }
            else {
                setTotalCost(count)
                setRemaining(totalRemaining)
                setSelectedActors([...selectedActors, actor]);
            }

        }
        // console.log(count)
    }
    // console.log(selectedActors)

    return (
        <div className="flex justify-between">
            {/* home container */}
            <div className="border-2 max-w-4xl gap-7 flex flex-wrap ml-7">
                {
                    allActors.map(actor => <div key={actor.id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={actor.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{actor.name}</h2>
                            <div className="flex space-x-5">
                                <p className="text-lg font-medium">Salary: {actor.salary}$</p>
                                <p className="text-lg font-medium">roll: {actor.role}</p>
                            </div>
                            <div className="card-actions">
                                <button onClick={() => handleSelectActor(actor)} className="btn btn-primary">Select </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* cart Container */}
            <div className="max-w-lg mx-auto p-4 text-white">
                <Cart selectedActors={selectedActors} remaining={remaining} totalCost={totalCost}></Cart>
            </div>
        </div>
    );
};

export default Home;