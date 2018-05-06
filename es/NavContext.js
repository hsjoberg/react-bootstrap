import React from 'react';
var NavContext = React.createContext({
  activeKey: null,
  onSelect: function onSelect() {}
});
export default NavContext;