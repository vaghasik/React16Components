import React from 'react';

const Input = ({ type, id, value, placeholder, onChange }) => {
  // const ref = createRef(); //todo
   //useEffect(() => ref.current.focus(), []); //todo
  return (
	<input 
		type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
	/>);
};

export default Input;