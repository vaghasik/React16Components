import React from 'react';

const Button = ({ onClickHandler, btnName }) => {
  const sayDefault = () => console.log('Default');
  const onClick = onClickHandler || sayDefault;
  return (
    <button type="button" onClick={onClickHandler}>
		 {btnName}
	</button>
  );
};

export default Button;