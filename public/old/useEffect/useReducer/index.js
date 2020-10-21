import React, {useState, useReducer} from "react";
import {data} from "../../data";
import Modal from "./Modal";
import {reducer} from "./reducer";

// reducer function

const initialState = {
  users: [],
  showModal: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    if (name) {
      const newUser = {id: state.users.length + 1, name};
      dispatch({type: "ADD_ITEM", payload: newUser});
      setName("");
    } else {
      dispatch({type: "NO_VALUE"});
    }
  };
  const closeModal = () => {
    dispatch({type: "CLOSE_MODAL"});
  };

  return (
    <div className="flex-col px-4 py-8">
      <div className="text-center bg-white text-xs w-40 mb-5 text-red-500 mx-auto">
        {state.showModal && (
          <Modal modalContent={state.modalContent} closeModal={closeModal} />
        )}
      </div>
      <form onSubmit={handleSubmit} className=" text-center">
        <input
          className="shadow-md px-2 py-1"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 mx-4 text-white px-2 py-1 rounded hover:bg-blue-800"
        >
          submit
        </button>
      </form>
      {state.users.map(item => {
        const {id, name} = item;
        return (
          <div
            key={id}
            className="flex items-center justify-between bg-white mt-6 px-6"
          >
            <p className="mt-4 text-gray-600 font-semibold">{id}</p>
            <p className="mt-4 text-gray-600 font-semibold">{name}</p>
            <button
              onClick={() => {
                dispatch({type: "REMOVE_USER", payload: id});
              }}
              className=" text-blue-600 font-bold cursor-pointer"
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
