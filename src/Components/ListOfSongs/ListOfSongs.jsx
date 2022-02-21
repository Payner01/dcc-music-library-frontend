import React from 'react';
import  Table  from 'react-bootstrap/Table';


const ListOfSongs = (props) => {
    
    // console.log({updateSong, setFormData});
    
    return ( 
        <Table striped bordered hover variant='dark' size='sm'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Likes</th>
                    <th>Update Song Details</th>
                    <th>Delete Song</th>
                </tr>
            </thead>
            <tbody>
                {props.filterResults.map((song, index) => {
                return (
                <tr key={index}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                    <td>{song.likes}</td>
                    <td><button onClick={()=> {props.setFormData(song)}} type='button'  className='btn btn-secondary'>Update {song.title}</button></td>
                    <td><button onClick={()=> {props.deleteSong(song.id)}} type='button'  className='btn btn-secondary'>Delete {song.title}</button></td>
                </tr>
                );
            })}
            </tbody>
      </Table>  
      );
}
 
export default ListOfSongs;