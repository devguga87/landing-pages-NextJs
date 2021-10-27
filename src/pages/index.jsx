import Head from 'next/head';

import styled, { css } from 'styled-components';

export const Heading = styled.h1`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
  `};
`;

export default function Home() {
  return <Heading>Oi</Heading>;
}
