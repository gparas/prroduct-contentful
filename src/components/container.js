import React from 'react';

export default ({ children }) => (
  <div
    style={{
      maxWidth: 1140,
      paddingLeft: 16,
      paddingRight: 16,
      margin: '0 auto',
    }}
  >
    {children}
  </div>
);
