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
                </tr>
                );
            })}
            </tbody>
      </Table>  
      );
}
 
export default ListOfSongs;