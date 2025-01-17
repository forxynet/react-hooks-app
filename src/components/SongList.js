import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

export default function SongList() {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: uuidv4() },
    { title: 'memory gospel', id: uuidv4() },
    { title: 'this wild darknes', id: uuidv4() }
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  }

  useEffect(() => {
    console.log('useEffect hook ran', songs)
  }, [songs])

  useEffect(() => {
    console.log('useEffect hook ran', age)
  }, [age])

  return (
    <div className='song-list'>
      <ul>
        {songs && songs.map(song => {
          return (<li key={song.id}>{song.title}</li>)
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  )
}
