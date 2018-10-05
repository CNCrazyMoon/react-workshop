import React from 'react'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import Code from '../../components/Code'
import Example from '../../components/Example'
import InputKeyLogger from './InputKeyLogger'

const Page = props => (
  <div>
    <PageTitle text="Events" />

    <p>
      React has a specific way to handle events. You should not bind event
      listeners on your DOM elements. Remember that you are dealing with a
      virtual DOM representation.
    </p>

    <p>
      You can pass inline event listeners to React components (such as{' '}
      <code>onClick</code>) so they get automatically called when these events
      are being fired. Careful: React uses camelCase – unlike HTML!
    </p>

    <Code language="jsx">{`<button onClick={() => console.log('Clicked!')} type='button'>
  Click me!
</button>`}</Code>

    <SectionTitle text="Synthetic Events" />

    <p>
      React proxies DOM events as{' '}
      <a
        href="https://reactjs.org/docs/events.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Synthetic Events
      </a>{' '}
      for the sake of browser compatibility and most importantly speed
      efficiency. While you don’t really have to know that per se, it’s
      something you’ll get to experience at some point (for instance{' '}
      <a
        href="https://reactjs.org/docs/events.html#event-pooling"
        target="_blank"
        rel="noopener noreferrer"
      >
        when trying to access an event within a callback
      </a>
      ).
    </p>

    <SectionTitle text="Exercise - Log key code while typing" />

    <p>
      Update the component below (<code>InputKeyLogger.js</code>) to log the key
      code in the console when typed. Hint: <code>event.which</code>!
    </p>

    <Example live>
      <InputKeyLogger />
    </Example>
  </div>
)

export default Page
