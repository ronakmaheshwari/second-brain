import { useState } from "react";
import axios from "axios";
import CrossIcon from "./CrossIcon";

import Dropzone from "./Dropzone";
import { toast } from "react-toastify";
import InputBox from "./Inputbox";

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

const allowedTypes = [
    "image", "document", "video", "audio", "application", "text", "code", "tweet", "link"
];

export default function CreateModal({ open, onClose }: ModalProps) {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [selectedType, setSelectedType] = useState<string>("text");
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    if (!open) return null;

    const handleSubmit = async () => {
        if (!title.trim()) return toast.error("Title is required!");
        if ((selectedType === "tweet" || selectedType === "link") && !link.trim()) {
            return toast.error("A valid link is required!");
        }

        setLoading(true);

        try {
            // let fileUrl = link || null;
            const formData = new FormData();

            if (file) {
                formData.append("file", file);
            }
            formData.append("title", title);
            formData.append("type", selectedType);

            const token = localStorage.getItem("token");

            const response = await axios.post(
                "http://localhost:3000/api/v1/content/",
                formData,
                {
                    headers: {
                        Authorization: token ? `Bearer ${token}` : "",
                        "Content-Type": file ? "multipart/form-data" : "application/json"
                    }
                }
            );

            toast.success("Uploaded successfully!");
            console.log("Upload Success:", response.data);

            setTitle("");
            setLink("");
            setFile(null);
            onClose();
        } catch (error) {
            console.error("Upload error:", error);
            toast.error("Failed to upload! Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="relative bg-white rounded-lg shadow-xl w-[500px] p-6 flex flex-col gap-4">
                
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                    <CrossIcon />
                </button>

                <h2 className="text-lg font-semibold text-center">Add New Content</h2>

                <InputBox 
                    label="Title" 
                    value={title} 
                    placeholder="Enter title" 
                    onChange={(e) => setTitle(e.target.value)} 
                />

                {(selectedType === "tweet" || selectedType === "link") && (
                    <InputBox 
                        label="Link" 
                        value={link} 
                        placeholder="Enter URL" 
                        onChange={(e) => setLink(e.target.value)} 
                    />
                )}

                <div className="flex flex-wrap gap-2">
                    {allowedTypes.map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input 
                                type="radio" 
                                name="contentType" 
                                value={type} 
                                checked={selectedType === type} 
                                onChange={() => setSelectedType(type)} 
                                className="hidden"
                            />
                            <span className={`px-3 py-1 rounded-full text-sm border transition ${
                                selectedType === type ? "bg-blue-500 text-white" : "border-gray-400 text-gray-700"
                            }`}>
                                {type}
                            </span>
                        </label>
                    ))}
                </div>

                {(selectedType === "image" || selectedType === "video" || selectedType === "audio" || selectedType === "document" || selectedType === "code") && (
                    <Dropzone onFileSelect={(file) => setFile(file)} />
                )}

                <button 
                    onClick={handleSubmit} 
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Uploading..." : "Submit"}
                </button>
            </div>
        </div>
    );
}
