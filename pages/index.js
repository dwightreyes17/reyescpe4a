import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Dwight Reyes</b>. I'm a Computer Enginnering student from University of the Assumption.I love playing basketball or watching movies or videos about basketball on my free time, I love seafoods and those dishes who has veggies (nakakasawa na po kasi kapag laging meat) and I want to be a pilot someday and have my own business.
. You can contact me on <Link href="https://www.facebook.com/dwight.michael10">Facebook.</Link></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}