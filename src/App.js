import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['anwar', 'jashim', 'salman','alomgir', 'naeem', 'shovo', 'shurob'];
  const jobs = ['doctor', 'engire', 'lowyer']
  const products = [{name:'Photo', price:'$90.99'},
                    {name:'case', price:'$60.99'},
                    {name:'Earpad', price:'$80.99'},

]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <Product products={products[0]}></Product>
        <Product  products={products[1]} ></Product>
        <Product  products={products[2]} ></Product>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        {
          products.map(product => <Product products={product}></Product>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
        
        <p>i am a react person</p>
      </header>
    </div>
  );
}

function Product(props){
  const productsStyle = {
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'400px',
    float:'left',
    
  }
  const {name, price}=props.products
  return(
    <div style={productsStyle}>
      <h2>Name: {name}</h2>
  <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}
function Counter() {
  const [count, setCount]= useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDcrease = () => setCount(count - 1);
  
    return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} >increase</button>
      <button onClick={() => setCount(count - 1)} >dcrease</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
          
        }
        {
          users.map(user => <li>{user.phone}</li>)

        }
        {
          users.map(user => <li>{user.website}</li>)

        }
      </ul>
    </div>
  )
}


export default App;
