import { useDispatch, useSelector } from "react-redux";
import { deleteRegistration } from "../features/registrationSlice";

export default function RegistrationTable() {
    const data = useSelector(state => state.registrations.list);
    const dispatch = useDispatch();

    return (
        <div className="container">

    
<table class="table">
  <thead>
    <tr className="text-center">
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Session</th>
      <th scope="col">Type</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {data.map((data,index) => (
            <tr key={data.id} className="text-center">
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.session}</td>
            <td>{data.type}</td>
            <td>
              <button onClick={()=>dispatch(deleteRegistration(data.id))}>
                Delete
              </button>
            </td>
          </tr>
        ))}
  </tbody>
</table>
        </div>
    );
}
