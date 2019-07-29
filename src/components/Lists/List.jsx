import * as React from 'react';
import Task from './../Task/task';
const moment = require('moment');

export default function List(props){
    const { dayToShow } = props;
    const [initialState, setState] = React.useState(true);

    if (dayToShow){
        initialState && setState(false);
    }

    let tasks = [];
    for (let taskId = 0; taskId < 5; taskId++) {
        tasks.push(<Task key={taskId} accomplished={false}/>);
    }

    const isSelectedDayToday = () => (dayToShow && (moment().format('L') === dayToShow));

    return (
        <div>
            {(isSelectedDayToday() || initialState) && tasks}
        </div>
    )
}
