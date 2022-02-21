import React, { useEffect, useState } from 'react';
import axios from 'axios';


const UpdateSong = (props) => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setrelease_Date] = useState('');
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        setTitle(props.song.title);
        setArtist(props.song.artist);
        setAlbum(props.song.album);
        setGenre(props.song.genre);
        setrelease_Date(props.song.release_date);
        
    },[props.song]);

    function handleSubmit(event) {
        event.preventDefault();
        let updatedEntry = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date,
            likes: likes,
           
        };
         
        console.log(updatedEntry);
        updateSong(props.song.id, updatedEntry);
        // setTitle('');
        // setArtist('');
        // setAlbum('');
        // setGenre('');
        // setrelease_Date('');
        // setLike(0);
    }

   
    
    async function updateSong(id, updatedEntry){
        let response = await axios.put(`http://127.0.0.1:8000/music/${id}/`, updatedEntry);
        console.log(response);
        if(response.data === 201){
          await props.getAllSongs();
        }
      }



    return ( 
        <div>
        <h3>Update Song</h3>
            <form onSubmit={handleSubmit} className='form-grid'>
                <div className='form-control'>
                    <label>Title</label>
                    <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)} />
                    <label>Artist</label>
                    <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)}/>
                    <label>Album</label>
                    <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)}/>
                    <label>Genre</label>
                    <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)}/>
                    <label>Release Date</label>
                    <input type='date' className='form-control' value={release_date} onChange={(event) => setrelease_Date(event.target.value)}/>
                    <button type='submit' onClick={() => window.location.reload(false)} className='btn btn-secondary'>Update</button>
                </div>
            </form>
        </div>
     );
}
 
export default UpdateSong;