import React, { useEffect, useState } from 'react'
import PlayListItem from './PlayListItem'

type PlaylistItem = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
};

const Playlist = () => {
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: PlaylistItem[] = await response.json();
      setPlaylist(data);
    };

    fetchPlaylistData();
  }, []);

  return (
    <div className='p-6 md:w-1/2'>
      <h1 className='font-medium text-xl pb-4'>Playlist</h1>
      {playlist.map(item => (
        <PlayListItem
          key={item.id}
          name={item.title}
          artist={item.artist}
          time={item.duration}
          bgColor="bg-secondary-light"  // or another color based on your needs
        />
      ))}
    </div>
  )
}

export default Playlist