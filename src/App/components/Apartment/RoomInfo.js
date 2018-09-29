import React from 'react';
class App extends React.Component {
  render() {
    let roomInfo = this.props.roomInfo
    return (
      <div>
        <h3>{roomInfo.hotelName}</h3>
        <p>{roomInfo.address} {roomInfo.minPrice}-{roomInfo.maxPrice}</p>
      </div>
    )
  }
}
export default App;