import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import moment from 'moment';

moment.locale('en');
const mountNode = document.getElementById('app');
const {MonthPicker, RangePicker} = DatePicker;

function onchange(date,dateString) {
    console.log(date,dateString);
}

ReactDOM.render(
  <div>
    <DatePicker defaultValue={moment()} />
      <MonthPicker onchange={onchange} palceholder="Select Month" />
      <RangePicker onchange={onchange} palceholder="StartTime,EndTime " />
  </div>
  , mountNode);
