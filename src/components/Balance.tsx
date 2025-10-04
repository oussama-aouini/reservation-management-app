import { HStack, Icon, Text } from "@chakra-ui/react";
import { GrMoney } from "react-icons/gr";

const Balance = () => {
  return (
    <HStack>
      <Icon as={GrMoney} />
      <Text>60 DT</Text>
    </HStack>
  );
};
export default Balance;
