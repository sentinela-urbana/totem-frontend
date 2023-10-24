'use client'

import Camera from "@/components/cards/Camera"
import Header from "@/components/layout/Header"
import CameraModal from "@/components/utils/CameraModal"
import { useState } from "react"

const Home = () => {
  const [cameraData, setCameraData] = useState({video: '', address: '', neighborhood: '', referencePoint: '', cep: ''})
  // setCameraData = () => {

  // }
  const [cameraModalIsOpen, setCameraModalIsOpen] = useState(false)

  return (
    <>
    <Header/>
      <div id='home-wrapper'>
        <div id='home-title'>
          <h1>Região sul - Perequê-Mirim/pegoreli</h1>
          <h4>12 Totens de 12</h4>
        </div>
        <div id="camera-wrapper">
          <Camera video='https://www.youtube.com/embed/hHmEgOAY3ao?si=1Uk1vgKY7tUfXVjI' address={'Av. José da Costa Pinheiro Júnior, 1970'} neighborhood={'Travessão'} referencePoint={'Próximo ao Hospital Regional'} cep={'11632-788'} cameraData={cameraData} setCameraData={setCameraData} setOpen={setCameraModalIsOpen}/>
          <Camera video='https://www.youtube.com/embed/qhgnylFSHvg?si=X3NScZklGaAdnhtW' address={'Av. José da Costa Pinheiro Júnior, 1970'} neighborhood={'Travessão'}/>
          <Camera video='https://www.youtube.com/embed/ODKTITUPusM?si=_BxPR8Hmxc-qzvJ_' address={'Av. José da Costa Pinheiro Júnior, 1970'} neighborhood={'Travessão'}/>
          <Camera video='https://www.youtube.com/embed/hHmEgOAY3ao?si=1Uk1vgKY7tUfXVjI' address={'Av. José da Costa Pinheiro Júnior, 1970'} neighborhood={'Travessão'}/>
          <Camera video='https://www.youtube.com/embed/qhgnylFSHvg?si=X3NScZklGaAdnhtW' address={'Av. José da Costa Pinheiro Júnior, 1970'} neighborhood={'Travessão'}/>
          <Camera video='https://www.youtube.com/embed/ODKTITUPusM?si=_BxPR8Hmxc-qzvJ_' address={'Av. José da Costa Pinheiro Júnior, 1970'} neighborhood={'Travessão'}/>
          <Camera video='https://www.youtube.com/embed/hHmEgOAY3ao?si=1Uk1vgKY7tUfXVjI' address={'Av. José da Costa Pinheiro Júnior, 1970'} neighborhood={'Travessão'}/>
          <Camera video='https://www.youtube.com/embed/qhgnylFSHvg?si=X3NScZklGaAdnhtW' address={'Av. José da Costa Pinheiro Júnior, 1970'} neighborhood={'Travessão'}/>
          <Camera video='https://www.youtube.com/embed/ODKTITUPusM?si=_BxPR8Hmxc-qzvJ_' address={'Av. José da Costa Pinheiro Júnior, 1970'} neighborhood={'Travessão'}/>
          <Camera video='https://www.youtube.com/embed/hHmEgOAY3ao?si=1Uk1vgKY7tUfXVjI' address={'Av. José da Costa Pinheiro Júnior, 1970'} neighborhood={'Travessão'}/>
        </div>
        <CameraModal video={cameraData.video} address={cameraData.address} neighborhood={cameraData.neighborhood} referencePoint={cameraData.referencePoint} cep={cameraData.cep} isOpen={cameraModalIsOpen} setOpen={setCameraModalIsOpen}/>
      </div>
    </>
  )
}

export default Home