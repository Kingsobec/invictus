import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ isAuth, userData }) => {
  const nickname = userData.displayName;
  const displayPhoto = userData.photoURL;
  const fullName = userData.fullName;
  const [courses, setCourses] = useState([
    {
      
    }
  ])
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
    return;
  }, [isAuth]);
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-md p-4 grid md:grid-cols-2 gap-8">
        {/* Left Section: Student Details */}
        <div className="md:col-span-1 bg-gray-200 rounded-lg p-4">
          <div className="flex items-center mb-4">
            <img
              src={displayPhoto}
              alt="Profile Picture"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-lg font-semibold">John Doe</p>
              <p className="text-gray-600">Registration Number: ABC12345</p>
            </div>
          </div>

          {/* Previous Records Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Previous Records</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left">Course</th>
                  <th className="py-2 px-4 text-left">Score</th>
                  <th className="py-2 px-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">Course 1</td>
                  <td className="py-2 px-4">95%</td>
                  <td className="py-2 px-4">September 1, 2023</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Course 2</td>
                  <td className="py-2 px-4">80%</td>
                  <td className="py-2 px-4">August 25, 2023</td>
                </tr>
                {/* Add more rows for other courses */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Section: Available Courses */}
        <div className="md:col-span-1">
          {/* Student Details Section */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
            <ul className="list-disc pl-6">
              <li>Course 1</li>
              <li>Course 2</li>
              <li>Course 3</li>
              <li>Course 4</li>
              <li>Course 5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
