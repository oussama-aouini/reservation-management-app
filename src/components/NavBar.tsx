import { HStack, IconButton, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "./ui/color-mode";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Image src={logo} boxSize="30px" />
      <Text>NavBar</Text>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </HStack>
  );
};
export default NavBar;
