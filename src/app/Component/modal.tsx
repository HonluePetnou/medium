// Code:
import React from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {  return; }
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg w-1/2">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 text-2xl">&times;</button>
                {children}
            </div>
        </div>  
        
    );
};
