import React, { Component } from 'react'
import DeleteTask from './DeleteTask'

class Overview extends Component {
  render() {
    const { tasks, handleDelete } = this.props

    const list = tasks.map((task, i) => {
      return (
        <li key={task.id}>
          <span>{`${i + 1}. ${task.text}`}</span>
          <DeleteTask taskId={task.id} handleDelete={handleDelete} />
        </li>
      )
    })

    return <ul>{list}</ul>
  }
}

export default Overview
