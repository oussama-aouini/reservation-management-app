import useReservations from "@/hooks/useReservations";

const ReservationGrid = () => {
  const { reservations, error } = useReservations();

  return <div>ReservationGrid</div>;
};
export default ReservationGrid;
