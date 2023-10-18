import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetchUser } from "../hooks/useUserDetails";
import { useFetchUserAlbums } from "../hooks/useUserAlbums";

const User = () => {
  const { id } = useParams();
  const { data: user, isLoading: isLoadingUser } = useFetchUser(id || "1"); // TODO: handle error no parameters
  const { data: userAlbums, isLoading: isLoadingAlbums } = useFetchUserAlbums(
    id || "1"
  );

  if (isLoadingUser || isLoadingAlbums) return <div>Loading...</div>;

  return (
    <div>
      <Link to="/">
        <h1>{user?.username}</h1>
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
      {userAlbums && (
        <>
          <b>Albums</b>
          <ul>
            {userAlbums.map((album) => {
              return (
                <li key={album.id}>
                  <Link to={`/album/${album.id}`}>{album.title}</Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default User;
