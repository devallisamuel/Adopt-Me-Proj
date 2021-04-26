import React from 'react';

const SearchParams = () =>  {
    const locaton = "ikoyi, Lag"
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" placeholder="location" value={locaton} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};
export default SearchParams;