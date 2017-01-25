import React from 'react'
import { render } from 'react-dom'
import { hello } from './components/hello'

render(
    <div>
        <hello><h1>It works!</h1></hello>
    </div>,
    document.getElementById('root')
)