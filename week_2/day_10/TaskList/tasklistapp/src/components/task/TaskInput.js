import React, { useState } from 'react';

export default function TaskInput(props) {
  const [name, setName] = useState('');

  function onTaskFormSubmit(e) {
    e.preventDefault();

    props.onTaskCreate(name);
    setName('');
  }

  return (
    <div>
      <form onSubmit={onTaskFormSubmit}>
        <div className="input-group mb-3">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control w-1/2 border rounded-l-md border-[#d1d5db] outline-none p-1 m-0 text-2xl"
            placeholder="Enter Task Name"
            type="text"
          ></input>
          <button className="border rounded-r-md border-[#020617] absolute bg-[#e2e8f0] text-2xl p-1 align-middle px-2 hover:bg-[#1e293b] hover:text-white" type="submit">
            +
          </button>
        </div>
      </form>
    </div>
  );
}