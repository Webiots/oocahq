import React, { useState } from 'react';
import {  FormGroup, Input, Label} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Calendar } from 'react-feather';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function SelectBox(match: {focus?:boolean, calender?:boolean }) {
   const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    !match.calender? 
        <FormGroup className={`selection-box 
                 `} >
     <Input type="select" placeholder="select"
      className={`select-shadow ${match.focus?'focus':''}`}>
                     <option>select</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
    </Input>
    <FontAwesomeIcon icon={faChevronDown} />
    </FormGroup>
    :
    <FormGroup className="selection-box date-select">
    <Label className="d-block">Label</Label>
    <DatePicker name="datepicker" selected={selectedDate} onChange={(v:any) => setSelectedDate(v)}/>
    <Calendar className="date-icon" />
    <FontAwesomeIcon icon={faChevronDown} />
    </FormGroup>
  );
}

export default SelectBox;