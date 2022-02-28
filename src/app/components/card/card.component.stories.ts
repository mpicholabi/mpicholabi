import { Story, Meta } from '@storybook/angular/types-6-0';
import { CardComponent } from './card.component';

export default {
  title: 'Card',
  component: CardComponent,
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const base = Template.bind({
  imagen: 'https://th.bing.com/th/id/OIP.xWj6UEyANz7ZBdW23pSt2wHaHa?pid=ImgDet&rs=1',
  description: 'Logo banco industrial',
});
