import { Container, Typography, Grid } from "@material-ui/core";
import { Button } from "../MyComponents";

const DetailPage = ({ charDetails, onBack }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          {charDetails[0].name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={charDetails[0].image} alt={charDetails[0].name} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1">
          Status: {charDetails[0].status}
        </Typography>
        <Typography variant="subtitle1">
          Species: {charDetails[0].species}
        </Typography>
        <Typography variant="subtitle1">
          Gender: {charDetails[0].gender}
        </Typography>
      </Grid>

      <Button onClick={onBack} fullWidth>
        Back
      </Button>
    </Container>
  );
};

export default DetailPage;
