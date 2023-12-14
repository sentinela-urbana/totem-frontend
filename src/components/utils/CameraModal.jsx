import Button from './Button'
import './CameraModal.css'

const CameraModal = ({video, address, neighborhood, referencePoint, cep, isNotified, setNotified, isOpen, setOpen}) => {

  if (!isOpen) return (<></>)

  return (
    <div className={isNotified ? 'notifiedCameraModal' : 'cameraModal'} onClick={() => setOpen(false)}>
      <main onClick={e => e.stopPropagation()}>
        <video className='cameraModalVideo' ref={video} autoPlay playsInline></video>
        <div className='modalTextWrapper'>
          <div className='modalLocations'>
            <p className='modalAdress'>{address}</p>
            <p className='modalReferece'>{neighborhood} - {referencePoint}</p>
          </div>
          <p className='modalCEP'>CEP: {cep}</p>
        </div>
        <div className='buttonWrapper'>
          <Button title={'Finalizar Acompanhamento'} variant={'modalRed'} onClick={() => {
            if (isNotified) setNotified(false)
            else alert('Esta câmera não está sob acompanhamento.')
            }}/>
          <Button title={'Fechar'} variant={'modalGray'} onClick={() => setOpen(false)}/>
        </div>
      </main>
    </div>
  )
}

export default CameraModal