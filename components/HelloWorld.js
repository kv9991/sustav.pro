import React, {Component} from 'react'
import { connect } from 'react-redux'

class HelloWorld extends Component {
  render () {
    return (
      <div>
        This is your new component
      </div>
    )
  }
}

export default connect()(HelloWorld)
