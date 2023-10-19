import React, { ReactNode } from "react";
export type BottomSheetChildProps = {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
};
type BottomSheetProps = {
    children?: ReactNode | ((props: BottomSheetChildProps) => ReactNode);
    rootClassName?: string;
    wrapperClassName?: string;
    lineClassName?: string;
    contentClassName?: string;
    compactHeight?: string;
    fullHeight?: string;
    onClickOutside?: () => void;
    closeOnClickOutside?: boolean;
};
export declare const BottomSheet: React.FC<BottomSheetProps>;
export {};
