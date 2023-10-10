import Camera from "@/components/cards/Camera"
import Header from "@/components/layout/Header"

const Home = () => {
  return (
    <>
    <Header/>
      <div id='home-wrapper'>
        <div id='home-title'>
          <h1>Região sul - Perequê-Mirim/pegoreli</h1>
          <h4>12 Totens de 12</h4>
        </div>
        <div id="camera-wrapper">
          <Camera video='https://www.youtube.com/embed/hHmEgOAY3ao?si=1Uk1vgKY7tUfXVjI'/>
          <Camera video='https://www.youtube.com/embed/qhgnylFSHvg?si=X3NScZklGaAdnhtW'/>
          <Camera video='https://www.youtube.com/embed/ODKTITUPusM?si=_BxPR8Hmxc-qzvJ_'/>
          <Camera video='https://www.youtube.com/embed/hHmEgOAY3ao?si=1Uk1vgKY7tUfXVjI'/>
          <Camera video='https://www.youtube.com/embed/qhgnylFSHvg?si=X3NScZklGaAdnhtW'/>
          <Camera video='https://www.youtube.com/embed/ODKTITUPusM?si=_BxPR8Hmxc-qzvJ_'/>
          <Camera video='https://www.youtube.com/embed/hHmEgOAY3ao?si=1Uk1vgKY7tUfXVjI'/>
          <Camera video='https://www.youtube.com/embed/qhgnylFSHvg?si=X3NScZklGaAdnhtW'/>
          <Camera video='https://www.youtube.com/embed/ODKTITUPusM?si=_BxPR8Hmxc-qzvJ_'/>
          <Camera video='https://www.youtube.com/embed/hHmEgOAY3ao?si=1Uk1vgKY7tUfXVjI'/>
        </div>
      </div>
    </>
  )
}

export default Home