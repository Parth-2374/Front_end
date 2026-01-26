import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRegistrations } from "./features/registrationSlice";
import RegistrationForm from "./components/RegistrationForm";
import RegistrationTable from "./components/RegistrationTable";
import AttendanceSummary from "./components/AttendanceSummary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRegistrations());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
      <h1 className="text-center mt-5">Conference Registration System</h1>
      <Routes >
        <Route path="/" element={ <RegistrationForm />} />
        <Route path="/attendancesummary" element={ <AttendanceSummary />} />
        <Route path="/registrationtable" element={ <RegistrationTable />} />

        <Route path="*" element ={<Error />} />
      </Routes>
      {/* <RegistrationForm /> */}
      {/* <AttendanceSummary /> */}
      {/* <RegistrationTable /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
