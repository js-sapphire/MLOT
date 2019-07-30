import * as React from 'react';
import { Box } from '@stardust-ui/react';
import List from './../Lists/List';
import AccomplishedList from './../Lists/AccomplishedList';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css'
const moment = require('moment');

export const Day = () => {
    const [dayToShow, setDayToShow] = React.useState('');

    const handleDayClick = (selectedDay) => {
        const momentDay = moment(selectedDay).format('L');
        setDayToShow(momentDay);
    }

    return (
        <Box >
            <DayPicker onDayClick={handleDayClick}/>
            <List dayToShow={dayToShow}/>
            <AccomplishedList dayToShow={dayToShow}/>
        </Box>
    );
}
