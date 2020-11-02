
import styled from '@emotion/styled/macro'
import {FaRegSmileWink} from 'react-icons/fa'
import {IoIosSend} from 'react-icons/io'

const Input = styled.input({
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent'
}, ({variant = 'primary'}) => inputVariants[variant])

const inputVariants = {
  primary: {
    padding: '1rem 2rem',
    textDecoration: 'underline'
  },
  secondary: {
    paddingRight: '6rem'
  }
}

const Smily = styled(FaRegSmileWink)({
  padding: '1rem',
  width: '60px',
  height: '60px',
})

const Send = styled(IoIosSend)({
  padding: '1rem',
  width: '60px',
  height: '60px',
})

export {Input, Smily, Send}
