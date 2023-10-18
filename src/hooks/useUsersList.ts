import { useQuery } from "@tanstack/react-query";
import api from "../api/jsonplaceholder";
import { User } from "../interfaces/types";

async function fetchUsers() {
  const { data } = await api.get<User[]>(`/users`);
  return data;
}

export function useFetchUsers() {
  return useQuery<User[], Error>({ queryKey: ["users"], queryFn: fetchUsers });
}
