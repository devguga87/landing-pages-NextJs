import { loadPages } from '../api/load-pages';
import P from 'prop-types';
import { GetStaticPaths, GetStaticProps } from 'next';
import Home, { HomeProps } from '../templates/Home';

export default function Page({ data }: HomeProps) {
  return <Home data={data} />;
}

Page.propTypes = {
  data: P.array,
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await loadPages()).map(page => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<HomeProps> = async ctx => {
  let data = null;

  try {
    data = await loadPages(ctx.params.slug as string);
  } catch (e) {
    data = null;
  }

  if (!data) {
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
