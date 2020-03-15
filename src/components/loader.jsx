import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    margin: "auto",
    width: "50%"
  }
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={12}>
            <CardMedia>
              <div className={classes.root}>
                <CircularProgress />
              </div>
            </CardMedia>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Loader;
