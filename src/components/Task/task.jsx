import * as React from "react";
import { Box, Flex, Button } from "@stardust-ui/react";
import { AppContext } from "./../../context/AppContext";
const moment = require("moment");

export default function Task(props) {
  const [active, setActive] = React.useState(props.taskId ? false : true);
  const [taskId] = React.useState(props.taskId || Date.now());
  const { setAppData } = React.useContext(AppContext);
  const { accomplished, dayToShow } = props;

	const showNopeButton = () => {
		if ( !accomplished ){
			return false;
		}
		if ( dayToShow == moment().format('L')){
			return true;
		}
		return false;
	};

	const showDoneButton = () => {
		if(accomplished){
			return false;
		}
		return true;
	}

  return (
    <Box
      content={
        <div>
          Task {taskId}
            <Flex gap="gap.smaller">
              <Button
                circular
                key="book"
                content="Done"
                icon="book"
                onClick={() => {
                  setActive(false);
                  setAppData({ type: "ADD_TASK", task: { id: taskId } });
                }}
								disabled={!active}
								hidden = {!showDoneButton()}
              />
              <Button
                key="coffee"
                content="Nope"
                icon="coffee"
                onClick={() => {
                  setActive(true);
                  setAppData({ type: "REMOVE_TASK", task: { id: taskId } });
                }}
                disabled={active}
                hidden={!showNopeButton()}
              />
            </Flex>
        </div>
      }
      styles={{
        border: "1px solid",
        width: "200px",
        height: "50px",
        margin: "10px",
        backgroundColor: active ? "white" : "green"
      }}
    />
  );
}
