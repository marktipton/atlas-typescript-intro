import React from 'react'

type songTitleProps = {
  title: String;
  artist: String;
};

function SongTitle({title, artist}: songTitleProps) {
  return (
    <div>
      <h1 className='font-bold text-xl text-primary'>{title}</h1>
      <p className='text-secondary'>
        {artist}
      </p>
    </div>
  )
}

export default SongTitle