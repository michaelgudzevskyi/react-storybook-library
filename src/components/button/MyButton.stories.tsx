import MyButton from './MyButton';

export default {
    component: MyButton,
    title: 'Button',
};

export const Basic = () => <MyButton onClick={() => alert('alert!')}>button for storybook demo</MyButton>;
