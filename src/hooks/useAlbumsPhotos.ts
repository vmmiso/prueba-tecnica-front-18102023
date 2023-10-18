import { useQuery } from "@tanstack/react-query";
import api from "../api/jsonplaceholder";
import { AlbumPhoto } from "../interfaces/types";

async function fetchAlbumsPhotos() {
  const { data } = await api.get<AlbumPhoto[]>(`/photos`);
  return data;
}

export function useFetchAlbumsPhotos() {
  return useQuery<AlbumPhoto[], Error>({
    queryKey: ["albumsPhotos"],
    queryFn: fetchAlbumsPhotos,
    staleTime: Infinity,
  });
}
