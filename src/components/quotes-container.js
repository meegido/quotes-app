/** @jsxImportSource @emotion/core */
import {jsx} from '@emotion/core'
import React from 'react'

import {WriteQuote} from './write-quote'

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

  function handleChange(event) {
    const sentenceValue = event.target.value

    const capitelizeSentence =
      sentenceValue.slice(0, 1).toUpperCase() + sentenceValue.slice(1)

    setQuote({
      sentence: capitelizeSentence,
    })
    setDisabled(false)
  }

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
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
        <WriteQuote
          quote={quote}
          handleQuoteSubmit={handleSubmit}
          onSentenceChange={handleChange}
          disabled={disabled}
        />
      </div>
    </div>
  )
}

export default QuotesContainer
