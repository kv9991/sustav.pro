import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Header from '../components/header/Header';
import Jumbotron from "../components/jumbotron/Jumbotron";
import Container from "../components/Container";
import config from "../config";
import Blog from "../components/blog/Blog";

class Counter extends React.Component {
  static getInitialProps({ store, isServer }) {
    return { isServer }
  }
  render() {
    return (
      <Container>
        <Jumbotron />
        <section className="section" style={{ paddingTop: '12px', paddingBottom: '12px', borderBottom: '1px solid #eee' }}>
          <div className="container">
            <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
              <ul>
                <li><a href="#">Sustav.pro</a></li>
                <li className="is-active"><a href="#" aria-current="page">Главная страница</a></li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="hero is-transparent is-bold">
          <div className="hero-body" style={{ margin: '0', paddingTop: '20px' }}>
            <div className="container">
              <h1 className="title">
                Мой блог
              </h1>
              <h2 className="subtitle">
                Последние записи из блога
              </h2>
              <div className="columns">
                <div className="column is-3">
                  <Blog />
                </div>
                <div className="column is-3">
                  <Blog />
                </div>
                <div className="column is-3">
                  <Blog />
                </div>
                <div className="column is-3">
                  <Blog />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero is-light section">
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="level" style={{ width: '100%', margin: 'auto' }}>
              <div className="columns" style={{ width: '100%' }}>
                <div className="column">
                  <div className="is-shadowless">
                    <img width="50px" src={config.static + "img/icons/007-youtube.png"} alt="YouTube" />
                    <div style={{ marginLeft: '10px' }} className="subtitle is-5">
                      Тематические видеоролики
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="is-shadowless">
                    <img width="50px" src={config.static + "img/icons/003-vk.png"} alt="YouTube" />
                    <div style={{ marginLeft: '10px' }} className="subtitle is-5">
                      Анонсы к новым тематическим статьям
                  </div>
                  </div>
                </div>
                <div className="column">
                  <div className="is-shadowless">
                    <img width="50px" src={config.static + "img/icons/002-twitter.png"} alt="YouTube" />
                    <div style={{ marginLeft: '10px' }} className="subtitle is-5">
                      Короткие заметки о медицине
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="is-shadowless">
                    <img width="50px" src={config.static + "img/icons/001-google-plus.png"} alt="YouTube" />
                    <div style={{ marginLeft: '10px' }} className="subtitle is-5">
                      Круги общения и конференции
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1>hello</h1>
          </div>
        </section>
      </Container >
    )
  }
}

const mapStateToProps = state => {
  return {
    test: state.test
  }
}

export default withRedux(initStore, mapStateToProps)(Counter)
