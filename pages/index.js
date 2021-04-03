import Head from 'next/head'
import styles from '../styles/Home.module.css'
import moment from 'moment'

function currencyFormat(num) {
  return 'R$ ' + num.toFixed(2).replace('.', ',')
}


export default function Home({ items }) {
  moment.locale('pt-br');
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Fraldas & Afins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
              <h2>{item.title}</h2>
              <p><span>{currencyFormat(item.price)}</span></p><br />
              <span>Ultima atualização: </span>
              <p><span className={styles.data}>{moment(item.updated).format('ll')}</span></p>
            </div>
          ))}

        </div>
      </main>

      <footer className={styles.footer}>
        Fraldas & Afins
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/productsfraldas');
  const json = await res.json();

  

  return {
    props: {
      items: json.listaitems
    }
  };
}
