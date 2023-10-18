import { useQuery } from "@tanstack/react-query";
import api from "../api/jsonplaceholder";
import { Album } from "../interfaces/types";

async function fetchUserAlbums(id: string) {
  const { data } = await api.get<Album[]>(`/users/${id}/albums`);
  return data;
}

export function useFetchUserAlbums(id: string) {
  return useQuery<Album[], Error>({
    queryKey: ["userAlbums", id],
    queryFn: () => fetchUserAlbums(id),
  });
}
