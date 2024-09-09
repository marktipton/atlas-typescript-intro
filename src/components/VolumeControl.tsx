import React from 'react'
import { HiMiniSpeakerWave } from "react-icons/hi2";
// import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { Slider } from "@material-tailwind/react";

const VolumeControl = () => {
  return (
    <div className='flex align-middle'>
      <HiMiniSpeakerWave/>
      <input type="range" className='bg-accent w-full'></input>
    </div>
  )
}

export default VolumeControl