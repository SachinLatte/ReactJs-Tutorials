function Hello(){
  let myName = "Sachin";
  let number = 456;
  let fullName = ()=>{
    return 'Sachin Borge';
  }
  return <h3>
     MessageNo : {number} and I am your master {fullName()}
  </h3>
}

export default Hello;