import React, { ElementType, MouseEventHandler, ReactNode } from 'react';
export declare type ButtonType = 'default' | 'danger' | 'ghost' | 'secondary';
interface BaseButtonProps {
    type?: ButtonType;
    size?: 'default';
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
}
declare type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;
declare type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;
declare type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseButtonProps;
export declare type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;
declare const _default: React.ForwardRefExoticComponent<{
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
} & BaseButtonProps & {
    href?: string | undefined;
} & {
    as?: React.ElementType<any> | undefined;
    to?: string | undefined;
} & React.RefAttributes<unknown>>;
export default _default;
