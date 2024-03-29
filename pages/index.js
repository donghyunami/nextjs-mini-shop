import Head from "next/head";
import axios from "axios";
import ProdList from "../src/components/prodList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>HOME | 쇼핑의 시작, 쇼핑나우</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <Header as={"h3"} style={{ paddingTop: 14 }}>
            베스트 상품
          </Header>
          <Divider />
          <ProdList prodList={list.slice(0, 9)} />
        </section>
        <section>
          <Header as={"h3"} style={{ paddingTop: 14 }}>
            신상품
          </Header>
          <Divider />
          <ProdList prodList={list.slice(9)} />
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const API_URL = process.env.API_URL;
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      list: data,
      mode: process.env.MODE_NAME,
    },
  };
}
