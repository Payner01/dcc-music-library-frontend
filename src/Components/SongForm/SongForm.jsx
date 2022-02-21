import React, { useState } from 'react';
import "./SongForm.css"
import { Modal, Button } from 'react-bootstrap';

const SongForm = (props) => {
    
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setrelease_Date] = useState('');
    const [likes, setLike] = useState(0)


    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date,
            likes: likes
        };
        console.log(newEntry);
        props.addNewSongProperty(newEntry);
        setTitle('');
        setArtist('');
        setAlbum('');
        setGenre('');
        setrelease_Date('');
        setLike(0);
        handleClose();
    }
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShowAdd = () => setShow(true);

    return (
        <div className='add-song-form'>
            <Button className='custom-btn' variant="primary" size='sm' onClick={handleShowAdd}>Add Song</Button>
                <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Music Library</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit} className='form-grid'>
                    <h3 className='form-header'>Add Song</h3>
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
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button className='custom-btn' variant="primary" size='sm' onClick={handleClose}>Close</Button>
                <Button className='custom-btn' variant="primary" size='sm' type='submit' onClick={handleSubmit}>Save Changes</Button>
            </Modal.Footer>
            </Modal>
        
            {/* <form onSubmit={handleSubmit} className='form-grid'>
               <h3 className='form-header'>Add Song</h3> 
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
                    <button type='submit' className='btn btn-secondary'>Create Song</button>
                </div>
            </form> */}
        </div>

     );
    }
 
export default SongForm;