import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputQuoterComponent } from './input-quoter.component';

export default {
  title: 'InputQuoterComponent',
  component: InputQuoterComponent,
} as Meta;

const Template: Story<InputQuoterComponent> = (args: InputQuoterComponent) => ({
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
