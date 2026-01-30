import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getEmployeeById } from "../services/employeeService";

export default function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const res = await getEmployeeById(id);
      setEmployee(res.data);
    } catch (error) {
      console.error("Error loading employee", error);
    }
  };

  if (!employee) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 mt-10">

      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="text-blue-700" />
        </button>
        <h1 className="text-2xl font-bold text-blue-900">
          {employee.firstName} {employee.lastName}
        </h1>
      </div>

      <div className="flex justify-center mb-6">
        <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-extrabold text-blue-700">
          {employee.firstName.charAt(0)}
          {employee.lastName.charAt(0)}
        </div>
      </div>

      <br></br>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-y-4 gap-x-10 text-sm max-w-md w-full ml-40">
            <Detail label="Employee ID" value={employee.id} />
            <Detail label="Email" value={employee.email} />
            <Detail label="Phone Number" value={employee.phoneNumber} />
            <Detail label="Department" value={employee.department} />
            <Detail label="Job Title" value={employee.jobTitle} />
            <Detail
                label="Salary"
                value={`LKR ${employee.salary?.toLocaleString()}`}
            />
        </div>
      </div>

    </div>
    
  );
}

function Detail({ label, value }) {
  return (
    <div className="flex">
      <span className="w-40 font-semibold text-blue-900">
        {label}
      </span>
      <span className="text-blue-900">: {value}</span>
    </div>
  );
}
