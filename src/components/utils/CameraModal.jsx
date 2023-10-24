import Button from './Button'
import './CameraModal.css'

const CameraModal = ({video, address, neighborhood, referencePoint, cep, isOpen, setOpen}) => {

  if (!isOpen) return (<></>)

  return (
    <div className='cameraModal'>
      <main>
        <iframe className='cameraModalVideo' src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className='modalTextWrapper'>
          <div className='modalLocations'>
            <p className='modalAdress'>{address}</p>
            <p className='modalReferece'>{neighborhood} - {referencePoint}</p>
          </div>
          <p className='modalCEP'>CEP: {cep}</p>
        </div>
        <div className='buttonWrapper'>
          <Button title={'Liberar Chamada'} variant={'modalBlue'}/>
          <Button title={'Fechar'} variant={'modalGray'} onClick={() => setOpen(false)}/>
        </div>
      </main>
    </div>
  )
}

export default CameraModal