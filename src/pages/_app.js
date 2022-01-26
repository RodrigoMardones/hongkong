import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAATeu0AAa/fwAX45wAh/XOAK2c/wCMe/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIiIiIiIAACMzMzMzMyACQRERERETMgJBEREREREyAkERERERETICQRERERERMgJBEREREREyAkEREAARETICRVEBEQFVMgJFUREREVUyAkABEiIRADICQAEgACEAMgJERCAAIREyACIiAGACIiAAAAAGZgAAAAAAAAYGAAAADABwAAgAMAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAOBAAADgQAAhsMAAPx/AAD9fwAA" rel="icon" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
