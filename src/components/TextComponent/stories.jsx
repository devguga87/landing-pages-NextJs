import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Expedita ullam nostrum facilis ipsa aut optio doloribus architecto atque natus.
    Autem alias architecto a nam maiores totam! Deserunt qui in aut!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = args => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
