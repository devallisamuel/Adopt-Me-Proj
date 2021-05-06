import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from './Results';
import { useDropdown } from "./useDropdown";

const SearchParams = () =>  {
    const [locaton,setlocation] = useState('Ikoyi LAG');
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed","", breeds );
    const [pets, setPets] = useState([]);
    
    async function requestPets  ()  {
        const { animals } = await pets.animals({
            locaton,
            breed,
            type:animal
        });
        setPets(animals || []);
    }

    useEffect(() => {
        setBreeds([]);
        setBreeds("");
        pet.breeds(animal).then(({ beeeds:apiBreeds }) =>{
            const breedStrings = apiBreeds.map(({ name }) => name);
            setBreeds(breedStrings);
        }, console.error);
    }, [animal, setBreed, setBreeds]);
    return (
        <div className="search-params">
            <form onSubmit = {(e) =>{
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input id="location" placeholder="location" value={locaton} 
                    onChange ={e => setlocation(e.target.value)}/>
                </label>
               <AnimalDropdown />
               <BreedDropdown />

                <button>Submit</button>
            </form>
            <Results pet={pets}/>
        </div>
    );
};
export default SearchParams;