import React from 'react'
import CoverArt from './CoverArt'
import SongTitle from './SongTitle'
import PlayControls from './PlayControls'
import VolumeControl from './VolumeControl'

type CurrentlyPlayingProps = {
  currentSong: {
    id: number;
    title: string;
    artist: string;
    genre: string;
    duration: string;
    cover: string;
  } | null;
};

function CurrentlyPlaying({ currentSong }: CurrentlyPlayingProps) {
  if (!currentSong) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col justify-between p-6 md:w-1/2'>
      <CoverArt cover={currentSong.cover}/>
      <SongTitle title={currentSong.title} artist={currentSong.artist}/>
      <PlayControls/>
      <VolumeControl/>
    </div>
  )
}

export default CurrentlyPlaying