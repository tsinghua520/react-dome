import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

class App extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://baidu.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`http://sce-funlive-01.oss-cn-shanghai.aliyuncs.com/hotel/15324830727073df9bcc3-4253-4edb-a7b0-1abf598410c8?x-oss-process=image/resize,m_lfit,h_446`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
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
