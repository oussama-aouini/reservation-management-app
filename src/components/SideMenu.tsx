import { HStack, Icon, List } from "@chakra-ui/react";
import { IoHomeSharp } from "react-icons/io5";

const SideMenu = () => {
  return (
    <List.Root>
      <HStack>
        <Icon as={IoHomeSharp} />
        <List.Item>Home</List.Item>
      </HStack>
    </List.Root>
  );
};
export default SideMenu;
