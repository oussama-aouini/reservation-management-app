import type { Reservation } from "@/hooks/useReservations";
import { Button, Card } from "@chakra-ui/react";

interface Props {
  reservation?: Reservation;
}

const ReservationCard = ({ reservation }: Props) => {
  return (
    <Card.Root borderRadius={10}>
      <Card.Body>
        <Card.Title>Oussama Aouini</Card.Title>
        <Card.Description>outdoor 1 at 4pm</Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button>Accept</Button>
        <Button>Reject</Button>
      </Card.Footer>
    </Card.Root>
  );
};
export default ReservationCard;
