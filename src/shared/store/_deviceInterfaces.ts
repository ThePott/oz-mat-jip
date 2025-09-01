export interface Coords {
  lat: number;
  lon: number;
}

export interface DeviceState {
  coords: Coords | null;
  setCoords: (coords: Coords) => void;
}
