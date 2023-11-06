import './Header.css'
import profileIcon from '../../../public/profileIcon.svg'

const Header = () => {
  return (
    <header id='header'>
      <p>Sistema Digital de Proteção ao Cidadão</p>

      <div id='userSect'>
        <img src={profileIcon} alt='userPic'/>
        <div id='labels'>
          <p>Usuario</p>
          <p style={{cursor: 'pointer'}}>Sair</p>
        </div>

      </div>
    </header>
  )
}

export default Header