import React from 'react'

import { ButtonContainer } from './styles'

function Button({label, onClick, id}) {
  return (
    <ButtonContainer onClick={onClick} id={id}>
      {label}
    </ButtonContainer>
  )
}

export default Button
