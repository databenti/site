import Head from 'next/head'
import styles from '../styles/Home.module.css'
import moment from 'moment'
import axios from 'axios';

function currencyFormat(num) {
  return 'R$ ' + num.toFixed(2).replace('.', ',')
}
 function Home({ data }) {
  moment.locale('pt-br');
  console.log(data)
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
          {[data].map(data => (
            <div key={data.listaitems[5]._id} className={styles.card}>
              <img className={styles.imgcard} src={data.listaitems[5].image} width="150" alt="imagem" />
              <h2>{data.listaitems[5].title}</h2>
              <p><span>{data.listaitems[5].price}</span></p><br />
              <span>Ultima atualização: </span>
              <p><span className={styles.data}>{moment(data.listaitems[5].updated).format('ll')}</span></p>
              
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
export async function getServerSideProps(context) {
  const res = await axios.get('http://localhost:3000/api/products');
  const data = await res.data;
  console.log(data)
  return {
    props: { data }
  };
}
export default Home