import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    cursor: "pointer"
  },
  inline: {
    display: "inline"
  },
  desc: {
    marginLeft: "10px"
  }
}));

const VideoListItem = props => {
  const imageUrl = props.video.snippet.thumbnails.default.url;
  const title = props.video.snippet.title;
  const description = props.video.snippet.description;
  const classes = useStyles();

  const handleClick = (event, video) => {
    props.onVideoSelect(video);
  };

  return (
    <ListItem
      className={classes.root}
      alignItems="flex-start"
      divider={true}
      onClick={event => handleClick(event, props.video)}
    >
      <img src={imageUrl} className={classes.thumbnail} alt={title} />
      <ListItemText
        className={classes.desc}
        primary={title}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="caption"
              className={classes.inline}
              color="textSecondary"
            >
              {description}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
};

export default VideoListItem;
