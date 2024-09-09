import React from 'react'
import PlayListItem from './PlayListItem'

const Playlist = () => {
  return (
    <div className='p-6 md:w-1/2'>
      <h1 className='font-medium text-xl pb-4'>Playlist</h1>
      <PlayListItem name='Painted in Blue' artist='Soul Canvas' time='3:21' bgColor="bg-secondary-light"/>
      <PlayListItem name='Tidal Drift' artist='Echoes of the Sea' time='8:02'/>
      <PlayListItem name='Fading Shadows' artist='The Emberlight' time='3:01'/>
      <PlayListItem name='Cosmic Drift' artist='Solar Flare' time='5:01'/>
      <PlayListItem name='Urban Serenade' artist='Midnight Groove' time='4:54'/>
      <PlayListItem name='Whispers in the Wind' artist='Rust & Ruin' time='6:13'/>
      <PlayListItem name='Electric Fever' artist='Neon Jungle' time='8:41'/>
      <PlayListItem name='Edge of the Abyss' artist='Steel Horizon' time='2:27'/>
      <PlayListItem name='Golden Haze' artist='Velvet Waves' time='3:15'/>
      <PlayListItem name='Shatter the Silence' artist='Thunderclap Echo' time='8:22'/>
    </div>
  )
}

export default Playlist