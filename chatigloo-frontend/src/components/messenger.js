import React, {Component} from 'react'

import '../css/app.css'

export default class Messenger extends Component{
    constructor(props){

      super(props);

      this.state = {
        height: window.innerHeight
      }
      this._onResize = this._onResize.bind(this)
    }

    _onResize(){
      this.setState({
        height: window.innerHeight
      })
    }

    componentDidMount(){

      window.addEventListener('resize', this._onResize)
    }

    componentWillUnmount(){

      window.removeEventListener('resize', this._onResize)
    }

    render(){
      const {height} = this.state
      const style= {
        height: 600
      }
        return (
          <div style ={style} className="app-messenger">
              <div className="header">
                <div className="left">
                  <div className="">New message</div>
                </div>
                <div className="content"><h2>Title</h2></div>
                <div className="right"></div>

                  <div className="user-bar">
                    <div className="profile-name">Glen Pegado      </div>
                    <div className="profile-image"><img src="http://0.gravatar.com/avatar/9c47cb576f4045ac73d146277b2b6528?s=50&d=mm&r=g" alt=""/></div>
                </div>
              </div>


              <div className="main">
                <div className="sidebar-left">Left sidebar</div>
                <div className="content">Content</div>
                <div className="sidebar-right">Right sidebar</div>
              </div>
          </div>
        )
    }
}
