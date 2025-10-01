import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ReservationGrid from "./components/ReservationGrid";

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
      </GridItem>
    </Grid>
  );
}

export default App;
