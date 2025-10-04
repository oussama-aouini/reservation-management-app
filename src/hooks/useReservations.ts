import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Reservation {
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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchReservationsResponse>("/reservation", {
        signal: controller.signal,
      })
      .then((res) => {
        setReservations(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { reservations, error, isLoading };
};

export default useReservations;
