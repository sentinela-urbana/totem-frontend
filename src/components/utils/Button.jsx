import Link from 'next/link'
import './Button.css'

const Button = ({title, variant, onClick, href}) => {
  if (href)
  return (
    <Link href={href}>
    <button className={variant} onClick={onClick}>{title}</button>
    </Link>
  )

  return (
    <button className={variant} onClick={onClick}>{title}</button>
  )
}

export default Button