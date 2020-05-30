import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSmurf } from '../store/actions/smurfActions'

const SmurfsForm = () => {
  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: ''
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    const newSmurf = {
      ...smurf,
    };

    dispatch(addSmurf(newSmurf));

    setSmurf({
      name: '',
      age: '',
      height: ''
    });
  };

  return (
    <form onSubmit={submitForm}>

      <input
        type="text"
        name="name"
        value={smurf.name}
        placeholder="Name here"
        onChange={handleChange}
      />

      <input 
        type="text" 
        name="age" 
        value={smurf.age}
        placeholder="Age here" 
        onChange={handleChange} 
      />

      <input
        type="text"
        name="height"
        value={smurf.height}
        placeholder="Height here"
        onChange={handleChange}
      />

      

      <button type="submit">Add Smurf</button>
      
    </form>
  );
}

export default SmurfsForm;