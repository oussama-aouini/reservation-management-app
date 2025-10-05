import { HStack, IconButton, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "./ui/color-mode";
import ActivitySelector from "./ActivitySelector";

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="30px" />
      <ActivitySelector />
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </HStack>
  );
};
export default NavBar;
