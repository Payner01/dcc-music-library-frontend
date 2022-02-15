import React, { useState } from 'react';
import  Button  from 'react-bootstrap/Button';
import './SearchBar.css'


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
            <Button className='custom-btn' variant="primary" size='sm' type="submit" >Search</Button>
        </form>


     );
}

 
export default SearchBar;