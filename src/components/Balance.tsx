import { HStack, Icon, Spinner, Text } from "@chakra-ui/react";
import { GrMoney } from "react-icons/gr";

const Balance = () => {
  // const {data, isLoading, error} = useBalance();

  // if (error) return null;

  // if (isLoading) return <Spinner />;

  return (
    <HStack>
      <Icon as={GrMoney} />
      <Text>60 DT</Text>
      <Spinner />
    </HStack>
  );
};
export default Balance;
