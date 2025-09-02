import { useEffect } from "react";
import useBoundStore from "../../shared/store";

export const useUpdateFavoriteArray = () => {
  const idToIsFavorite = useBoundStore((state) => state.idToIsFavorite);
  const updateFavoritePlaceArray = useBoundStore(
    (state) => state.updateFavoritePlaceArray,
  );
  useEffect(() => {
    updateFavoritePlaceArray();
  }, [idToIsFavorite]);
};
