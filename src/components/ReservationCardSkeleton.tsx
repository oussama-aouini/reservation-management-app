import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const ReservationCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="100px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};
export default ReservationCardSkeleton;
