const DateInput = ({ondateInputChange,todoDate }) =>{
  return <input type="date" value={todoDate} onChange={ondateInputChange}/>
}

export default DateInput;