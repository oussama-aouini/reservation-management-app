import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
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

const useReservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchReservationsResponse>("/reservation", {
        signal: controller.signal,
      })
      .then((res) => setReservations(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { reservations, error };
};

export default useReservations;
