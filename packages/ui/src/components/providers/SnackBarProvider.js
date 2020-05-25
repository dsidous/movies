import React, { useState, useEffect, useCallback } from 'react';

import SnackBarContext from '../contexts/SnackBarContext';
import Message from '../atoms/Message';

const AUTO_DISMISS = 3000;

const SnackBarProvider = ({ children }) => {
  const [alerts, setAlerts] = useState(null);

  useEffect(() => {
    if (alerts !== null) {
      const timer = setTimeout(() => setAlerts(null), AUTO_DISMISS);
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  const addAlert = useCallback(content => setAlerts(content), []);

  const value = {
    addAlert,
  };

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      {alerts && <Message message={alerts} />}
    </SnackBarContext.Provider>
  );
};

export default SnackBarProvider;
