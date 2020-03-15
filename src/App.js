import React, { Component } from "react";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import Youtube from "./components/api";
import _ from "lodash";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      filteredVideos: [],
      selectedVideo: null
    };

    this.handleSearch("malaysia");
  }

  handleSearch = async term => {
    await Youtube.get("/search", {
      params: {
        q: term
      }
    }).then(res => {
      this.setState({
        videos: res.data.items,
        filteredVideos: res.data.items.slice(1),
        selectedVideo: res.data.items[0]
      });
    });
  };

  handleSelect = selectedVideo => {
    this.setState({ selectedVideo });
    this.filteredVideos(selectedVideo);
  };

  filteredVideos = selectedVideo => {
    let filteredVideos = this.state.videos;
    filteredVideos = filteredVideos.filter(video => {
      return video.snippet.title !== selectedVideo.snippet.title;
    });
    this.setState({
      filteredVideos
    });
  };

  render() {
    const videoSearch = _.debounce(term => {
      this.handleSearch(term);
    }, 800);

    return (
      <React.Fragment>
        <Header onSearch={videoSearch} />
        <Body
          videos={this.state.filteredVideos}
          selectedVideo={this.state.selectedVideo}
          onVideoSelect={this.handleSelect}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
