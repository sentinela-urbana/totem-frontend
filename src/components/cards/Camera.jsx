import './Camera.css'

const Camera = ({video, address, neighborhood, referencePoint, cep, cameraData, setCameraData, setOpen}) => {

  const updatedValue = {
    video: video,
    address: address,
    neighborhood: neighborhood,
    referencePoint: referencePoint,
    cep: cep
  }

  if (!setOpen)
    return (
      <div className='camera' onClick={() => window.alert('Camera indisponível.')}>
        <iframe className='cameraVideo' src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
      <iframe className='cameraVideo' src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <p className='cameraText'>{address} - {neighborhood}</p>
    </div>
  )
}

export default Camera