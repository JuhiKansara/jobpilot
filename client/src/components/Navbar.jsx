import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <Link to="/dashboard" className="text-lg font-semibold text-blue-600">JobPilot</Link>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">Hey, {user?.name} 👋</span>
        <button onClick={handleLogout}
          className="text-sm text-gray-500 hover:text-red-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:border-red-300 transition">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;