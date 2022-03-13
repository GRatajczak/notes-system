import { createStore } from 'redux';
export const addNote = (payload) => {
  return {
    type: 'notes/add',
    payload,
  };
};

const initialState = {
  notes: [
    {
      title: '',
      content: '',
    },
  ],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'notes/add':
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};

export const store = createStore(notesReducer);
