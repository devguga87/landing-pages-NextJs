import { screen } from '@testing-library/react';
import { SectionContainer } from '.';
import { renderTheme } from '../../utils/render-theme';

describe('<SectionContainer/>', () => {
  it('should render <SectionContainer />', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
