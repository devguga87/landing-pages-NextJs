import { screen } from '@testing-library/react';
import { GridContent } from '.';
import { renderTheme } from '../../utils/render-theme';

import mock from './mock';

describe('<GridContent/>', () => {
  it('should render grid content', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid content', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
