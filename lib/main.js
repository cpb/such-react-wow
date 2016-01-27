import React from 'react'
import ReactDOM from 'react-dom'

export class HelloDoge extends React.Component {
  render () {
    return (
      <h1>Such world! Wow. Much hello {this.props.items.map(function(item,i) { return item.name }).join(' and ')}</h1>
    )
  }
}

export const DogePile = function(id, items) {
  ReactDOM.render(<HelloDoge items={items} />, document.getElementById(id))
}
