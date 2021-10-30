import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          consequuntur perferendis reprehenderit doloribus ex omnis, et dolores
          eaque beatae quibusdam blanditiis hic non vitae accusamus quam autem
          iusto magnam!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
} as Meta;

export const Template: Story<SectionContainerProps> = args => (
  <SectionContainer {...args} />
);
