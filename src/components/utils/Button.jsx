import './Button.css'

const Button = ({title, variant, onClick}) => {
  return (
    <button className={variant} onClick={onClick}>{title}</button>
  )
}

export default Button