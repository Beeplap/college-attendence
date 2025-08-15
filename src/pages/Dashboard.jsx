import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const { teacherData } = location.state;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <h2 className="text-xl mb-2">Assigned Classes:</h2>
      <ul>
        {teacherData.assignedClasses.map((cls, index) => (
          <li key={index}>
            Semester {cls.semester} - Class {cls.classId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
