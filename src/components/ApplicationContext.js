// @flow

import React from 'react';

export type TApplicationContext = {
  isSidebarOpen: boolean,
  toggleSidebar: () => void,
};

const ApplicationContext = React.createContext<TApplicationContext>({
  isSidebarOpen: true,
  toggleSidebar: () => {},
});

export default ApplicationContext;
