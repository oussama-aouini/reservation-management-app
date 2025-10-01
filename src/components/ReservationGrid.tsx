import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface Reservation {
  id: number;
  time: Date;
  reserver: string;
}

interface FetchReservationsResponse {
  count: number;
  results: Reservation[];
}

const ReservationGrid = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchReservationsResponse>("/reservation")
      .then((res) => setReservations(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return <div>ReservationGrid</div>;
};
export default ReservationGrid;
