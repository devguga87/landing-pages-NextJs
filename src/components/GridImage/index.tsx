import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { SectionBackground } from '../SectionBackground';

export type GridImageElementProps = {
  srcImg: string;
  altText: string;
};

export type GridImageProps = {
  title: string;
  description: string;
  background?: boolean;
  grid: GridImageElementProps[];
  sectionId?: string;
  component?: string;
};

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase as="h2" colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map(element => {
            return (
              <Styled.GridElement key={element.altText}>
                <Styled.Image src={element.srcImg} alt={element.altText} />
              </Styled.GridElement>
            );
          })}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
