import React from 'react'
import ReactDom from 'react-dom'
import Component from './component.jsx'

ReactDom.render(
    <Component value="Show!!!"/>,
    document.getElementById('app')
)