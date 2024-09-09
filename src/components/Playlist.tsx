import React from 'react'
import PlayListItem from './PlayListItem'

type PlaylistItem = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
};

type PlaylistProps = {
  playlist: PlaylistItem[];
};

function Playlist({playlist}: PlaylistProps) {
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