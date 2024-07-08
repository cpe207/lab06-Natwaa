// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try {
    const resTodo = await axios.get("https://jsonplaceholder.typicode.com/todos/" + todoId);
    const resUser = await axios.get("https://jsonplaceholder.typicode.com/users/" + resTodo.data.userId);
    
    const result = {
      owner : resUser.data.name,
      title : resTodo.data.title,
      completed : resTodo.data.completed,
    };
    return result;
  
  }catch (error) {
    return "INVALID TODO ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
