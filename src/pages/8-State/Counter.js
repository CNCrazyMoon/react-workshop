import React from 'react'

class CounterPlain extends React.Component {
  render() {
    return (
      <div>
        <div>0</div>
        <button type="button">+</button>
        <button type="button">-</button>
      </div>
    )
  }
}

export default CounterPlain
