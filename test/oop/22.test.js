import { TodoList } from '../../oop/22.js'
import assert from 'assert'

describe('TodoList', function () {
  it('should add todos', function () {
    const list = new TodoList()
    list.addTodo('Task 1')
    list.addTodo('Task 2')
    assert.strictEqual(list.getIncompleteTodos().length, 2)
  })

  it('should mark todos as completed', function () {
    const list = new TodoList()
    list.addTodo('Task 1')
    list.addTodo('Task 2')
    list.completeTodo(0)
    assert.strictEqual(list.getCompletedTodos().length, 1)
    assert.strictEqual(list.getIncompleteTodos().length, 1)
  })

  it('should filter completed and incomplete todos', function () {
    const list = new TodoList()
    list.addTodo('Task 1')
    list.addTodo('Task 2')
    list.addTodo('Task 3')
    list.completeTodo(0)
    list.completeTodo(2)
    const incomplete = list.getIncompleteTodos()
    const completed = list.getCompletedTodos()
    assert.strictEqual(incomplete.length, 1)
    assert.strictEqual(completed.length, 2)
    assert.strictEqual(incomplete[0].task, 'Task 2')
  })
})
