import useData from "./useData";

export interface Reservation {
  id: number;
  time: Date;
  reserver: string;
}

const useReservations = () => useData<Reservation>("reservation");

export default useReservations;
