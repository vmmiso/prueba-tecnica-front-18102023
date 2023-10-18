import { useQuery } from "@tanstack/react-query";
import api from "../api/jsonplaceholder";
import { User } from "../interfaces/types";

async function fetchUsers(id: string) {
  const { data } = await api.get<User>(`/users/${id}`);
  return data;
}

export function useFetchUser(id: string) {
  return useQuery<User, Error>({
    queryKey: ["user", id],
    queryFn: () => fetchUsers(id),
  });
}
