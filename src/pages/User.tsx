import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetchUser } from "../hooks/useUserDetails";

const User = () => {
  const { id } = useParams();
  const { data: user, isLoading } = useFetchUser(id || "1"); // TODO: handle error

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Link to="/">
        <b>User {id}: mostrar lista</b>
      </Link>
      {user && (
        <ul>
          <li>Nombre: {user.name}</li>
          <li>User: {user.username}</li>
          <li>Email: {user.email}</li>
          <li>Ciudad: {user.address.city}</li>
          <li>Website: {user.website}</li>
          <li>Nombre de la empresa donde trabaja: {user.company.name}</li>
        </ul>
      )}
    </div>
  );
};

export default User;
