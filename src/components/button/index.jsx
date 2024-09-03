/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './button.sass'

const Button = ({ children, to }) => {
  return (
    <Link className='button_link' to={to}>
      {children}
    </Link>
  )
}

export default Button
