const AddInput = ({onnameinputChange, todoName}) =>{
  return <>
  <input type="text" placeholder="Enter ToDO Here" value={todoName} required autoComplete="off" onChange={onnameinputChange}/>
  </>
}

export default AddInput; 