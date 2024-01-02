import Head from "next/head";
import { useRouter } from "next/router";
import { pageData } from "../api/dummydata";
import Image from "next/image";
import PageCard from "@/shared/components/pageCard";
import Link from "next/link";
export default function Service() {
  const router = useRouter()
  const page = router.asPath.replace("/", "").replace("%20", " ").replace("-", " ")
  debugger
  const pageDetails = pageData.filter((x) => x.name === page); 
  return (
    <>
      <Head>
        <title>{page}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <header className="header set_bg" style={{backgroundImage: `url(${pageDetails[0]?.image})`}}>
        <div>
          <h1>{pageDetails[0]?.name} h1</h1>
        </div>
        </header>
      <section>    
        <div className="content">
          <h2>{page} h2</h2>
          <p>{pageDetails[0]?.details} p</p>    
        </div>
      </section>
      <aside className="content">
        <div className="inner-content">  
        <ul>
          {pageDetails[0]?.items?.map((x) => 
            <Link href={`/${page}/${x.name}`}><li key={x.name}> <div className="page-card">
            <Image src={x.image} width={250} height={250} alt="product" className="" />
        </div><p>{x.name}</p><p>{x.description}</p></li></Link>)}
            </ul>
        </div>          
        <h2>More details</h2>
        <p>{pageDetails[0]?.more_details}</p>
      </aside>
    </>
  );
}
