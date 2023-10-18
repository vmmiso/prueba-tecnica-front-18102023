import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AlbumStore {
  recentVisited: number[];
  addVisited: (albumId: number) => void;
}

export const useAlbumsStore = create<AlbumStore>()(
  devtools(
    persist(
      (set) => ({
        recentVisited: [],
        addVisited: (albumId: number) =>
          set((state) => ({
            recentVisited: [...state.recentVisited, albumId],
          })),
      }),
      { name: "albumsStore" }
    )
  )
);
