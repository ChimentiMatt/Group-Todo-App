import {AiTwotoneCalendar} from 'react-icons/ai';
import Calendar from "react-calendar";
import {useState} from "react";
function DatePickerButton(props){
    const [date, setDate] = useState(new Date());
    return (
        <div className ="contents">
            <h3 className={"border-solid border-2 border-sky-500 px-3 flex items-center"}>Due Date:</h3>
            <h3 className={"border-solid border-2 border-sky-500 px-3 flex items-center"}>{date.toDateString()}</h3>
            <button id= "calendar-button" className = {props.buttonStyle} onClick ={CalendarButtonHandler} type="none"><AiTwotoneCalendar/></button>
            <div id ="calendar-container" className = "hidden">
                <Calendar
                    className={"self-center border-solid border-2 border-sky-500 rounded-r-lg"}
                    onChange={CalendarChangeHandler}
                    value={date}
                />
            </div>
        </div>
    );

function CalendarChangeHandler(value){
    document.getElementById("calendar-container").classList.add('hidden') //hide calendar picker
    document.getElementById("calendar-button").classList.remove('hidden') //show calendar button
    setDate(value);
    console.log(value)
    return 0;
}

function CalendarButtonHandler(e){
    e.preventDefault();//prevent page refresh
    document.getElementById("calendar-container").classList.remove('hidden') //show calendar button
    document.getElementById("calendar-button").classList.add('hidden') //hide calendar button
    return 0;
}

}

export default DatePickerButton;