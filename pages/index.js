import Head from 'next/head';
import Link from 'next/link';

function HomePage() {
  console.log('[HomePage] render');
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <h1>My Blog</h1>
      </main>
    </>
  );
}
export default HomePage;
