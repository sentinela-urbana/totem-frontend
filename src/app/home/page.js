'use client'

import Camera from "@/components/cards/Camera"
import Header from "@/components/layout/Header"
import CameraModal from "@/components/utils/CameraModal"
import { useState } from "react"

const Home = () => {
  const [cameraData, setCameraData] = useState({video: '', address: '', neighborhood: '', referencePoint: '', cep: ''})
  const [cameraModalIsOpen, setCameraModalIsOpen] = useState(false)

  return (
    <>
    <Header isLoggedIn={true}/>
    <div id='home-wrapper'>
      <div id='home-title'>
        <h1>Região sul - Perequê-Mirim/pegoreli</h1>
        <h4>12 Totens de 12</h4>
      </div>
      <div id="camera-wrapper">
        <Camera address={'Av. José da Costa Pinheiro Júnior, 1970'} neighborhood={'Travessão'} referencePoint={'Próximo ao Hospital Regional'} cep={'11632-788'} cameraData={cameraData} setCameraData={setCameraData} setOpen={setCameraModalIsOpen}/>
        <Camera address={'Av. José da Costa Pinheiro Júnior, 2970'} neighborhood={'Travessão'} referencePoint={'Próximo ao Hospital Internacional'} cep={'12332-111'} cameraData={cameraData} setCameraData={setCameraData} setOpen={setCameraModalIsOpen}/>
        <Camera address={'Av. José da Costa Pinheiro Júnior, 3970'} neighborhood={'Travessão'}/>
        <Camera address={'Av. José da Costa Pinheiro Júnior, 4970'} neighborhood={'Travessão'}/>
        <Camera address={'Av. José da Costa Pinheiro Júnior, 5970'} neighborhood={'Travessão'}/>
        <Camera address={'Av. José da Costa Pinheiro Júnior, 6970'} neighborhood={'Travessão'}/>
        <Camera address={'Av. José da Costa Pinheiro Júnior, 7970'} neighborhood={'Travessão'}/>
        <Camera address={'Av. José da Costa Pinheiro Júnior, 8970'} neighborhood={'Travessão'}/>
        <Camera address={'Av. José da Costa Pinheiro Júnior, 9970'} neighborhood={'Travessão'}/>
        <Camera address={'Av. José da Costa Pinheiro Júnior, 0970'} neighborhood={'Travessão'}/>
      </div>
      <CameraModal video={cameraData.video} address={cameraData.address} neighborhood={cameraData.neighborhood} referencePoint={cameraData.referencePoint} cep={cameraData.cep} isOpen={cameraModalIsOpen} setOpen={setCameraModalIsOpen}/>
    </div>
    </>
  )
}

export default Home