import React from 'react';
class App extends React.Component {
  render() {
    return (
      <div className="btn">
        <a>咨询</a>
        <a>预约看房</a>
        <a href='/reservation'>预订</a>
      </div>
    )
  }
}
export default App;