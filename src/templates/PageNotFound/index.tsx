import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Erro 404"
      html='<p>A página que voce busca não foi encontrada. <a href="/">Clique para voltar</a></p>'
    />
  );
};
