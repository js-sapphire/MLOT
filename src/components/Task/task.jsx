import * as React from "react";
import { Box, Flex, Button } from "@stardust-ui/react";
import { AppContext } from "./../../context/AppContext";

export default function Task(props) {
  const [active, setActive] = React.useState(props.taskId ? false : true);
  const [taskId] = React.useState(props.taskId || Date.now());
  const { setAppData } = React.useContext(AppContext);
  const { accomplished } = props;

  return (
    <Box
      content={
        <div>
          Task {taskId}
          {!accomplished && (
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
              />
            </Flex>
          )}
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
