import { Story, Meta } from '@storybook/angular/types-6-0';
import { LoadingComponent } from './loading.component';

export default {
  title: 'Component',
  component: LoadingComponent,
} as Meta;

const Template: Story<LoadingComponent> = (args: LoadingComponent) => ({
  props: args,
});

export const base = Template.bind({
  isLoading: false,
});
