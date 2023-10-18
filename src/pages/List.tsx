import { Link } from "react-router-dom";
import { useFetchUsers } from "../hooks/useUsersList";

const List = () => {
  const { data: users, isLoading } = useFetchUsers();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {users && (
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <Link to={`/user/${user.id}`}>{user.username}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default List;
