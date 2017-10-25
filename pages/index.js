import React from 'react'
import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'
import Header from '../components/header/Header';
import Jumbotron from "../components/jumbotron/Jumbotron";
import Container from "../components/Container";
import config from "../config";
import Blog from "../components/blog/Blog";
import Entries from "../components/entries/Entries";
import { FEEDBACK_SIZE_PREVIEW } from "../components/feedback/Feedback.consts";
import Feedback from "../components/feedback/Feedback";

const blogs = [{
  id: 1,
  title: 'Test 1',
  description: 'Description 1',
  image: '123.png',
  created: new Date(21, 10, 2017),
}, {
  id: 2,
  title: 'Test 2',
  description: 'Description 2',
  image: '123.png',
  created: new Date(21, 10, 2017),
}, {
  id: 3,
  title: 'Test 3',
  description: 'Description 3',
  image: '123.png',
  created: new Date(21, 10, 2017),
}]

const feedbacks = [{
  id: 1,
  author: {
    name: 'Иван',
    image: 'http://sustav.pro/wp-content/uploads/2017/01/d-gfkfnt-e14731874919901.jpg',
  },
  created: new Date(2017, 5, 4),
  content: ' Александр! Таки не устаю вспоминать Вас добрыми словами: приделанная рука держится отлично!'
}, {
  id: 2,
  author: {
    name: 'Андрей',
    image: 'http://sustav.pro/wp-content/uploads/2017/01/%D0%B1%D0%BE%D0%BA%D1%81-3-001-e1484402524312.jpg',
  },
  created: new Date(2017, 5, 4),
  content: ' Александру Александровичу Ветошкину от Мастера спорта РФ Алены Градинарь, основной состав сборной России по боксу 2014-2015гг. Спасибо!'
}, {
  id: 3,
  author: {
    name: 'Кирилл',
    image: 'http://sustav.pro/wp-content/uploads/2017/01/%D0%B1%D0%B8%D0%B0%D1%82%D0%BB%D0%BE%D0%BD-1-e14690323986751.jpg',
  },
  created: new Date(2017, 5, 4),
  content: 'С благодарностью Александру Александровичу от Екатерины и Вячеслава!'
}, {
  id: 4,
  author: {
    name: 'Андрей',
    image: 'http://sustav.pro/wp-content/uploads/2017/01/%D0%B1%D0%B8%D0%B0%D1%82%D0%BB%D0%BE%D0%BD-1-e14690323986751.jpg',
  },
  created: new Date(2017, 5, 4),
  content: 'Большое спасибо Александру Александровичу за его работу! Прошло три дня после операции, а колену становится заметно легче с каждым часом. Через три недели снова буду в строю.'
}]

class Counter extends React.Component {
  static getInitialProps({ store, isServer }) {
    return { isServer }
  }
  render() {
    return (
      <Container>
        <Jumbotron />
        <section className="section" style={{ display: 'none', paddingTop: '12px', paddingBottom: '12px', borderBottom: '1px solid #eee' }}>
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
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-3">
                  <h1 className="title">
                    Мой блог
                  </h1>
                  <h2 className="subtitle">
                    Последние записи из блога
                  </h2>
                  <p>В этой рубрике я пишу о своей работе, кейсах в работе и о том, что вам может быть интересно из моей жизни</p>
                  <br />
                  <a href="#" className="button is-light">
                    Все записи
                  </a>
                </div>
                <div className="column">
                  <Entries
                    entries={blogs}
                    size={4}
                    component={Blog}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero is-dark is-bold">
          <div className="hero-body">
            <div className="container" style={{ width: '100%' }}>
              <div className="columns">
                <div className="column is-3">
                  <h1 className="title">
                    Сустав Вики
                  </h1>
                  <h2 className="subtitle">
                    Последние статьи из раздела Вики
                  </h2>
                  <p>В этом разделе вы сможете найти авторские статьи, посвящённые медицинской тематике</p>
                  <br />
                  <a href="#" className="button is-light">
                    Все статьи
                  </a>
                </div>
                <div className="column">
                  {/* TODO: Wiki Entry */}
                  <Entries
                    entries={blogs}
                    size={4}
                    component={Blog}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero is-light section" style={{ textAlign: 'center' }}>
          <div className="container">
            <h2 className="title is-3">Отзывы</h2>
            <p className="subtitle is-4">Последние отзывы пациентов о моей работе</p>
            <div style={{ marginTop: '15px' }}>
              <Entries
                entries={feedbacks}
                size={3}
                componentSize={FEEDBACK_SIZE_PREVIEW}
                component={Feedback}
              />
            </div>
            <a href="" className="button is-primary is-big">Все отзывы</a>
            <a href="" className="button is-primary is-big">Все отзывы</a>
          </div>
        </section>

        <section className="hero is-white section">
          <div className="container">
            hello
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
