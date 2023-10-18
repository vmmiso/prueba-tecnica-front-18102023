import { Link } from "react-router-dom";
import { useFetchUsers } from "../hooks/useUsersList";
import { useAlbumsStore } from "../store/albums";

const List = () => {
  const { data: users, isLoading } = useFetchUsers();

  const recentVisited = useAlbumsStore((state) => state.recentVisited);

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

      <b>
        Albums recently visited:{" "}
        {recentVisited.map((albumId) => albumId + ", ")}
      </b>
    </div>
  );
};

export default List;
