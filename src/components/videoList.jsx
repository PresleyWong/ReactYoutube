import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import VideoListItem from "./videoListItem";
import List from "@material-ui/core/List";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    paddingTop: "0px",
    paddingBottom: "0px"
  }
}));

const VideoList = props => {
  const classes = useStyles();
  const videoItems = props.videos.map((video, i) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        id={i}
        key={video.etag}
        video={video}
      />
    );
  });

  return <List className={classes.root}>{videoItems}</List>;
};

export default VideoList;
