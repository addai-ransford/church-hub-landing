import { PortalWrapper } from "../PortalWrapper";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <PortalWrapper
      isOpen={isOpen}
      onClose={onClose}
      className="justify-end"
      backdropClassName="fixed inset-0 bg-black/50"
    >
      <div className="w-full max-w-md h-full bg-slate-900 p-8">
        <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
        <p className="text-slate-400 mb-6">
          Enterprise & custom deployments handled directly by our team.
        </p>
        <button
          onClick={onClose}
          className="mt-auto w-full bg-fuchsia-600 py-3 rounded-xl text-white font-semibold"
        >
          Close
        </button>
      </div>
    </PortalWrapper>
  );
};
