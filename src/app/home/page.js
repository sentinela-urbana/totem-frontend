'use client'

import Camera from "@/components/cards/Camera"
import Header from "@/components/layout/Header"
import CameraModal from "@/components/utils/CameraModal"
import { useEffect, useState } from "react"

const Home = () => {
  const [cameraData, setCameraData] = useState({spotId: '', video: '', address: '', neighborhood: '', referencePoint: '', cep: '', isNotified: '', setNotified: ''})
  const [cameraModalIsOpen, setCameraModalIsOpen] = useState(false)
  const [spotList, setSpotList] = useState([])

  const loginToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNzAyNTEyNjk5LCJleHAiOjE3MDI1OTkwOTksImp0aSI6IjlhOTk3NjliLTY2OWUtNDgzNS05N2MxLWZkODg5OTQ2NWJmMiJ9.sSjBSSz1PNwsVy3nwnmWcDkLR0epTYRDvxvZYBNI7gU'

  useEffect(() => {
    loadSpotList()
  }, [])

  const loadSpotList = async () => {
    try {
      const response = await fetch('https://sentinela-urbana-49d7e73fc130.herokuapp.com/api/surveillance/v1/spots', {
        method: 'GET',
        headers: { 'Authorization': loginToken }
      })

      if (response.ok) {
        const result = await response.json()
        console.log('result => ', result)

        setSpotList(result.spots)
      }
    } catch(err) {
      console.error(err)
    }
  }
  
  return (
    <>
    <Header isLoggedIn={true}/>
    <div id='home-wrapper'>
      <div id='home-title'>
        <h1>Região sul - Perequê-Mirim/pegoreli</h1>
        <h3>{spotList.length} Totens de {spotList.length}</h3>
      </div>
      <div id="camera-wrapper">
        {
          spotList.map((item) => {
            return (
              <Camera key={item.id} spotId={item.id} address={mockValues[item.id].address} neighborhood={mockValues[item.id].neighborhood} referencePoint={item.address.complement} cep={item.address.postal_code} cameraData={cameraData} setCameraData={setCameraData} setOpen={setCameraModalIsOpen} login={loginToken}/>
            )
          })
        }
      </div>
      <CameraModal video={cameraData.video} address={cameraData.address} neighborhood={cameraData.neighborhood} referencePoint={cameraData.referencePoint} cep={cameraData.cep} isNotified={cameraData.isNotified} setNotified={cameraData.setNotified} isOpen={cameraModalIsOpen} setOpen={setCameraModalIsOpen}/>
    </div>
    </>
  )
}

const mockValues = [
  { address: 'Av. Frei Pacífico Wagner, 498', neighborhood: 'Centro' },
  { address: 'Av. José da Costa Carvalho Júnior, 1970', neighborhood: 'Travessão' },
  { address: 'Av. Pres. Castelo Branco, 207', neighborhood: 'Sumaré' },
  { address: 'Av. Bahia, 1739', neighborhood: 'Indaiá' },
  { address: 'Av. José Herculano, 1086', neighborhood: 'Pontal de Santa Marina' },
  { address: 'Praça Dr. Diógenes Ribeiro de Lima, 207', neighborhood: 'Centro' },
]

export default Home