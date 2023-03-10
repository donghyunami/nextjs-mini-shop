import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import ProdList from "../src/components/prodList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home() {
  const [prodList, setProdList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getDetail() {
    setIsLoading(true);
    axios.get(API_URL).then((res) => {
      setProdList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | 쇼핑의 시작, 쇼핑나우</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading..
          </Loader>
        </div>
      ) : (
        <main>
          <section>
            <Header as={"h3"} style={{ paddingTop: 14 }}>
              베스트 상품
            </Header>
            <Divider />
            <ProdList prodList={prodList.slice(0, 9)} />
          </section>
          <section>
            <Header as={"h3"} style={{ paddingTop: 14 }}>
              신상품
            </Header>
            <Divider />
            <ProdList prodList={prodList.slice(9)} />
          </section>
        </main>
      )}
    </div>
  );
}
