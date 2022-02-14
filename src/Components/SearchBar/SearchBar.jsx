import React, { useState } from 'react';

const SearchBar = (props) => {

    const [search, setSearch] = useState('');

    function handleSubmit(event) {

    }


    return ( 
        <form action="http://www.devcodecampmusiclibrary.com/api/music/1" method="GET">
            <input type="text" />
            <button type="submit" className='button'>Search</button>
        </form>


     );
}

 
export default SearchBar;