import { GridImage } from '.';
import { renderTheme } from '../../utils/render-theme';
import mock from './mock';

describe('<GridImage/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
