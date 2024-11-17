import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js";


class TodoService{
    
    
    async fetchTodos() {
        const response = await api.get('api/todos')
        const todos = response.data.map(todoData => new Todo(todoData))
        AppState.todos = todos
    }
    
    async createTodo(formData){
        const response = await api.post('api/todos', formData)
        const createdTodo = new Todo(response.data)
        AppState.todos.push(createdTodo)
    }
    
    async deleteTodo(todoID) {
        const response = await api.delete(`api/todos/${todoID}`)
        const todoToRemove = AppState.todos.find(todo => todo.id == todoID)
        const indexToRemove = AppState.todos.indexOf(todoToRemove)
        AppState.todos.splice(indexToRemove, 1)
    }

async completeTodo(todoID){
    const completeTodo = AppState.todos.find(todo => todo.id == todoID)
    completeTodo.completed = !completeTodo.completed
    const response = await api.put(`api/todos/${todoID}`, completeTodo)
    AppState.emit('todos')
}

}

export const todoService = new TodoService()