import React, { useState } from 'react';


const SearchBar = (props) => {

    const [search, setSearch] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = '';
        setSearch(newEntry);
        props.filteredMusic(search);
        setSearch('');
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" value={search} placeholder="Search by Title, Artist, Album, Genre, or Release Date" onChange={(event) => setSearch(event.target.value)} />
            <button type="submit" className='button'>Search</button>
        </form>


     );
}

 
export default SearchBar;