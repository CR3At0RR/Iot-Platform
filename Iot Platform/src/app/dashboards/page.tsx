'use client'
import React, { useState } from 'react';
import Table from '../components/ui/table';
import { useRouter } from 'next/navigation';
import ConfirmDeleteModal from '../components/ui/modal/deleteModal';

const columns = [
  { key: 'createdTime', label: 'Created Time' },
  { key: 'name', label: 'Name' },
  { key: 'customerName', label: 'Customer Name' },
];

const initialData = [
  { createdTime: '2022-01-01', name: 'Dashboard 1', customerName: 'Customer 1', dashboardId: 'c1' },
  { createdTime: '2022-01-01', name: 'Dashboard 2', customerName: 'Customer 1', dashboardId: 'c2' },
  // ... more data
];

const Users: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const router = useRouter();

  const handleAdd = () => {
    // Handle adding new item
    console.log('Adding new item');
  };

  const handleEdit = (row: any) => {
    // Handle editing item
    console.log('Editing item:', row);
  };

  const handleDelete = (row: any) => {
    setSelectedRow(row);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setData(data.filter((item) => item !== selectedRow));
    setDeleteModalOpen(false);
    setSelectedRow(null);
  };

  const openDashboard = (row: any) => {
    // Convert the row data to URL-safe query parameters
    const queryParams = new URLSearchParams();
    Object.entries(row).forEach(([key, value]) => {
      queryParams.append(key, value as string);
    });
    
    // Navigate to the dashboard view with query parameters
    router.push(`/dashboards/viewDashboard?${queryParams.toString()}`);
  };

  return (
    <>
    <Table
      data={data}
      columns={columns}
      pageSize={15}
      searchable={true}
      sortable={true}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onOpen={openDashboard}
    />
    <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        itemName={selectedRow?.name}
      />
    </>
  );
};

export default Users;