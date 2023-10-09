import './Camera.css'

const Camera = ({video}) => {
  return (
    <div className='camera'>
      <iframe className='cameraVideo' src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p className='cameraText'>Av. José da Costa Pinheiro Júnior, 1970 - Travessão</p>
    </div>
  )
}

export default Camera