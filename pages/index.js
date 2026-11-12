import Head from 'next/head';
import Homebanner from '../components/Homebanner';
import Products from '../components/Products';
import Merchandise from '../components/Merchandise';
import Technology from '../components/Technology';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Appex Athletics</title>
        <meta name="description" content="Appex Athletics is a fitness club with training suites, coaching, merchandise, and membership signup." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href='/fitgrow-icon.png'/>
      </Head>
      <Homebanner />
      <Products />
      <Merchandise />
      <Technology />
      <Footer />
    </>
  )
}
