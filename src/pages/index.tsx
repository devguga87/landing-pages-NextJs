import { GetStaticProps } from 'next';
import { loadPages } from '../api/load-pages';
import Home from '../templates/Home';

export type IndexProps = {
  data: [];
};

Index.propTypes = {
  data: P.array,
};

export default function Index({ data = null }: IndexProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  let data = null;

  try {
    data = await loadPages('landing-page-2');
  } catch (e) {
    console.log(e);
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
