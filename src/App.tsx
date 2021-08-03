import React from 'react';
import { useState, ChangeEvent } from 'react';
import TodoTask from './components/TodoTask/TodoTask';
import { ITask } from './Interfaces';
import './styles/styles.css'

const App: React.FC = () => {

	const [task, setTask] = useState("")
	const [deadline, setDeadline] = useState(0)

	const [todoList, setTodoList] = useState<ITask[]>([])

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if(event.target.name === "task") {
			setTask(event.target.value)
		}

		if(event.target.name === "deadline") {
			setDeadline(Number(event.target.value))
		}
	}

	const addTask = () => {
		const newTask = {nameTask: task, deadlineTask: deadline}
		setTodoList([...todoList, newTask])
		setTask("")
		setDeadline(0)
	}

	const deleteTask = (DeletePostByName: string) => {
		setTodoList(todoList.filter((taskDelete) => taskDelete.nameTask !== DeletePostByName))
	}

	return (
		<div className="App">
			<header>
				<h2>Lists</h2>

				<input type="text" autoComplete="off" placeholder="Escrever task..." name="task" value={task} onChange={handleChange} />
				<input type="number" name="deadline" value={deadline} onChange={handleChange} />
				<button className="btn-header" onClick={addTask} >Adicionar Task</button>
			</header>
			
			<div className="line" ></div>

			{todoList.map((task: ITask, key) => {
				return (
					<TodoTask task={task} key={key} deleteTask={deleteTask}/>
				)
			})}
			
			
		</div>
	)
}

export default App;