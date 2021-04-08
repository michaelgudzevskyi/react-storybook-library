// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button, { ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    decorators: [withKnobs],
} as Meta;

const Template: Story<ButtonProps> = args => (
    <Button {...args} disabled={boolean('Disabled', false)}>
        {text('Label', 'Hello Storybook')}
    </Button>
);

export const Default = Template.bind({});
Default.args = {
    children: 'Default Button',
};
