import { GetServerSideProps } from 'next'
import Head from "next/head"
import { useEffect, useState } from 'react'
import { SubsciptionButton } from "../components/SubsciptionButton"
import { Helper } from '../helpers/Helper'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface HomeProps {
  product: {
    productId: string
    amount: number
  }
}

export default function Home({ product }: HomeProps) {

  const [screenWidth, setScreenWidth] = useState<number>()

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
  }, [])

  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about <br /> the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {Helper.INSTANCE.numberFormatToCurrency(product.amount)} month</span>
          </p>
          <SubsciptionButton productId={product.productId} />
        </section>
        {screenWidth <= 640 ? <></> : <img src="/images/avatar.svg" alt="Girl coding" />}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1LGQ4fKsvLRmbPvfxB6HB1yh')

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  }
  return {
    props: { product }
  }
}