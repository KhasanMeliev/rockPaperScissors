import React from 'react'
import { ScoreCounter, ScoresWrapper } from './styles'

const Score = ({userPoints, computerPoints}) => {
  return (
    <ScoresWrapper>
        <ScoreCounter>
            <button>{userPoints}</button>
            <button>{computerPoints}</button>
        </ScoreCounter>
    </ScoresWrapper>
  )
}

export default Score