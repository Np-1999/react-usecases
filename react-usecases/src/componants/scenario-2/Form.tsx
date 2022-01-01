import React, { useState } from 'react';

const Form = function Form() {
// Controlled Components: Whose state/value is controlled by change handler

  // Handle multiple input fields using state as object
  const [state, setState] = useState({
    Name: '',
    RollNumber: '',
  });
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // This works if you have every input which has value attribute
    // For example it won't work for checkbox
    // to solve this use below line
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  function handleSubmit(event:React.SyntheticEvent) {
    // eslint-disable-next-line no-alert
    alert(state.Name);
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="Name" value={state.Name} onChange={handleChange} />
      <input type="text" name="RollNumber" value={state.RollNumber} onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
