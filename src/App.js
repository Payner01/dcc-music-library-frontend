import React, { useState,useEffect } from 'react';
import axios from 'axios';
import ListOfSongs from './Components/ListOfSongs/ListOfSongs';
import TitleBar from './Components/TitleBar/TitleBar';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css'
import SongForm from './Components/SongForm/SongForm';

function App() {

  const [songs, setSongs] = useState([]);
  const [filteredMusicList, setFilteredMusicList] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])


  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
    setFilteredMusicList(response.data);
  }


  function filteredMusic(searchedItem){
    let filterResults = songs.filter(song => {
    searchedItem = searchedItem.toLowerCase()
    if(song.title.toLowerCase().includes(searchedItem) || song.artist.toLowerCase().includes(searchedItem) || song.album.toLowerCase().includes(searchedItem) || song.genre.toLowerCase().includes(searchedItem) || song.release_date.toLowerCase().includes(searchedItem)){
      return true;
    }
    else {
      return false;
    }
    })
    console.log(filterResults);
    return setFilteredMusicList(filterResults); 
    
  }

  async function addNewSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  return (
    
    <div className='page-header'>
      <TitleBar />
      <div className='page-content-top'>
        <SearchBar filteredMusic={filteredMusic} getAllSongs = {getAllSongs}/>
        <SongForm addNewSongProperty={addNewSong} />
      </div>
      <div className='page-content-bottom'>
        <ListOfSongs songs={songs} filterResults = {filteredMusicList}/>
      </div>
    </div>
  );
}

export default App;
