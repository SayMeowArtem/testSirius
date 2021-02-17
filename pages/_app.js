import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
    <style jsx>{`
      div {
        font-family: Roboto
      }
      `}
    </style>
  </div>
}

export default MyApp
