import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ReservationGrid from "./components/ReservationGrid";
import Balance from "./components/Balance";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem hideBelow="lg" area="aside">
        Aside
      </GridItem>
      <GridItem area="main">
        <ReservationGrid />
        <Balance />
      </GridItem>
    </Grid>
  );
}

export default App;
