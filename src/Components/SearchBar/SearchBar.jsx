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
        <div className='form'>
            <h1 className='form-header'>Music Library Search</h1>
            <form className='searchbar' onSubmit={handleSubmit}>
                <input type="text" value={search} placeholder="Search by Title, Artist, Album, Genre, or Release Date" onChange={(event) => setSearch(event.target.value)} />
                <Button className='custom-btn' variant="primary" size='sm' type="submit" >Search</Button>
                <Button className='custom-btn' variant="danger" size='sm' type="submit" onClick={props.songs}>Refresh</Button>
            </form>
        </div>

     );
}

 
export default SearchBar;