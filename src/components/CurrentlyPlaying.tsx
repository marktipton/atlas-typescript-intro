import React from 'react'
import CoverArt from './CoverArt'
import SongTitle from './SongTitle'
import PlayControls from './PlayControls'
import VolumeControl from './VolumeControl'

const CurrentlyPlaying = () => {
  return (
    <div className='flex flex-col justify-between p-6 md:w-1/2'>
      <CoverArt/>
      <SongTitle/>
      <PlayControls/>
      <VolumeControl/>
    </div>
  )
}

export default CurrentlyPlaying