import React from 'react';
const CurrentUserContext = React.createContext<string>(undefined!);

function EnthusasticGreeting() {
  const currentUser = React.useContext(CurrentUserContext);
  return <div>Hello {currentUser.toUpperCase()}</div>;
}

export default function App() {
  return (
    <CurrentUserContext.Provider value="Tom">
      <EnthusasticGreeting />
    </CurrentUserContext.Provider>
  )
}