import Overview from './components/Overview'
import React, { Component } from 'react'
import uniqid from 'uniqid'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(event) {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id,
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
        id: uniqid(),
      },
      tasks: currentTasks,
    })
    event.preventDefault()
  }

  handleDelete(event) {
    const newTasks = this.state.tasks.filter((el) => {
      return el.id !== event.target.dataset.id
    })

    this.setState({
      tasks: newTasks,
    })
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
        <Overview tasks={tasks} handleDelete={this.handleDelete} />
      </div>
    )
  }
}

export default App
