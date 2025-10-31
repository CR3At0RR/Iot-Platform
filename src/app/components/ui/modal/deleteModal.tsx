// components/ui/modal/ConfirmDeleteModal.tsx
import React from 'react';
import Modal from 'react-modal';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName?: string;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ isOpen, onClose, onConfirm, itemName }) => {
  if (typeof window !== 'undefined') {
    Modal.setAppElement('#__next');
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Confirmation"
      className="bg-white p-6 rounded-lg max-w-sm mx-auto shadow-lg"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
    >
      <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
      <p className="text-sm text-gray-700 mb-6">
        Are you sure you want to delete <strong>{itemName}</strong>?
      </p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
