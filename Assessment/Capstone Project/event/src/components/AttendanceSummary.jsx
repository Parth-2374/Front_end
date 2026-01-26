import { useSelector } from "react-redux";

export default function AttendanceSummary() {
  const data = useSelector(state => state.registrations.list);
  const online = data.filter(d => d.type === "Online").length;
  const offline = data.filter(d => d.type === "Offline").length;

  return (
    <div>
      <h4 className="text-center mt-5 ">Attendance Summary</h4>
      <p className="text-center mt-3 ">Online: {online}</p>
      <p className="text-center mt-2">Offline: {offline}</p>
    </div>
  );
}
