import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../services/employeeService";

export default function AddEmployeePage() {
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

  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addEmployee(employee);
      setMessage("Employee added successfully");
      navigate("/");

      // clear form
      setEmployee({
        id: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        department: "",
        jobTitle: "",
        salary: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Failed to add employee!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-8">
          Add New Employee
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
              onChange={handleChange}
              className="w-72 rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name :
              </label>
              <input
                type="text"
                placeholder="John"
                name="firstName"
                value={employee.firstName}
                onChange={handleChange}
                className="w-full rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
                placeholder="Doe"
                className="w-full rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
                placeholder="07x xxx xxxx"
                className="w-full rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
                placeholder="sample@gmail.com"
                className="w-full rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
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
               className="w-full rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
               >
                <option>Select Department</option>
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
                placeholder="Software Engineer"
                className="w-full rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salary :
            </label>
            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              placeholder="50000"
              className="w-72 rounded-lg bg-blue-50 px-4 py-2 text-sm outline-none border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-8 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition shadow-sm"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
