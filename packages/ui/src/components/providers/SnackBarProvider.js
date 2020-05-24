import React, { useState, useEffect, useMemo, useCallback } from 'react';

import SnackBarContext from '../contexts/SnackBarContext';
import Message from '../atoms/Message';

const AUTO_DISMISS = 5000;

const SnackBarProvider = ({ children }) => {
  const [alerts, setAlerts] = useState(null);

  useEffect(() => {
    if (alerts !== null) {
      const timer = setTimeout(() => setAlerts(null), AUTO_DISMISS);
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  const addAlert = alert => {
    setAlerts(alert);
  };

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
