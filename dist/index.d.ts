import React from "react";
type BottomSheetProps = {
    children?: React.ReactNode | (({ isOpen, setOpen }: {
        isOpen: boolean;
        setOpen: (isOpen: boolean) => void;
    }) => React.JSX.Element);
    className?: string;
    autoHeight?: boolean;
    compactHeight?: string;
    fullHeight?: string;
};
export declare const BottomSheet: React.FC<React.PropsWithChildren<BottomSheetProps>>;
export {};
