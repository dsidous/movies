import { useContext } from 'react';

import SnackBarContext from '../contexts/SnackBarContext';

const useSnackBars = () => useContext(SnackBarContext);

export default useSnackBars;
