import React, { Component } from 'react';
import '../../static/css/inbox.css'
function Avatar (props) {
  return (
    <img src={props.user.picUrl} alt={props.user.name} />
  );
}
function UserInfo (props) {
  return (
    <div className="userinfo">
      <Avatar user={props.user} />
      <h3>{props.user.name}</h3>
    </div>
  );
}
// function formatDate(data){
//   var date = new Date(data)
//   return date;
// }
function Comment (props) {
  return (
    <div>
      <UserInfo user={props.user} />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {/* {formatDate(props.date)} */}
      </div>
      <h2>saddjksajk<span>sadsad</span></h2>
    </div>
  );
}
const user = {
  name: 'tsinghua22',
  imgUrl:''
}
class App extends Component{
  render() {
    return (
      <div>
        <Comment user={user} text="mytext" date="2018-05-10" />
      </div>
    )
  }
}
// class App extends Component {
//   render() {
//     return (
//       element
//     );
//   }
// }

export default App;
