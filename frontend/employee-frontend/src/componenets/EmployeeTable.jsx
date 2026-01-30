import { Eye, Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllEmployees, deleteEmployee } from "../services/employeeService";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getAllEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleDelete = async (employee) => {
    try {
      await deleteEmployee(employee);
      fetchEmployees(); // reload table
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete employee");
    }
  };

    

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      
      <h2 className="text-xl font-bold text-blue-900 mb-4">
        Employee Details
      </h2>

      <button
        onClick={() => navigate("/add-employee")}
        className="ml-auto -mt-10 flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 transition shadow-sm"
      >
        + Add Employee
      </button>

      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="bg-blue-800 text-left text-sm font-semibold text-white">
              <th className="px-4 py-3 rounded-l-lg">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone Number</th>
              <th className="px-4 py-3">Department</th>
              <th className="px-4 py-3 rounded-r-lg text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr
                key={emp.id}
                className="bg-blue-100/60 hover:bg-blue-100 transition rounded-lg"
              >
                <td className="px-4 py-3 rounded-l-lg font-medium">
                  {emp.id}
                </td>
                <td className="px-4 py-3">{emp.firstName} {emp.lastName}</td>
                <td className="px-4 py-3">{emp.email}</td>
                <td className="px-4 py-3">{emp.phoneNumber}</td>
                <td className="px-4 py-3">{emp.department}</td>

                <td className="px-4 py-3 rounded-r-lg">
                  <div className="flex justify-center gap-4">
                    <button
                      title="View"
                      onClick={() => navigate(`/employee/${emp.id}`)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      title="Edit"
                      onClick={() => navigate(`/update-employee/${emp.id}`)}
                      className="text-green-600 hover:text-green-800"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      title="Delete"
                      onClick={() => handleDelete(emp)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
