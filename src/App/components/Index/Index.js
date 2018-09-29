import React from 'react';
import '../../../static/css/index.css'
import Swiper from '../../common/Slider'
import Hot from './Hot'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
    this.toCenter = this.toCenter.bind(this)
    this.toApart = this.toApart.bind(this)
  }
  toCenter(){
    window.location.href='/center'
  }
  toApart(){
    window.location.href='/apartment'
  }
  render() {
    return (
      <div>
        <Swiper data={this.state.data} /> 
        <h3>热门推荐</h3>
        <h2 onClick={this.toApart}>订单详情页</h2>
        <Hot datalist={this.state.data}></Hot>
        <h2 onClick={this.toCenter}>个人中心</h2>
      </div>
    );
  }
}

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

export default App;
