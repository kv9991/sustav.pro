import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import HelloWorld from '../components/HelloWorld'

class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    return { isServer }
  }
  render () {
    return (
      <div className="container">
        <div className="notification">
          <p className="title is-3">Hello World</p>
          <p className="subtitle is-5">Meet New Boilerplate</p>
          <HelloWorld />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    test: state.test
  }
}

export default withRedux(initStore, mapStateToProps)(Counter)
