/** @jsxImportSource @emotion/core */
import {jsx} from '@emotion/core'

import React from 'react'
import {Input, Smily, Button, Send} from 'styles'

function WriteQuote({quote, handleQuoteSubmit, onSentenceChange, disabled}) {
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
        <form onSubmit={handleQuoteSubmit}>
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
                onChange={onSentenceChange}
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

export {WriteQuote}
