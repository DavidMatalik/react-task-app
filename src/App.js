import Overview from './components/Overview'
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      tasks: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit(event) {
    let newTask = this.state.value
    let currentTasks = this.state.tasks
    currentTasks.push(newTask)

    this.setState({
      tasks: currentTasks,
    })
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Task App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type='submit' value='Add Task' />
        </form>
        <Overview tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App
