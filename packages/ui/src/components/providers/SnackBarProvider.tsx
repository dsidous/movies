import React, { useState, useEffect, useCallback } from 'react';

import SnackBarContext from '../contexts/SnackBarContext';
import Message from '../atoms/Message';

interface AddAlert {
  (content: string): void;
}

interface Props {
  children: React.ReactNode;
  addAlert: AddAlert;
}

const AUTO_DISMISS = 3000;

const SnackBarProvider:React.FC<Props> = ({ children }) => {
  const [alerts, setAlerts] = useState<string | null>(null);

  useEffect(() => {
    if (alerts !== null) {
      const timer = setTimeout(() => setAlerts(null), AUTO_DISMISS);
      return () => clearTimeout(timer);
    }
  }, [alerts]);

  const addAlert = useCallback<AddAlert>(content => setAlerts(content), []);

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
