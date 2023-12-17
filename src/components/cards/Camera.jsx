import createSpotChannel from '@/config/createSpotChannel'
import './Camera.css'

import React, { useEffect, useState } from "react"

const Camera = ({spotId, video, address, neighborhood, referencePoint, cep, setCameraData, setOpen, login}) => {

  const [cameraIsSpotted, setCameraIsSpotted] = useState(false)

  const loginToken = login

  useEffect(() => {
    createSpotChannel(
      spotId,
      loginToken,
      setCameraIsSpotted
    )
    console.log('chamando um corno')
  }, [])

  const updatedValue = {
    video: video,
    address: address,
    neighborhood: neighborhood,
    referencePoint: referencePoint,
    cep: cep,
    isNotified: cameraIsSpotted,
    setNotified: setCameraIsSpotted
  }

  return (
    <div className={cameraIsSpotted ? 'notifiedCamera' : 'camera'} onClick={() => {
        setCameraData(cameraData => ({
          ...cameraData,
          ...updatedValue
        }))
        setOpen(true)
      }}>
      <h4>⚠</h4>
      <video className='cameraVideo' ref={video} autoPlay playsInline></video>
      <div className='cameraTextWrapper'>
        <p className='cameraText'>{address} - {neighborhood}</p>
      </div>
    </div>
  )
}

export default Camera