import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Your job search pipeline</h2>
        <p className="text-gray-500 text-sm mb-6">Track every application in one place</p>
        <p className="text-gray-400">Kanban board coming next...</p>
      </div>
    </div>
  );
};

export default Dashboard;