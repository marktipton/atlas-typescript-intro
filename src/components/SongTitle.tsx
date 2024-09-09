import React from 'react'

type songTitleProps = {
  title: String;
};

function SongTitle({title}: songTitleProps) {
  return (
    <div>
      <h1 className='font-bold text-xl text-primary'>Tidal Drift</h1>
      <p className='text-secondary'>
        {title}
      </p>
    </div>
  )
}

export default SongTitle