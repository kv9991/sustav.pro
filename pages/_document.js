import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <link rel="stylesheet" href="static/styles.css"/>
         <title>Sustav.pro</title>
       </Head>
       <body className="main">
         {this.props.customValue}
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}