import { Story, Meta } from '@storybook/angular/types-6-0';
import { RequirementFeatureComponent } from './requirement-feature.component'

export default {
  title: 'Card',
  component: RequirementFeatureComponent,
} as Meta;

const Template: Story<RequirementFeatureComponent> = (args: RequirementFeatureComponent) => ({
  props: args,
});

export const base = Template.bind({
  imagen: 'https://th.bing.com/th/id/OIP.xWj6UEyANz7ZBdW23pSt2wHaHa?pid=ImgDet&rs=1',
  title: 'Logo',
  description: 'Logotipo del banco industrial'
});
