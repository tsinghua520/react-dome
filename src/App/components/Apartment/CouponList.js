import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.getCoupon = this.getCoupon.bind(this)
  }
  getCoupon(id) {
    alert('领取优惠券' + id)
  }
  render() {
    let coupon = this.props.list.map( (obj, index) => {
      return (
        <li key={index}><span>{obj.couponName}</span> <a onClick={this.getCoupon.bind(this, obj.couponId)}>立即领取</a></li>
      )
    })
    return (
      <ul>
        {coupon}
      </ul>
    )
  }
}
export default App;