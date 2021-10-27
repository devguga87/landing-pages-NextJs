import { render, screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../utils/render-theme';

describe('<TextComponent/>', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Texto</TextComponent>);
    expect(screen.getByText('Texto')).toBeInTheDocument();
  });

  it('should render with medium size', () => {
    renderTheme(<TextComponent>Texto</TextComponent>);
    expect(screen.getByText('Texto')).toHaveStyleRule('font-size', '2.4rem');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Texto</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
