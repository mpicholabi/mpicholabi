import { Story, Meta } from '@storybook/angular/types-6-0';
import { TableComponent } from './table.component';

export default {
  title: 'Component',
  component: TableComponent,
} as Meta;

const Template: Story<TableComponent> = (args: TableComponent) => ({
  props: args,
});

export const base = Template.bind({
  headers: [{ label: 'Titulo', key: 'title' }],
  items: [],
});
