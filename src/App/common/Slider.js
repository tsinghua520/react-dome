import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      imgHeight: 176,
    }
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
        >
          {this.state.data.map(val => (
            <a
              href='http://www.baidu.com'
              key={val}
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
    )
  }
}
export default App;