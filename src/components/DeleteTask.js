import React, { Component } from 'react'

class deleteTask extends Component {
  render() {
    const { handleDelete, taskId } = this.props
    return (
      <input
        type='submit'
        value='del'
        data-id={taskId}
        onClick={handleDelete}
      />
    )
  }
}

export default deleteTask
