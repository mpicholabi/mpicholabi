import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputComponent } from './input.component';

export default {
  title: 'Component',
  component: InputComponent,
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const base = () => Template.bind({
  label: 'number',
  placeholder: 'amount',
  name: 'amount',
  required: true,
  isEmail: false,
  type: 'text',
  icon: '',
  rules: 'decimal',
  parentForm: 'FormData',
  length: '50',
  isFormControl: true,
  classCustom:
    'w-full h-10 border-solid border-gray-250 pl-2 rounded-5px border',
});
