/** @jsxImportSource @emotion/core */
import { jsx } from '@emotion/core'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import React from 'react'
import {Input} from 'styles'



 function Sentence({sentence, onSentenceChange}) {
    return (
      <form>
        <label htmlFor="sentence"></label>
        <Input type="text"  id="sentence" onChange={onSentenceChange} placeholder="Escribe tu idea"/>
      </form>
    )
  }

  function Name({name, onNameChange}) {
    return (
      <form>
        <label htmlFor="name"></label>
        <input type="text"  id="name" onChange={onNameChange} placeholder="Your name..."/>
      </form>
    )
  }

  function Tags({tags, onTagsChange}) {
    return (
      <form >
        <label htmlFor="tags"></label>
        <input type="text" id="tags" onChange={onTagsChange} placeholder="#tags..." />
      </form>
    )
  }

function App() {
  const [sentence, setSentence] = React.useState(' Aquí se ve lo que escribes')
  const [tags, setTags] = React.useState(' ')
  const [name, setName] = React.useState(' ')

  return (
    <div className="App">
      <div  css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      }}>
        <div>
          <h1>{sentence}</h1>
        </div>
        <div>
          <Tags tags={tags} onTagsChange={event => setTags(event.target.value)} />
        </div>
        <div>
          <Name name={name} onNameChange={event => setName(event.target.value)}/>
        </div>
        <div>
          <Sentence sentence={sentence} onSentenceChange={event => setSentence(event.target.value)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
