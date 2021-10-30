import * as Styled from './styles';
import Link from 'next/link';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
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
