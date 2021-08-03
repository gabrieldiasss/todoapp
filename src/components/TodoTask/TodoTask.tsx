import React from 'react';
import { ITask } from '../../Interfaces';

import './styles.css'

interface Props {
    task: ITask;
    deleteTask(DeleteTaskByName: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
    return (
        <div className="card" >
            <div>
                <p>{task.nameTask}</p>
            </div>

            <div className="line2" >
                <span className="btn-card" onClick={() => deleteTask(task.nameTask)}>X</span>
                <span>{task.deadlineTask}d</span>
            </div>
        </div>
    )
}

export default TodoTask;