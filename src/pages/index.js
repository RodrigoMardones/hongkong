import Head from 'next/head'
import { Grid } from '@nextui-org/react';
import CenterImage from '../components/centerImage';

export default function Home() {

  return (
    <>
      <Head>
        <title>HongKong</title>
        <meta name="description" content="coming soon..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid.Container gap={2} justify="center">
        <Grid xs={4} >
          <CenterImage />
        </Grid>
      </Grid.Container>
    </>
  );
}
