import { useState } from 'react';
import toast from 'react-hot-toast';

import { Login, Dashboard } from './components';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (!username && !password) {
      toast.error('Please enter username and password');
      return;
    }

    if (!username) {
      toast.error('Please enter username');
      return;
    }

    if (!password) {
      toast.error('Please enter password');
      return;
    }

    if (username !== 'admin' && password !== 'admin') {
      toast.error('Invalid username or password');
      return;
    }

    setLoggedIn(true);
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
