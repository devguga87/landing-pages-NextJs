import P from 'prop-types';
import { loadPages } from '../api/load-pages';
import Home from '../templates/Home';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  // const raw = await fetch(config.url + config.defaultSlug);
  // const json = await raw.json();
  // const data = mapData(json);
  let data = null;
  try {
    data = await loadPages('landing-page-2');
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
