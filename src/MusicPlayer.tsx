import React, { useEffect, useState } from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';

type PlaylistItem = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
};

export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);
  const [currentSong, setCurrentSong] = useState<PlaylistItem | null>(null);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: PlaylistItem[] = await response.json();
      setPlaylist(data);
      if (data.length > 0) {
        setCurrentSong(data[0]); // Set the first song as the current song initially
      }
    };

    fetchPlaylistData();
  }, []);

  console.log('Playlist state:', playlist); // Log the playlist state

  return (
    <div className="flex flex-col md:flex-row shadow-lg rounded-lg divide-x divide-y">
      <CurrentlyPlaying currentSong={currentSong} />
      <Playlist playlist={playlist} currentSong={currentSong}/>
    </div>
  );
}
