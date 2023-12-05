import './Camera.css'

import React, { useEffect, useRef } from "react"
import Connection from '@/config/Connection'
import createSpotChannel from "@/config/createSpotChannel.jsx"

const Camera = ({address, neighborhood, referencePoint, cep, setCameraData, setOpen}) => {

  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef(null)
  const spotConn = useRef(new Connection("spot"))
  const surveillanceConn = useRef(new Connection("surveillance"))
  const isInitialized = useRef(false)

  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true

      // Initialize the peer connections
      spotConn.current.createPeerConnection()
      surveillanceConn.current.createPeerConnection()

      // Setup remote video elements for the surveillance connection
      surveillanceConn.current.remoteStreamTargets = [
        remoteVideoRef.current
      ]

      console.log(surveillanceConn.current.remoteStreamTargets)
      // Create channels for both spot connections and surveillance
      createSpotChannel(1, "spot", spotConn.current)
      createSpotChannel(1, "surveillance", surveillanceConn.current)

      // Get user media for the first spot
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          localVideoRef.current.srcObject = stream
          spotConn.current.localStream = stream
          spotConn.current.loadStream()
          spotConn.current.createOffer()
        })
        .catch((error) =>
          console.error("Error accessing media devices:", error)
        )
    }

    return () => {
      spotConn.current.close()
      surveillanceConn.current.close()
    }
  }, [])

  const updatedValue = {
    video: remoteVideoRef,
    address: address,
    neighborhood: neighborhood,
    referencePoint: referencePoint,
    cep: cep
  }

    // <h2>Spot 1 (Webcam)</h2>
    //   <div>
    //     <video ref={localVideoRef} autoPlay playsInline width={"50%"}></video>
    //   </div>

  if (!setOpen)
    return (
      <div className='camera' onClick={() => window.alert('Camera indisponível.')}>
        <video className='cameraVideo' ref={remoteVideoRef} autoPlay playsInline></video>
        <p className='cameraText'>{address} - {neighborhood}</p>
      </div>
    )

  return (
    <div className='camera' onClick={() => {
        setCameraData(cameraData => ({
          ...cameraData,
          ...updatedValue
        }))
        setOpen(true)
      }}>
      <video className='cameraVideo' ref={remoteVideoRef} autoPlay playsInline></video>
      <p className='cameraText'>{address} - {neighborhood}</p>
    </div>
  )

  // return (
  //   <div>
  //     <h2>Surveillance 1 (Received Broadcast)</h2>
  //     <video ref={remoteVideoRef} autoPlay playsInline></video>
  //   </div>
  // )
}

export default Camera