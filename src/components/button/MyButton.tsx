import { FC, MouseEventHandler } from 'react';

const MyButton: FC<{ onClick?: MouseEventHandler<HTMLButtonElement> }> = ({ children, onClick }) => (
    <button style={{ color: 'red' }} type="button" onClick={onClick}>
        {children}
    </button>
);

export default MyButton;
