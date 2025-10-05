import { Button, Menu, Portal } from "@chakra-ui/react";
import { MdOutlineSportsCricket } from "react-icons/md";

const ActivitySelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <MdOutlineSportsCricket />
          Activities
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">Padel</Menu.Item>
            <Menu.Item value="new-file">FootBall</Menu.Item>
            <Menu.Item value="new-win">Tennis</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
export default ActivitySelector;
