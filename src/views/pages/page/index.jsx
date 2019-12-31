import React, { Component } from "react";
import {MapRouter,route} from '../../../router'
import Footer from '../../../components/footer'
// import '../../index.less'

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="wrap">
        <MapRouter route={this.props.route} />
        <Footer {...this.props}/>
      </div>
    );
  }
}

export default Page;
