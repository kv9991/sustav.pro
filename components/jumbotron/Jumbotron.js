import React from "react";

const Jumbotron = () => {
  return (
    <section className="hero is-primary is-small">
      <div className="hero-head">
        <div className="hero-body has-centered-text">
          <div className="container" style={{ maxWidth: '900px' }}>
            <div className="columns">
              <div className="column is-8">
                <h1 className="title">
                  Александр Ветошкин
                </h1>
                <h2 className="subtitle">
                  Врач травматолог-ортопед
                </h2>
                <p>
                  Кандидат медицинских наук. Доцент кафедры хирургии и инновационных технологий Института дополнительного профессионального образования «Экстремальная медицина» ФГБУ ВЦЭРМ им. А.М. Никифорова МЧС России.
                </p>
                <br />
                <p>
                  Направление деятельности - оперативное лечение спортивных травм крупных суставов. Артроскопия коленного, плечевого, тазобедренного, локтевого суставов.
                </p>
                <br />
                <a href="/portfolio" className="button">Портфолио</a>
              </div>
              <div className="column is-4">
                <div className="box">
                  <p className="title is-4" style={{ color: '#333' }}>
                    Запись на приём
                  </p>
                  <p>Оставьте свою контактную информацию для дальнейшей координации</p>
                  <br />
                  <div className="form is-inverted">
                    <div className="field">
                      <div className="control">
                        <input className="input" type="text" placeholder="Ваше имя" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" type="phone" placeholder="Ваш контактный телефон" />
                      </div>
                    </div>
                    <div className="control">
                      <button className="button is-success">Записаться</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li><a>Исследование перед операцией</a></li>
                <li><a>Вики</a></li>
                <li><a>Форум</a></li>
                <li><a>Операции</a></li>
                <li><a>Реабилитация</a></li>
                <li><a>Профилактика травматизма</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Jumbotron;