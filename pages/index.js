import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Simple Blog Site</title>
      </Head>
      <section className={utilStyles.headingMd}>

      <p><b>Contact Information:</b></p>

      <p>Address: Blk 16 lot 22, Fiesta Community, Brgy. Sabanilla, Mexico, Pampanga</p>

      <p>Cellphone: +63956 954 7765 </p>

      <p>Email Address: dwightmichael.017@gmail.com </p>

      <p>Facebook Link: <Link href="https://www.facebook.com/dwight.michael10">Dwight Reyes</Link></p>

      <p><b>Description:</b></p>

      <p>To secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.. </p>

      <p><b>Skills:</b></p>

      <li>Knowledgeable in C++, Python, and JavaScript programming languages.</li>
      <li>Oriented in HTML5 .</li>
      <li>Knowledgeable in Microsoft Offices such as Microsoft Word, Excel and PowerPoint. </li>
      <li>Capable creating Infographics. </li>
      <li>Time Management. </li>
      <li>Communication Skills . </li>

      <p><b>Educational Attainment:</b></p>
      <div>
        <p style={{textAlign: "left"}}><b>Tertiary Level</b></p>
        <p style={{textAlign: "center"}}>
        Bachelor of Science in Computer Engineering (Degree)
        </p>
        <p style={{textAlign: "center"}}>
        University of the Assumption
        </p>
        <p style={{textAlign: "center"}}>
        Unisite Subdivision, Barangay Del Pilar, 
        </p>
        <p style={{textAlign: "center"}}>
        City of San Fernando Pampanga 
        </p>
        <p style={{textAlign: "center"}}>
        2019-Present
        </p>
      </div>

      <div>
        <p style={{textAlign: "left"}}><b>Secondary Level</b></p>
        <p style={{textAlign: "center"}}>
        Pampanga High School
        </p>
        <p style={{textAlign: "center"}}>
        High School Blvd, Lourdes, San Fernando, Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        Unisite Subdivision, Barangay Del Pilar, 
        </p>
        <p style={{textAlign: "center"}}>
        2017-2019 (Senior High School)
        </p>
        <br></br>
        <p style={{textAlign: "center"}}>
         Pampanga High School, Inc.
        </p>
        <p style={{textAlign: "center"}}>
        High School Blvd, Lourdes, San Fernando, Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        2014-2017 (Junior High School) 
        </p>
        
      </div>

      <div>
        <p style={{textAlign: "left"}}><b>Primary Level</b></p>
        <p style={{textAlign: "center"}}>
        San Fernando Elementary School
        </p>
        <p style={{textAlign: "center"}}>
        129 B. Mendoza, San Fernando, 2000 Pampanga 
        </p>
        <p style={{textAlign: "center"}}>
        City of San Fernando, Pampanga
        </p>
        <p style={{textAlign: "center"}}>
        2006-2013
        </p>
      </div>
      <br></br>
        <p style={{textAlign: "left"}}>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
