import { useState } from 'react';
import toast from 'react-hot-toast';

import { Login, Dashboard } from './components';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
    } else {
      toast.error('Incorrect username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return loggedIn ? (
    <Dashboard handleLogout={handleLogout} />
  ) : (
    <Login handleLogin={handleLogin} />
  );
}

export default App;
