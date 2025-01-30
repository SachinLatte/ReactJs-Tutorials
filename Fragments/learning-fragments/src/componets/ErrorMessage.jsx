const ErrorMessage = ({ data }) => {
  // let foodItems = ["Dal", "Green Vegitables", "Roti", "Salad", "Milk"];
  return <>{data.length === 0 && <h3>I am still Hungry</h3>}</>;
};
export default ErrorMessage;
