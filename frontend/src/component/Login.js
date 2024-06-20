import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
  const history = useHistory();

  const handleRegister = () => {
    history.push('/register'); // Navigasi ke halaman register
  };

  const handleLogin = () => {
    // Handle login logic
    // Contoh sederhana: menyimpan status login ke localStorage
    localStorage.setItem('loggedIn', 'true');
    // Setelah login berhasil, arahkan pengguna ke halaman home
    history.push('/home');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Login or Register</h2>
        <form onSubmit={handleLogin} className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="block w-full p-2 border border-gray-300 rounded mb-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="text-sm">
          Don't have an account?{' '}
          <button
            onClick={handleRegister}
            className="text-blue-500 underline hover:text-blue-600"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;