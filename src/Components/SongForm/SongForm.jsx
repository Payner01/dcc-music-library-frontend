import React, { useState } from 'react';

const SongForm = (props) => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            releaseDate: releaseDate 
        };
        console.log(newEntry);
        
    }

    return ( 

        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' className='form-control' value={title} onChange={(event) => setName(event.target.value)} />
                <label>Artist</label>
                <input type='text' className='form-control' value={artist} onChange={(event) => setPost(event.target.value)}/>
                <label>Album</label>
                <input type='text' className='form-control' value={album} onChange={(event) => setPost(event.target.value)}/>
                <label>Genre</label>
                <input type='text' className='form-control' value={genre} onChange={(event) => setPost(event.target.value)}/>
                <label>Release Date</label>
                <input type='text' className='form-control' value={releaseDate} onChange={(event) => setPost(event.target.value)}/>
                <button type='submit' className='btn btn-secondary' style={{'margin-top': '1em'}}>Create Song</button>
            </div>
        </form>

     );
    }
 
export default SongForm;pr
ops