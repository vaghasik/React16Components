
// Reference:https://www.robinwieruch.de/react-function-component ;
import React, { useState } from 'react';
import Label from './components/Label/Label';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    /*const onChangeHandler = (event) => {
        setEmail(

          event.target.value,

        );

    }*/
    const onClickHandler = () => {
        console.log('Email: ' + email);

        console.log('Password: ' + password);

    }
    const incrementHandler = () => {
        setCount(currentCount => currentCount + 1);

    }
    const decrementHandler = () => {
        setCount(currentCount => currentCount - 1);

    }
  return (
      <div className="App">
          <h1> {count}</h1>
          <Button btnName="Increment" onClickHandler={incrementHandler} />
          <Button btnName="Decrement" onClickHandler={decrementHandler} />
          <br /> <h1>Login</h1>
          <Label lblName="Email: "/>
          <Input type="text"
              id="email"
              value={email}
              placeholder="Enter Email"
              onChangeHandler={event => { setEmail(event.target.value); }}
          /> <br />
          <Label lblName="Password: " />
          <Input type="text"
              id="password"
              value={password}
              placeholder="Enter Password"
              onChangeHandler={event => { setPassword(event.target.value); }}
          /> <br />
          <Button btnName="Login" onClickHandler={onClickHandler}/>
    </div>
  );
}

export default App;