import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridTextElementProps = {
  title: string;
  description: string;
};

export type GridTextProps = {
  background?: boolean;
  title: string;
  description: string;
  grid: GridTextElementProps[];
  sectionId?: string;
  component?: string;
};

export const GridText = ({
  title,
  grid,
  description,
  background = false,
  sectionId = '',
}: GridTextProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map(element => {
            return (
              <Styled.GridElement key={element.title}>
                <Heading size="medium" colorDark={!background} as="h3">
                  {element.title}
                </Heading>
                <TextComponent>{element.description}</TextComponent>
              </Styled.GridElement>
            );
          })}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
