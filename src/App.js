/** @jsxImportSource @emotion/core */
import { jsx } from '@emotion/core'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import React from 'react'
import {Input, Smily, Send} from 'styles'

import {useLocalStorageState} from 'utils'


function App() {
  const [quote, setQuote] = React.useState({
    sentence: ' Esta es la frase inicial',
    tag: ' ',
    author: ' '
  })
  const {sentence} = quote

  function handleSentenceChange(event, sentence) {
    event.preventDefault()
    setQuote({
      sentence: event.target.value,
    }, sentence)
  }

  function handleTagChange(event, tag) {
    event.preventDefault()
    setQuote({
      tag: event.target.value,
      sentence
    })
  }

  function handleAuthorChange(event, author) {
    event.preventDefault()
    setQuote({
      author: event.target.value,
      sentence
    })
  }
 
  return (
    <div className="App">
      <div css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        background: 'radial-gradient(63.34% 63.34% at 50% 50%, rgba(226, 146, 146, 0.5) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #A8ADEE 0%, rgba(249, 226, 174, 0) 100%);',
        height: '100vh',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '400px',
        },
      }}>
      <div>
        <h1 css={{
          fontSize: '4rem'
        }}>{sentence}</h1>
      </div>
      <div>
        <form>
          <div css={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          </div>
          <label htmlFor="tag"></label>
            <Input type="text"  id="tag" onChange={handleTagChange} placeholder="#tag..." variant="primary"/>
          <label htmlFor="author"></label>
            <Input type="text"  id="author" onChange={handleAuthorChange} placeholder="My name..." variant="primary"/>
          <div css={{
            border: '2px solid black',
            borderRadius: '2em',
            width: '400px',
          }}>
            <span><Smily /></span>
            <label htmlFor="sentence"></label>
            <Input type="text"  id="sentence" onChange={handleSentenceChange} placeholder="Escribe tu idea" variant="secondary"/>
            <span><Send /></span>
          </div>
          
        </form>
      </div>
      </div>
    </div>
  );
}

export default App;
