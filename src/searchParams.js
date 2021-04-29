import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import { useDropdown } from "./useDropdown";

const SearchParams = () =>  {
    const [locaton,setlocation] = useState('Ikoyi LAG')
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown] = useDropdown("Breed","", breeds )
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" placeholder="location" value={locaton} onChange ={e => setlocation(e.target.value)}/>
                </label>
               <AnimalDropdown />
               <BreedDropdown />

                <button>Submit</button>
            </form>
        </div>
    );
};
export default SearchParams;