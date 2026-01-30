import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeTable from "./componenets/EmployeeTable";
import EmployeeDetails from "./componenets/EmployeeDetails";
import AddEmployeeForm from "./componenets/AddEmployeeForm";
import UpdateEmployeeForm from "./componenets/UpdateEmployeeForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeTable />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/add-employee" element={<AddEmployeeForm />} />
        <Route path="/update-employee/:id" element={<UpdateEmployeeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
