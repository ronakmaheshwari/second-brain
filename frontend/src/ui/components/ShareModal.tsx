import { useState } from "react";
import CrossIcon from "./CrossIcon";
import axios from "axios";
import { Backend_Url } from "../../config";

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

export default function ShareModal({ open, onClose }: ModalProps) {
    const [link, setLink] = useState("");
    const [showBox, setShowBox] = useState(false);

    const handleShare = async (share: boolean) => {
        try {
            const token = localStorage.getItem("token"); // Get token inside function
            const response = await axios.post(
                `${Backend_Url}/brain/share`,
                { share },
                {
                    headers: {
                        Authorization: token ? `Bearer ${token}` : "",
                    },
                }
            );

            if (response.status === 200) {
                setLink(response.data.link);
                setShowBox(share); // Show box only when sharing is enabled
            }
        } catch (error) {
            console.error("Internal Error", error);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`http://localhost:5173/share/${link}`);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="relative bg-white rounded-lg shadow-xl w-[500px] p-6 flex flex-col gap-4">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                    <CrossIcon />
                </button>

                {/* Modal Title */}
                <h2 className="text-xl font-bold text-center">Share Your Brain</h2>

                {/* Link Box */}
                {showBox && (
                    <div className="flex items-center justify-between w-full p-3 bg-gray-100 border border-gray-300 rounded-md text-gray-800 font-medium">
                        <span className="truncate select-all">{`http://localhost:5173/share/${link}`}</span>
                        <button
                            onClick={copyToClipboard}
                            className="ml-2 text-sm text-blue-600 hover:underline"
                        >
                            Copy
                        </button>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                    <button
                        onClick={() => handleShare(true)}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Enable Sharing
                    </button>
                    <button
                        onClick={() => handleShare(false)}
                        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
                    >
                        Disable Sharing
                    </button>
                </div>
            </div>
        </div>
    );
}
