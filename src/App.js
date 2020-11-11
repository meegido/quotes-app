/** @jsxImportSource @emotion/core */
import {jsx} from '@emotion/core'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import React from 'react'
import QuotesContainer from './components/quotes-container'

function App() {
  return (
    <div className="App">
      <div
        css={{
          background:
            'radial-gradient(63.34% 63.34% at 50% 50%, rgba(226, 146, 146, 0.5) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #A8ADEE 0%, rgba(249, 226, 174, 0) 100%);',
          height: '100vh',
        }}
      >
        <div>
          <QuotesContainer />
        </div>
      </div>
    </div>
  )
}

export default App
