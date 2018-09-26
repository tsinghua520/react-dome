import React from 'react';
import '../../../static/css/index.css'
import Swiper from '../../common/Slider'
import Hot from './Hot'
class App extends React.Component {
  constructor(props){
    super()
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
      datalist:[
        {
          name:1,
          age:10
        }
      ]
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  
  changeHandler() {
    console.log('执行父元素的事件')
  }
  render() {
    return (
      <div>
        <Swiper data={this.state.data} /> 
        <h3>热门推荐</h3>
        <Hot datalist={this.state.datalist}  changeHandler={this.changeHandler}></Hot>
      </div>
    );
  }
}
export default App;

// class App extends Component{
//   componentDidMount() {
//     axios.post(apis.getAdByPlace,{acId: 101})
//       .then( (res) => {
//         console.log(res)
//       })
//   }
//   render() {
//     return (
//       <div>
//         <NavBar
//           mode="dark"
//           leftContent="Back"
//           rightContent={[
//             <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
//             <Icon key="1" type="ellipsis" />,
//           ]}
//         >NavBar</NavBar>
//         <Welcome name="jason" />
//         <Welcome name="tsinghua" />
//         <Button>Start</Button>
//         <Button type="primary">Start</Button>
//       </div>
//     )
//   }
// }

