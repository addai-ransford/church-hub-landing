import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalWrapperProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  className?: string; 
  backdropClassName?: string;
}

export const PortalWrapper = ({
  isOpen,
  onClose,
  children,
  className = "",
  backdropClassName = "fixed inset-0 bg-black/70",
}: PortalWrapperProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center ${className}`}>
      {onClose && (
        <div
          className={backdropClassName}
          onClick={onClose}
        />
      )}

      <div onClick={(e) => e.stopPropagation()} className="relative z-10">
        {children}
      </div>
    </div>,
    document.body
  );
};
