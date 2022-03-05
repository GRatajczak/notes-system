import { useState } from 'react';

export const useModal = (initialState = false) => {
  const [modalState, setModalState] = useState(initialState);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return {
    modalState,
    handleCloseModal,
    handleOpenModal,
  };
};
