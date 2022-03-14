import { Story, Meta } from '@storybook/angular/types-6-0';
import { NavComponent } from './nav.component';

export default {
  title: 'Nav',
  component: NavComponent,
} as Meta;

const Template: Story<NavComponent> = (args: NavComponent) => ({
  props: args,
});

export const base = Template.bind({});
