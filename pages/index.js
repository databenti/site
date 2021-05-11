import Head from 'next/head'
import styles from '../styles/Home.module.css'
import moment from 'moment'
import { Button, Container, Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function currencyFormat(num) {
  return 'R$ ' + num.toFixed(2).replace('.', ',')
}


export default function Home({ items }) {
  moment.locale('pt-br');


  return (
    <div className={styles.container}>
      <Head>
        <title>Fraldas & Formulas</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WSEJT71W5C"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WSEJT71W5C');
</script>
      </Head>
      <Container fluid>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">Fraldas & Formulas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/formulas">Formulas</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Sobre">Quem somos?</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
      <main className={styles.main}>

        <h1 className={styles.title}>
          Fraldas
        </h1>

        <p className={styles.description}>
          pesquise preços de um jeito facil
        </p>

        <div className={styles.grid}>

          {items.map(item => (
            <div key={item._id} className={styles.card}>
              <img className={styles.imgcard} src={item.image} width="150" alt="imagem" />
              <h2 className={styles.titlecard}>{item.title}</h2>
              <p><span className={styles.price}><Badge variant="warning">{currencyFormat(item.price)}</Badge></span></p><br />
              <span>Ultima atualização: </span>
              <p><span className={styles.data}><Badge variant="danger">{moment(item.lastVisited, "YYYYMMDD").fromNow()}</Badge></span></p>
            </div>
          ))}

        </div>
      </main>

      <footer className={styles.footer}>
        Fraldas & Formulas
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://fraldaseafins-lo8y0pbh3-databenti.vercel.app/api/productsfraldas');
  const json = await res.json();



  return {
    props: {
      items: json.listaitems
    }
  };
}
