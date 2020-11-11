/** @jsxImportSource @emotion/core */
import {jsx} from '@emotion/core'
import {Input, Smily, Button, Send} from 'styles'
import React from 'react'

const API_URL = 'http://localhost:8080/quotes'

function QuotesContainer() {
  const [disabled, setDisabled] = React.useState(true)
  const [quote, setQuote] = React.useState({
    sentence: 'Esta es la frase inicial',
  })

  const {sentence} = quote

  function createQuote() {
    return fetch(API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(quote),
    }).then(async response => {
      const data = await response.json()
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

  function handleSentenceChange(event) {
    event.preventDefault()
    const sentenceValue = event.target.value

    const capitelizeSentence =
      sentenceValue.slice(0, 1).toUpperCase() + sentenceValue.slice(1)

    setQuote({
      sentence: capitelizeSentence,
    })
    setDisabled(false)
  }

  return (
    <div>
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
  )
}

export default QuotesContainer
