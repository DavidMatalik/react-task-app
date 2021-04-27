import React, { Component } from 'react'

class Overview extends Component {
  render() {
    const { tasks } = this.props

    const list = tasks.map((task, i) => {
      return <li key={i}>{i + 1 + '. ' + task.text}</li>
    })

    return <ul>{list}</ul>
  }
}

export default Overview
