import * as React from 'react';
import Task from './../Task/task';
import { AppContext } from './../../context/AppContext';

export default function List(props){
    const { appData } = React.useContext(AppContext);

    let tasks = [];
    for (let taskId = 0; taskId < 5; taskId++) {
        tasks.push(<Task key={taskId}/>);
    }

    return (
        <div>
            {tasks}
        </div>
    )
}
