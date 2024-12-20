import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Registering chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const Admin = () => {
  const [projects, setProjects] = useState([]); // Default to an empty array
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://r5bhc2kfha.execute-api.us-east-1.amazonaws.com/"
      );
      // Access the 'projects' array from the response
      if (response.data && response.data.projects) {
        setProjects(response.data.projects);
      }
    } catch (error) {
      console.error("Error fetching projects data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Chart Data Preparation (safe to map over projects)
  const chartData = {
    labels: projects.map((project) => project.projectName || "Unknown Project"),
    datasets: [
      {
        label: "Project Views",
        data: projects.map((project) => project.Views || 0),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="admin-page container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Project View Analysis
      </h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Project Overview</h2>
            <div className="overflow-x-auto mt-4 shadow-md sm:rounded-lg">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Project Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Views
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.length > 0 ? (
                    projects.map((project, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                          {project.projectName || "Unknown Project"}
                        </td>
                        <td className="px-6 py-4">{project.Views || 0}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="text-center px-6 py-4">
                        No projects available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="chart-container mt-10">
            <h3 className="text-xl font-semibold mb-4">
              Project Views Visualization
            </h3>
            <Bar data={chartData} options={options} />
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
