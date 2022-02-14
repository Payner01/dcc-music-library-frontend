import React, { useState,useEffect } from 'react';
import axios from 'axios';
import ListOfSongs from './Components/ListOfSongs/ListOfSongs';
import TitleBar from './Components/TitleBar/TitleBar';
import SearchBar from './Components/SearchBar/SearchBar';




function App() {

  const [songs, setSongs] = useState([]);
  const [song, setSong] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  useEffect(() => {
    getOneSong();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setSongs(response.data);
  }

  async function getOneSong(){
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music/1');
    setSong(response.data)
  }

  return (
    <div className='page-header'>
      <TitleBar />
      <div className='page-content-left'>
        <SearchBar />
      </div>
      <div className='page-content-right'>
        <ListOfSongs songs={songs} />
      </div>
    </div>
  );
}

export default App;
