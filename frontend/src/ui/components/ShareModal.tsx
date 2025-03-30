import CrossIcon from "./CrossIcon";

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

export default function ShareModal({open,onClose}:ModalProps){

    if (!open) return null;

    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="relative bg-white rounded-lg shadow-xl w-[500px] p-6 flex flex-col gap-4">
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    >
                    <CrossIcon />
                </button>
            </div>
        </div>
    )
}