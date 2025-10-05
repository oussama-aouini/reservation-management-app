import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Menu from "./components/SideMenu";
import ReservationGrid from "./components/ReservationGrid";
import Balance from "./components/Balance";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem hideBelow="lg" area="aside">
        <Menu />
      </GridItem>
      <GridItem area="main">
        <ReservationGrid />
        <Balance />
      </GridItem>
    </Grid>
  );
}

export default App;
