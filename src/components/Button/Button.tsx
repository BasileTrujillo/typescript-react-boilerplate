import React, {ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;

    /**
     * Simple click handler
     */
    onClick?: () => void;
};

/**
 * The world's most _basic_ button
 */
export const Button = (props: ButtonProps) => (
    <button onClick={props.onClick} type="button">
        {props.children}
    </button>
);

Button.defaultProps = {
    onClick: () => {}
};