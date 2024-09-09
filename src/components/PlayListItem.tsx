import React from 'react'

interface PlayListItemProps {
  name: string;
  artist: string;
  time: string;
  bgColor: string;
}

const PlayListItem: React.FC<PlayListItemProps> = ({ name, artist, time, bgColor }) => {
  return (
    <div className={`flex w-full items-center justify-between ${bgColor} rounded-lg`}>
      <div>
        <p className='text-primary font-medium'>{name}</p>
        <p className='text-secondary font-medium'>{artist}</p>
      </div>
      <p className='text-secondary font-medium'>{time}</p>

    </div>
  )
}

export default PlayListItem