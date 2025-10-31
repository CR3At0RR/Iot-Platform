'use client'
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next"); // Attach modal to the Next.js root

type AddDeviceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddDevice: (device: { name: string; customer: string }) => void;
};
const AddDeviceModal: React.FC<AddDeviceModalProps> = ({ isOpen, onClose, onAddDevice }) => {
  const [name, setName] = useState("");
  const [customer, setCustomer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddDevice({ name, customer });
    setName("");
    setCustomer("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Device Modal"
      className="bg-white p-6 rounded-lg max-w-md mx-auto"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
    >
      <h2 className="text-xl font-bold mb-4">Add Device</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Device Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
          />
        </div>
        <div>
          <label htmlFor="customer" className="block text-sm font-medium text-gray-700">
            Customer:
          </label>
          <input
            id="customer"
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Add Device
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddDeviceModal;
