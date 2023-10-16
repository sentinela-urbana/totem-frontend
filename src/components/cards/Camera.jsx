import './Camera.css'

const Camera = ({video, address, neighborhood}) => {
  return (
    <div className='camera'>
      <iframe className='cameraVideo' src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <p className='cameraText'>{address} - {neighborhood}</p>
    </div>
  )
}

export default Camera