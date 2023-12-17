import './Header.css'
import profileIcon from '../../../public/profileIcon.svg'
import Link from 'next/link'
import Image from 'next/image'

const Header = ({isLoggedIn}) => {

  if (!isLoggedIn)
  return (
    <header id='header'>
      <p>Sistema Digital de Proteção ao Cidadão</p>
    </header>
  )

  return (
    <header id='header'>
      <p>Sistema Digital de Proteção ao Cidadão</p>

      <div id='userSect'>
        <Image src={profileIcon} alt='userPic'/>
        <div id='labels'>
          <p>Usuario</p>
          <Link style={{textDecoration: 'none'}} href={'/login'}>
            <p style={{cursor: 'pointer', color: '#FFF'}}>Sair</p>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header