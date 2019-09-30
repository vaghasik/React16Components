import React from 'react';

const Input = ({ type, id, value, placeholder, onChangeHandler }) => {
  // const ref = createRef(); //todo
   //useEffect(() => ref.current.focus(), []); //todo
  return (
	<input 
		type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
	/>);
};

export default Input;