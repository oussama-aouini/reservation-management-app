// import useReservations from "@/hooks/useReservations";
import { SimpleGrid } from "@chakra-ui/react";
import ReservationCard from "./ReservationCard";
import ReservationCardSkeleton from "./ReservationCardSkeleton";

const ReservationGrid = () => {
  // const { reservations, error } = useReservations();

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      gap={10}
      padding={"10px"}
    >
      <ReservationCard />
      <ReservationCard />
      <ReservationCard />
      <ReservationCardSkeleton />
    </SimpleGrid>
  );
};
export default ReservationGrid;
