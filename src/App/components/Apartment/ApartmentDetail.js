import React from 'react'
import Slider from '../../common/Slider'
import RoomInfo from './RoomInfo'
import CouponList from './CouponList'
import ButtonList from './ButtonList'
import { Map } from 'react-amap';
import '../../../static/css/apartment.css'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      roomInfo:{},
      couponList:[
        {
          couponId: 1,
          couponName: '测试优惠券1',
          price:100
        },
        {
          couponId: 2,
          couponName: '测试优惠券2',
          price:200
        }
      ]
    }
  }
  componentWillMount() {
      this.setState ({
        roomInfo: {
          hotelName: '测试公寓名称',
          maxPrice: '2000',
          minPrice: '1000',
          address: '上海闵行区中骏广场',
          startTime: '2018-9-10'
        }
      })
  }
  render() {
    const key = '765005f8f39a93392dc6f2ce560dccb9';
    return (
      <div>
        <Slider data={this.state.data}></Slider>
        <RoomInfo roomInfo={this.state.roomInfo}></RoomInfo>
        <CouponList list={this.state.couponList}></CouponList>
        <div className='map'>
          <Map amapkey={key} version='1.4.0'  />
        </div>
        <ButtonList></ButtonList>
      </div>
    )
  }
}
export default App;