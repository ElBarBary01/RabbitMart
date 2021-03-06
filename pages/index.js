
import Error from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from 'next/image'
import Products from '../components/Products';


function Home(props) {
  const { products } = props;
  const router = useRouter();

  if (!router.isFallback && !products) {
    return <Error statusCode={404} />;
  }

  return (
    <div className="my-8 bg-primary">
      <Head>
        <title>SbaceInc</title>
        <meta
          name="GIU SE"
          content="Rabbit Mart Marketplace"
        />
      </Head>
      <div className="mt-4">
        <Products products={products} />
      </div>
    </div>
  );
}

export async function getStaticProps({ params = {} }) {
  const response = await fetch('https://inventory-rho-ecru.vercel.app/api/products');
  const data = await response.text()
  const products = JSON.parse(data);
  return {
    props: {
      products,
    },
  };
}


export default Home;
