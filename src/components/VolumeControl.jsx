import React from 'react'
import { HiMiniSpeakerWave } from "react-icons/hi2";
// import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { Slider } from "@material-tailwind/react";

const VolumeControl = () => {
  return (
    <div className='flex align-middle'>
      <HiMiniSpeakerWave/>
      <Slider
        defaultValue={75}
        barClassName="bg-accent"
        className="ring-accent focus:ring-accent"
      />
    </div>
  )
}

export default VolumeControl