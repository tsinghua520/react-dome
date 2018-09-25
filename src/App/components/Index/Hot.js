import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.datalist
    }
  }
  render() {
    let data = this.state.data
    let list = data.map( (obj, index) => {
      return <li key={index}>{obj.name}+{obj.age}</li>
    })
    return (
      <div>
        <ul>
            {list}
        </ul>
      </div>
    )
  }
}
export default App;