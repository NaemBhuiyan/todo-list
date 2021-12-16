import { useContext } from 'react';
import AppContext from '../context';

const useTodoContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "Auth context provider not found, make sure you're using auth components correctly."
    );
  }
  return context;
};

export default useTodoContext;
