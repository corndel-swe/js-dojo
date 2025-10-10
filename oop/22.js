/**
 * A TodoList class with filtering capabilities.
 */
export class TodoList {
  constructor() {
    this.todos = []
    // TODO: Initialize an empty array for todos.
    // TODO: Each todo should be an object with { task: string, completed: boolean }
  }

  /**
   * Adds a new todo.
   * @param {string} task - The task description.
   */
  addTodo(task) {
    this.todos.push({task, completed : false})
    // TODO: Add a new todo object with completed set to false.
  }

  /**
   * Marks a todo as completed by index.
   * @param {number} index - The todo index.
   */
  completeTodo(index) {
    this.todos[index].completed = true
    // TODO: Set the completed property to true for the todo at the given index.
  }

  /**
   * Gets all incomplete todos.
   * @returns {Object[]} - Array of incomplete todo objects.
   */
  getIncompleteTodos() {
    return this.todos.filter((todo)=> todo.completed === false)
    // TODO: Filter and return todos where completed is false.
  }

  /**
   * Gets all completed todos.
   * @returns {Object[]} - Array of completed todo objects.
   */
  getCompletedTodos() {
     return this.todos.filter((todo)=> todo.completed === true)
    // TODO: Filter and return todos where completed is true.
  }
}
