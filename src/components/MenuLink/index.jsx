import * as Styled from './styles';
import P from 'prop-types';
import Link from 'next/link';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Styled.Link href={link} target={target}>
          {children}
        </Styled.Link>
      </Link>
    );
  }

  return (
    <Styled.Link href={link} target={target}>
      {children}
    </Styled.Link>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
