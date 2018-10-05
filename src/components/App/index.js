import React from 'react'
import Navigation from '../Navigation'
import Router from '../Router'

const pages = [
  { title: 'Hello World', url: '/HelloWorld' },
  { title: 'Props', url: '/SimpleProps' },
  { title: 'Deeper into props', url: '/CompleteProps' },
  { title: 'Children', url: '/Children' },
  { title: 'Events', url: '/Events' },
  { title: 'Lifecycle', url: '/Lifecycle' },
  { title: 'State', url: '/State' },
  { title: 'Redux', url: '/Redux' },
  { title: 'Higher-order', url: '/HigherOrder' },
  { title: 'Styling', url: '/Styling' },
  { title: 'Your Move', url: '/YourMove' },
  { title: 'What’s next?', url: '/Next' },
  { title: 'About us', url: '/About' }
]

const App = () => (
  <div>
    <Navigation pages={pages} />
    <Router />
  </div>
)

export default App
