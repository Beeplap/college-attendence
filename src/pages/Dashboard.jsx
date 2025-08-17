const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Attendance Overview */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-2">Attendance Overview</h2>
          <p className="text-gray-600">Track attendance records of students.</p>
        </div>

        {/* Classes */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-2">My Classes</h2>
          <p className="text-gray-600">View and manage your assigned classes.</p>
        </div>

        {/* Students */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-2">Students</h2>
          <p className="text-gray-600">See list of students and their performance.</p>
        </div>

        {/* Settings */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p className="text-gray-600">Manage your account and preferences.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
