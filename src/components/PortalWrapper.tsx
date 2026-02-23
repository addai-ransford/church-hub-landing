// import type { ReactNode } from "react";
// import { createPortal } from "react-dom";

// interface PortalWrapperProps {
//   isOpen: boolean;
//   onClose?: () => void;
//   children: ReactNode;
//   className?: string; 
//   backdropClassName?: string;
// }

// export const PortalWrapper = ({
//   isOpen,
//   onClose,
//   children,
//   className = "",
//   backdropClassName = "fixed inset-0 bg-black/70",
// }: PortalWrapperProps) => {
//   if (!isOpen) return null;

//   return createPortal(
//     <div className={`fixed inset-0 z-[9999] flex items-center justify-center ${className}`}>
//       {onClose && (
//         <div
//           className={backdropClassName}
//           onClick={onClose}
//         />
//       )}

//       <div onClick={(e) => e.stopPropagation()} className="relative z-10">
//         {children}
//       </div>
//     </div>,
//     document.body
//   );
// };
import { useEffect } from "react";
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
  children,
  className = "",
  backdropClassName = "fixed inset-0 bg-black/70",
}: PortalWrapperProps) => {

  // 🚫 Disable ESC closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return createPortal(
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 ${className}`}>
      <div className={backdropClassName} />

      <div onClick={(e) => e.stopPropagation()} className="relative z-10">
        {children}
      </div>
    </div>,
    document.body
  );
};
