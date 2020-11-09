
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
    width: '17rem',
    paddingRight: '1rem'
  }
}

const Smily = styled(FaRegSmileWink)({
  padding: '1rem',
  width: '60px',
  height: '60px',
})

const Send = styled(IoIosSend)({
  fontSize: '32px',
  padding: '.08em',
})

const Button = styled.button({
  borderRadius: '50%',
  backgroundColor: 'transparent'
})

export {Input, Smily, Button, Send}
