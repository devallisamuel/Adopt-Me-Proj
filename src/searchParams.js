import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () =>  {
    const [locaton,setlocation] = useState('Ikoyi LAG')
    const [animal, setAnimal] = useState('dog');
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" placeholder="location" value={locaton} onChange ={e => setlocation(e.target.value)}/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select value = {animal} 
                    id="animal"
                    onChange ={e => setAnimal(e.target.value)}
                    onBlur ={e => setAnimal(e.target.value)}>
                        <option >All</option>
                        {ANIMALS.map(animal => <option value ={animal} >{animal}</option>)}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};
export default SearchParams;