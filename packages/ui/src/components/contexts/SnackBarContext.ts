import { createContext } from 'react';

interface SnackBarContext {
  addAlert: (content: string) => void;
}

const snackBarContextDefaultValue = {
  addAlert: () => null
}

const SnackBarContext = createContext<SnackBarContext>(snackBarContextDefaultValue);

export default SnackBarContext;
