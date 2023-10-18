import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchAlbumsPhotos } from "../hooks/useAlbumsPhotos";
import { useAlbumsStore } from "../store/albums";

const Album = () => {
  const { id } = useParams();
  const { data: albumsPhotos, isLoading } = useFetchAlbumsPhotos();
  const albumPhotos = albumsPhotos?.filter(
    (albumPhoto) => albumPhoto.albumId !== +(id || 1)
  );
  const addVisited = useAlbumsStore((state) => state.addVisited);

  useEffect(() => {
    addVisited(Number(id));
  }, [id, addVisited]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {albumPhotos?.map((albumPhoto) => {
        return <img key={albumPhoto.id} src={albumPhoto.url} />;
      })}
    </div>
  );
};

export default Album;
