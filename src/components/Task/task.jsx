import * as React from 'react';
import { Box, Flex, Button } from '@stardust-ui/react';
import { AppContext } from './../../context/AppContext';
const moment = require('moment');

export default function Task(props) {
    const [active, setActive] = React.useState(props.taskId ? false : true);
    const [taskId] = React.useState(props.taskId || Date.now());
    const { setAppData } = React.useContext(AppContext);

    return (
        <Box
            content={
                <div>
                    Task {props.taskId}
                    <Flex gap="gap.smaller">
                    <Button.Group
                        circular
                        buttons={[
                            {
                                key: 'book',
                                content: 'Done',
                                icon: 'book',
                                onClick: () => {setActive(false); setAppData({type: 'ADD_TASK', task: {id: taskId}})},
                                disabled: !active,
                            },
                            {
                                key: 'coffee',
                                content: 'Nope',
                                icon: 'coffee',
                                onClick: () => {setActive(true); setAppData({type: 'REMOVE_TASK', task: {id: taskId}})},
                                hidden: !props.taskId,
                                disabled: active
                            }
                        ]}
                    />
                    </Flex>
                </div>
            }
            styles={{
                border: '1px solid',
                width: '200px',
                height: '50px',
                margin: '10px',
                backgroundColor: active ? 'white' : 'green'
            }}
        />
    )
}
