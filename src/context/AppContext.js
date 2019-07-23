import * as React from 'react';
const moment = require('moment');

const AppContext = React.createContext();
const localAppData = localStorage.getItem("appData");

const appReducer = (appData, action) => {
    const currentState = Object.assign({}, appData);
    const todaysDate = moment().format('L');
    const newTask = action.task;

    const removeTaskfromAppData = () => {
        const taskId = newTask.id;
        if (!currentState[todaysDate]){
            throw new Error();
        }

        const newListOfTasks = currentState[todaysDate].filter( (task) => {
            return task.id !== taskId;
        })

        currentState[todaysDate] = newListOfTasks;
        return currentState;
    }

    const addTaskInAppData = () => {
        (currentState[todaysDate] ? currentState[todaysDate].push(newTask) : currentState[todaysDate] = [newTask]);
        return currentState;
    }

    switch (action.type){
        case 'ADD_TASK':   
            return addTaskInAppData();
        case 'REMOVE_TASK':
            return removeTaskfromAppData();
        default:
            throw new Error();
    }
}

const initialState = {}

const AppProvider = (props) => {
    const [appData, setAppData] = React.useReducer(appReducer, JSON.parse(localAppData) || initialState);
    React.useEffect( () => {
        localStorage.setItem('appData', JSON.stringify(appData));
    }, [appData])
    return(
        <AppContext.Provider value={{ appData, setAppData }}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
