/** @jsxImportSource @emotion/core */
import { jsx } from '@emotion/core'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import React from 'react'
import {Input, Smily, Send} from 'styles'

import {useLocalStorageState} from 'utils'

function Sentence({sentence, onSentenceChange}) {
  return (
    <form >
      <span><Smily /></span>
      <label htmlFor="sentence"></label>
      <Input type="text"  id="sentence" onChange={onSentenceChange} placeholder="Escribe tu idea" variant="secondary"/>
      <span><Send /></span>
    </form>
  )
}

function Name({name, onNameChange}) {
  return (
    <form>
      <label htmlFor="name"></label>
      <Input type="text"  id="name" onChange={onNameChange} placeholder="Your name..." variant="primary"/>
    </form>
  )
}

function Tags({tags, onTagsChange}) {
  return (
    <form >
      <label htmlFor="tags"></label>
      <Input type="text" id="tags" onChange={onTagsChange} placeholder="#tags..." variant="primary"/>
    </form>
  )
}

function App({initialTags = ' ', initialName = ' '}) {
  const [sentence, setSentence] = useLocalStorageState('sentence', ' Esta es la que se ve')
  const [tags, setTags] = useLocalStorageState('tags', initialTags)
  const [name, setName] = useLocalStorageState('name', initialName)

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
        <div css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
         }}>
         <div>
            <Tags tags={tags} onTagsChange={event => setTags(event.target.value)} />
         </div>
          <div>
            <Name name={name} onNameChange={event => setName(event.target.value)}/>
         </div>
        </div>
        <div css={{
          border: '2px solid black',
          borderRadius: '2em'
        }}>
          <Sentence sentence={sentence} onSentenceChange={event => setSentence(event.target.value)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
