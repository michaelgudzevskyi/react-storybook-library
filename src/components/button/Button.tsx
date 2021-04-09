import React, { ElementType, MouseEventHandler, ReactNode } from 'react';

export type ButtonType = 'default' | 'danger' | 'ghost' | 'secondary';

interface BaseButtonProps {
    type?: ButtonType;
    size?: 'default';
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
}

type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;

/**
 * If href is supplied, button becomes an anchor link
 */
type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;

/**
 * If `as` is supplied, button becomes a custom html node specified in `as`
 */
type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseButtonProps;

export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = props => {
    const { size = 'default', className, children, disabled = false, loading, onClick } = props;

    const styles = {
        size,
        disabled,
        withText: children != null,
    };

    return (
        <button type="button" onClick={onClick} className={className} {...styles}>
            {loading ? <>Loading</> : children}
        </button>
    );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
