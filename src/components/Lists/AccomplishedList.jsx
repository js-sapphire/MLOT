import * as React from 'react';
import Task from './../Task/task';
import { AppContext } from './../../context/AppContext';
const moment = require('moment');

export default function AccomplishedList(props){
    const { appData } = React.useContext(AppContext);
    console.log(appData);
    const todaysDate = moment().format('L');
    console.log(appData[todaysDate]);
    
    let tasks = [];
    appData[todaysDate] && appData[todaysDate].forEach(task => {
        tasks.push(<Task key={task.id} taskId={task.id}/>)
    });

    return (
        <div>
            {tasks}
        </div>
    )
}
