import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../services/employeeService";

export default function UpdateEmployeePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    department: "",
    jobTitle: "",
    salary: "",
  });

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const res = await getEmployeeById(id);
      setEmployee(res.data);
    } catch (error) {
      console.error("Failed to load employee", error);
    }
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateEmployee({
        ...employee,
        salary: Number(employee.salary),
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-8">
          Update Employee
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Employee ID :
            </label>
            <input
              type="text"
              name="id"
              value={employee.id}
              readOnly
              className="w-72 rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none cursor-not-allowed"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name :
              </label>
              <input
                type="text"
                name="firstName"
                value={employee.firstName}
                onChange={handleChange}
                className="w-full rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name :
              </label>
              <input
                type="text"
                name="lastName"
                value={employee.lastName}
                onChange={handleChange}
                className="w-full rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number :
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={employee.phoneNumber}
                onChange={handleChange}
                className="w-full rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address :
              </label>
              <input
                type="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department :
              </label>
              <select
                name="department"
                value={employee.department}
                onChange={handleChange}
                className="w-full rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none"
              >
                <option value="">Select Department</option>
                <option>HR</option>
                <option>Finance</option>
                <option>IT</option>
                <option>Operations</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title :
              </label>
              <input
                type="text"
                name="jobTitle"
                value={employee.jobTitle}
                onChange={handleChange}
                className="w-full rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salary (LKR) :
            </label>
            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              className="w-72 rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-8 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition shadow-sm"
            >
              Update Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
