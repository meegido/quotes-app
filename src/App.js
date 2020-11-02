import './App.css';
import React from 'react'

 function Sentence({sentence, onSentenceChange}) {
    return (
      <div>
        <label htmlFor="sentence"></label>
        <input type="text"  id="sentence" onChange={onSentenceChange} placeholder="Escribe tu idea"/>
      </div>
    )
  }

  function Name({name, onNameChange}) {
    return (
      <div>
        <label htmlFor="name">{name}</label>
        <input type="text"  id="name" onChange={onNameChange} placeholder="Your name..."/>
      </div>
    )
  }

  function Tags({tags, onTagsChange}) {
    return (
      <form >
        <label htmlFor="tags">{tags}</label>
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
      <div>
        <h1>{sentence}</h1>
        <div>
          <Tags tags={tags} onTagsChange={event => setTags(event.target.value)} />
        </div>
        <form>
          <Name name={name} onNameChange={event => setName(event.target.value)}/>
        </form>
        <form>
          <Sentence sentence={sentence} onSentenceChange={event => setSentence(event.target.value)}/>
        </form>
      </div>
    </div>
  );
}

export default App;
