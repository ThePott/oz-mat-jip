import { useEffect } from "react";
import useBoundStore from "../../shared/store";

export const useUpdateFavoriteArray = () => {
  const idToIsFavorite = useBoundStore((state) => state.idToIsFavorite);
  const updateFavoritePlaceArray = useBoundStore(
    (state) => state.updateFavoritePlaceArray,
  );
  const favoritePlaceArrayResponse = useBoundStore(
    (state) => state.favoritePlaceArrayResponse,
  );
  const updateIdToIsFavorite = useBoundStore(
    (state) => state.updateIdToIsFavorite,
  );
  useEffect(() => {
    updateFavoritePlaceArray();
  }, [idToIsFavorite]);

  useEffect(() => {
    updateIdToIsFavorite();
  }, [favoritePlaceArrayResponse]);
};
