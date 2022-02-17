import React from 'react';
import  Table  from 'react-bootstrap/Table';


const ListOfSongs = (props) => {
    
    
    
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
                    <td><form onSubmit={props.updateSong}><button type='submit'  className='btn btn-secondary'>Update {song.title} by {song.artist}</button></form></td>
                </tr>
                );
            })}
            </tbody>
      </Table>  
      );
}
 
export default ListOfSongs;