import React, { Component, PropsWithChildren } from 'react'
import Header from "./header"

class layout extends Component<PropsWithChildren> {

  render() {
    return (
      <React.Fragment>
        <Header />
          { this.props.children }  
      </React.Fragment>
    )
  }
}

export default layout