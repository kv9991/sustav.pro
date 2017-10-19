import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <p>
              <strong>Александр Ветошкин</strong>, 2017.
              <br />Сайт создан в <a href="http://web.levelupworlds.com">Levelup Web</a>.
            </p>
            <br />
            <p>
              <a href="http://opensource.org/licenses/mit-license.php">Creative Commons</a>. Все материалы на сайте находятся под лицензией Материалы под лицензией Creative Commons.
            </p>
            <p>
              Версия 3.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;