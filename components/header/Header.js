import React from "react";

const Header = () => {
  return (
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://localhost:3000">
            <b>Александр Ветошкин</b>
          </a>

          <div className="navbar-burger burger" data-target="menuBar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="menuBar" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/documentation/overview/start/">
                Обо мне
            </a>
              <div className="navbar-dropdown is-boxed is-primary">
                <a className="navbar-item" href="/documentation/overview/start/">
                  Международное сотрудничество
              </a>
                <a className="navbar-item" href="/documentation/overview/start/">
                  Конференции
              </a>
                <a className="navbar-item" href="/documentation/overview/start/">
                  Обучение
              </a>
                <a className="navbar-item" href="/documentation/overview/start/">
                  Видео операций
              </a>
                <a className="navbar-item" href="/documentation/overview/start/">
                  Научные переводы
              </a>
                <hr className="navbar-divider" />
                <a className="navbar-item " href="/documentation/overview/start/">
                  Портфолио
              </a>
                <a className="navbar-item " href="/documentation/overview/start/">
                  Блог
              </a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="https://bulma.io/blog/">
                Сустав Вики
              </a>
              <div id="wikiDropdown" className="navbar-dropdown is-boxed" data-style="width: 18rem;">
                <a className="navbar-item" href="/2017/10/09/roses-are-red-links-are-blue/">
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-link">73 статьи</small>
                    </p>
                    <p>Плечевой сустав</p>
                  </div>
                </a>
                <a className="navbar-item" href="/2017/10/09/roses-are-red-links-are-blue/">
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-link">54 статьи</small>
                    </p>
                    <p>Локтевой сустав</p>
                  </div>
                </a>
                <a className="navbar-item" href="/2017/10/09/roses-are-red-links-are-blue/">
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-link">33 статьи</small>
                    </p>
                    <p>Голеностопный сустав</p>
                  </div>
                </a>
                <a className="navbar-item" href="/2017/10/09/roses-are-red-links-are-blue/">
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-link">85 статей</small>
                    </p>
                    <p>Коленный сустав</p>
                  </div>
                </a>

                <a className="navbar-item" href="https://bulma.io/blog/">
                  Все категории
                </a>
              </div>
            </div>
            <a className="navbar-item " href="https://bulma.io/expo/">
              Связь
            </a>
            <a className="navbar-item " href="https://bulma.io/love/">
              Страховка
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button is-success" href="https://github.com/jgthms/bulma/releases/download/0.6.0/bulma-0.6.0.zip">
                  Задать вопрос
                </a>
              </p>
            </div>
          </div>
        </div>
        <style jsx>{`
        .navbar-dropdown .navbar-item {
          color:#333;
        }
      `}</style>
      </div>
    </nav>
  );
}

export default Header;