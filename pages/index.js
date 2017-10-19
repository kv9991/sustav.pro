import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Header from '../components/header/Header';
import Jumbotron from "../components/jumbotron/Jumbotron";
import Container from "../components/Container";

class Counter extends React.Component {
  static getInitialProps({ store, isServer }) {
    return { isServer }
  }
  render() {
    return (
      <Container>
        <Jumbotron />
        <section className="section">
          <div className="container">
            <h1 className="is-4 title">
              Hello World
            </h1>
          </div>
        </section>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    test: state.test
  }
}

export default withRedux(initStore, mapStateToProps)(Counter)
