import React, { useState } from "react";
import cx from "classnames";
import { motion, PanInfo, useMotionValue } from "framer-motion";
import useDetectKeyboardOpen from "use-detect-keyboard-open";

// import s from './styles.module.css';

type BottomSheetProps = {
  children?:
    | React.ReactNode
    | (({ isOpen, setOpen }: { isOpen: boolean; setOpen: (isOpen: boolean) => void }) => React.JSX.Element);
  className?: string;
  autoHeight?: boolean;
  compactHeight?: string;
  fullHeight?: string;
};

export const BottomSheet: React.FC<React.PropsWithChildren<BottomSheetProps>> = ({
  children,
  className,
  compactHeight = "20vh",
  fullHeight = "90vh",
}) => {
  const [height, setHeight] = useState<string>(compactHeight);
  const [isOpen, setOpen] = useState<boolean>(false);
  const y = useMotionValue(0);

  const isKeyboardOpen = useDetectKeyboardOpen();

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setHeight(info.offset.y < 0 ? fullHeight : compactHeight);
    setOpen(info.offset.y < 0);
  };

  const Children = typeof children === "function" ? children({ isOpen, setOpen }) : React.Children.only(children);

  if (!children) return null;

  return (
    <motion.div
      drag="y"
      // className={cx(s.root, className, isKeyboardOpen && s.keyboardOpen)}
      style={{
        height: height,
        y,
      }}
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
    >
      {Children}
    </motion.div>
  );
};

