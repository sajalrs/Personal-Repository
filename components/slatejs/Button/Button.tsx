
import React, { PropsWithChildren, Ref } from "react";
import { BaseProps } from "../BaseProps";
import buttonStyles from "./Button.module.scss";
export const Button = React.forwardRef(
    (
        {
            className,
            active,
            reversed,
            ...props
        }: PropsWithChildren<
            {
                active: boolean
                reversed: boolean
            } & BaseProps
        >,
        ref: Ref<HTMLSpanElement>
    ) => (
        <span
            {...props}
            ref={ref}
            className={`${active && buttonStyles["active"]} ${reversed && buttonStyles["reversed"]}`}
        />
    )
)
