import React from 'react';
import Pet from '/Pet';

const Results   = ({ pets }) => {
    return  (
        <div className="search">
            {pets.length == 0 ? (<h1>No Pets Found</h1>):
            (pets.map(pet => {
                <Pet
                animal={pet.type}
                key={pet.id}
                name={pet.name}
                breed={pet.breeds.primary}
                media={pet.photos}
                location={`${pet.contact.adress.city},
                 ${pet.contact.adress.state}`}
                 id={pet.id}
                />
            }))}
        </div>
    )
}
export default Results;