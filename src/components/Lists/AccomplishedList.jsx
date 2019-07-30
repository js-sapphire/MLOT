import * as React from "react";
import Task from "./../Task/task";
import { AppContext } from "./../../context/AppContext";
const moment = require("moment");

export default function AccomplishedList(props) {
  const { appData } = React.useContext(AppContext);
  const { dayToShow } = props;
  let tasks = [];

  const findTasks = dayToShow => {
    if (!dayToShow) {
      dayToShow = moment().format("L");
    }
    appData[dayToShow] &&
      appData[dayToShow].forEach(task => {
        tasks.push(<Task key={task.id} taskId={task.id} accomplished={true} dayToShow={dayToShow}/>);
      });
  };

  findTasks(dayToShow);

  return <div>{tasks}</div>;
}
