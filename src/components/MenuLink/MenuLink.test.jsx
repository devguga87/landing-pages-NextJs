import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../utils/render-theme';

describe('<MenuLink/>', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://google.com">Menu</MenuLink>);
    expect(screen.getByRole('link', { name: 'Menu' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://google.com" newTab={true}>
        Menu
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Menu' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match snapshot', () => {
    renderTheme(
      <MenuLink link="http://google.com" newTab={true}>
        Menu
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Menu' })).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.75rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background-color: #dc143c;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="http://google.com"
        target="_blank"
      >
        Menu
      </a>
    `);
  });
});
