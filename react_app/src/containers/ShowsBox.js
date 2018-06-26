import React from "react";
import ShowsSelector from "../components/ShowsSelector.js";

class ShowsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    }
  }

  componentDidMount() {
    const url = "https://rss.itunes.apple.com/api/v1/gb/tv-shows/top-tv-seasons/all/25/explicit.json"
    fetch(url)
    .then(res => res.json())
    .then(shows => this.setState({shows: shows.feed.results}));
  }

  // handleShowsSelect(event) {
  //   const showsIndex = event.target.value;
  //   const shows = this.state.shows[showIndex];
  //   this.setState({selectedShow: show});
  // }

  render() {
    return(
      <div>
        <h2>Shows Container</h2>
        <ShowsSelector
          shows= {this.state.shows}
        />
        {/* <ShowsDetails
          shows={null}
        /> */}
      </div>
    );
  }
}

export default ShowsBox;
