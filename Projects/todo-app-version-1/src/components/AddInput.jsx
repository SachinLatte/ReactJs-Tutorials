const AddInput = ({todoNameElement}) =>{
  return <>
  <input type="text" ref={todoNameElement} placeholder="Enter ToDO Here" required autoComplete="off"/>
  </>
}

export default AddInput; 