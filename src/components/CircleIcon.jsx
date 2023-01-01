import React from 'react'
import { CircleWrapper } from './styles'
import PropTypes from 'prop-types';


const CircleIcon = ({Icon, value, handleGame}) => {
  return (
    <CircleWrapper onClick={()=>handleGame(value)}><Icon/></CircleWrapper>
  )
}

CircleIcon.propTypes  = {
    Icon: PropTypes.any.isRequired,
    value: PropTypes.string.isRequired,
    handleGame: PropTypes.func.isRequired
}

export default CircleIcon