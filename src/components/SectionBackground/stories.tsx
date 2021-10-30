import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground, SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          consequuntur perferendis reprehenderit doloribus ex omnis, et dolores
          eaque beatae quibusdam blanditiis hic non vitae accusamus quam autem
          iusto magnam!
        </p>
      </div>
    ),
    background: false,
  },
  argTypes: {
    children: { type: '' },
  },
} as Meta;

export const Template: Story<SectionBackgroundProps> = args => (
  <SectionBackground {...args} />
);
