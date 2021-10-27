import { SectionContainer } from '.';

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
};

export const Template = args => <SectionContainer {...args} />;
