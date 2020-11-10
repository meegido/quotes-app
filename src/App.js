/** @jsxImportSource @emotion/core */
import {jsx} from '@emotion/core'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import React from 'react'
import {FaSleigh} from 'react-icons/fa'
import {Input, Smily, Button, Send} from 'styles'

const API_URL = 'http://localhost:8080/quotes'

function App() {
  const [quote, setQuote] = React.useState({
    sentence: 'Esta es la frase inicial',
  })
  const [disabled, setDisabled] = React.useState(true)

  console.log(quote, ' quote state')
  const {sentence} = quote

  function createQuote() {
    return fetch(API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(quote),
    }).then(async response => {
      const {data} = await response.json()
      if (response.ok) {
        return data
      } else {
        const error = {
          message: 'error creating the quote',
        }

        return Promise.reject(error)
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    createQuote({sentence})
  }

  function handleSentenceChange(event, sentence) {
    event.preventDefault()
    setQuote(
      {
        sentence: event.target.value,
      },
      sentence,
    )
    setDisabled(false)
  }

  return (
    <div className="App">
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',

          background:
            'radial-gradient(63.34% 63.34% at 50% 50%, rgba(226, 146, 146, 0.5) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #A8ADEE 0%, rgba(249, 226, 174, 0) 100%);',
          height: '100vh',
          '> div': {
            margin: '10px auto',
            width: '100%',
            maxWidth: '400px',
          },
        }}
      >
        <div>
          <h1
            css={{
              fontSize: '4rem',
            }}
          >
            {sentence}
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div
              css={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                css={{
                  border: '2px solid black',
                  borderRadius: '2em',
                  width: '400px',
                }}
              >
                <span>
                  <Smily />
                </span>
                <label htmlFor="sentence"></label>
                <Input
                  type="text"
                  variant="secondary"
                  id="sentence"
                  name="sentence"
                  placeholder="Escribe tu idea"
                  onChange={handleSentenceChange}
                />
                <Button type="submit" disabled={disabled}>
                  <Send />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
