import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import VideoList from "./videoList";
import Loader from "./loader";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8)
  },
  video: {
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: 25,
    height: 0,
    overflow: "hidden"
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }
}));

const Body = props => {
  const classes = useStyles();

  if (!props.selectedVideo) {
    return <Loader />;
  }

  const url = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;
  const title = props.selectedVideo.snippet.title;
  const decription = props.selectedVideo.snippet.description;

  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={8}>
            <CardMedia>
              <div className={classes.video}>
                <iframe
                  className={classes.iframe}
                  src={url}
                  frameBorder="0"
                  title={title}
                />
              </div>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {decription}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <VideoList
              videos={props.videos}
              onVideoSelect={props.onVideoSelect}
            />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Body;
