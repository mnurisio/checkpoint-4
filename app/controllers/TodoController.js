import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";


export class TodoController{
    constructor(){
        AppState.on('account', this.fetchTodos)
        AppState.on('todos', this.drawTodo)
        AppState.on('account', this.drawTodo)
        AppState.on('todos', this.drawTodoRemaining)
    }

async fetchTodos(){
    try {
        await todoService.fetchTodos()
    } catch (error) {
        console.error(error)
    }
}

 async createTodo(){
    try {
        event.preventDefault()
        const formElem = event.target
        const formData = getFormData(formElem)
        await todoService.createTodo(formData)
    } catch (error) {
        console.error(error)
    }
 }

 async deleteTodo(todoID){
    try {
        event.stopPropagation()
        const confirm = await Pop.confirm("you feeling lazy right now?? You really dont wanna get this done?", 'Have you thought it over?', 'fasho', 'question')
        if (!confirm) return
        await todoService.deleteTodo(todoID)
    } catch (error) {
        console.error(error)
    }
 }

 async completeTodo(todoID){
    try {
        await todoService.completeTodo(todoID)
    } catch (error) {
        console.error(error)
    }
 }


 drawTodo(){
    let todoListHTML = ''
    AppState.todos.forEach(todo => todoListHTML += todo.todoListCard)
    setHTML('todo-list', todoListHTML)
 }

 drawTodoRemaining(){
    const todoRemaining = AppState.todos.filter(todos => !todos.completed)
    setText('todo-remaining', todoRemaining.length)
 }

}