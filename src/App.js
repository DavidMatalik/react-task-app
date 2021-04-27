import Overview from './components/Overview'
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: {
        text: '',
      },
      tasks: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      task: {
        text: event.target.value,
      },
    })
  }

  handleSubmit(event) {
    let newTask = this.state.task
    let currentTasks = this.state.tasks
    currentTasks.push(newTask)

    this.setState({
      task: {
        text: '',
      },
      tasks: currentTasks,
    })
    event.preventDefault()
  }

  render() {
    const { task, tasks } = this.state

    return (
      <div>
        <h1>Task App</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={task.text} onChange={this.handleChange} />
          <input type='submit' value='Add Task' />
        </form>
        <Overview tasks={tasks} />
      </div>
    )
  }
}

export default App
