import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface DropzoneProps {
    onFileSelect: (file: File) => void;
}

export default function Dropzone({ onFileSelect }: DropzoneProps) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            onFileSelect(acceptedFiles[0]); 
        }
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div 
            {...getRootProps()} 
            className="w-full h-32 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 cursor-pointer hover:border-blue-500 transition rounded-lg"
        >
            <input {...getInputProps()} />
            {isDragActive ? <p>Drop the file here...</p> : <p>Drag & drop a file, or click to select one</p>}
        </div>
    );
}
