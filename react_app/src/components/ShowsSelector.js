import React from "react";


class ShowsSelector extends React.Component {
  render () {
    const showNodes = this.props.shows.map(shows => {
      return (<ShowsDetails value={index} key={index} show={show.id}>
        {show.name}
      </ShowsDetails>
    )
  });
return (
  <div className='show-list'>{showNodes}</div>
)
}
}

export default ShowsSelector;
