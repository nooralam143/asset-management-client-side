import React, { useState } from 'react';
import { Button, Card, Modal } from 'flowbite-react';
import DataTable from 'react-data-table-component';
import useAssetRequest from '../../../../Hooks/useAssetRequest';


const CustomeRequestList = () => {
  const { myRequestAsset } = useAssetRequest();
  const [searchTerm, setSearchTerm] = useState('');
  const [requestStatusFilter, setRequestStatusFilter] = useState('');
  const [assetTypeFilter, setAssetTypeFilter] = useState('');
  const [selectedAsset, setSelectedAsset] = useState(null); // Track the selected asset for the modal
  const [isEditMode, setIsEditMode] = useState(false);

  // Filter assets based on asset name
  const filteredData = myRequestAsset
    .filter((item) => item.assetName.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((item) => (requestStatusFilter ? item.requestStatus === requestStatusFilter : true))
    .filter((item) => (assetTypeFilter ? item.assetType === assetTypeFilter : true));

  // Sort filtered data based on assetRequestDateString in descending order
  const sortedData = filteredData.sort(
    (a, b) => new Date(b.assetRequestDateString) - new Date(a.assetRequestDateString)
  );

  const openModal = (asset) => {
    console.log('Opening modal for:', asset);
    setSelectedAsset(asset);
    setIsEditMode(false);
  };

  const openEditMode = () => {
    setIsEditMode(true);
  };

  const closeModal = () => {
    setSelectedAsset(null);
    setIsEditMode(false);
  };

  const handleViewDetails = (asset) => {
    openModal(asset);
  };

  const handleUpdate = () => {
    openEditMode();
  };

  const handleSave = () => {
    console.log('Save button clicked');
    setIsEditMode(false);
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
    setIsEditMode(false);
  };

  const columns = [
    {
      name: 'Serial',
      selector: 'id',
      sortable: true,
    },
    { name: 'Asset Name', selector: (row) => row.assetName, sortable: true },
    { name: 'Asset Price', selector: (row) => row.price, sortable: true },
    { name: 'Asset Type', selector: (row) => row.assetType, sortable: true },
    { name: 'Request Status', selector: (row) => row.requestStatus, sortable: true },
    {
      name: 'Action',
      cell: (row) => (
        <button
          onClick={() => handleViewDetails(row)} // Use handleViewDetails instead of setOpenModal
          className="rounded p-2 bg-red-500 text-white"
        >
          View Details
        </button>
      ),
    },
  ];

  const data = sortedData.map((item, index) => ({ ...item, id: index + 1 }));

  const customStyles = {
    rows: {
      style: {
        minHeight: '56px',
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
        backgroundColor: '#BE185D',
        color: 'white',
      },
    },
  };

  return (
    <div>
      <DataTable
        title="My Request Assets:"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        customRowNumber={(start, rowsPerPage, dataIndex) => dataIndex + 1}
        customStyles={customStyles}
      />
      {selectedAsset && (
        <Modal show={openModal} size="2xl" onClose={() => closeModal()} popup>
          <Modal.Header>My Custome Request</Modal.Header>
          <Modal.Body>
          <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl mt-4">
      <img className="w-full h-48 object-cover" src={selectedAsset.assetImage} alt={selectedAsset.assetName} />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{selectedAsset.assetName}</div>
        <p className="text-gray-700 text-base mb-2">Price: {selectedAsset.price}</p>
        <p className="text-gray-700 text-base mb-2">Type: {selectedAsset.assetType}</p>
        <p className="text-gray-700 text-base mb-2">Why Needed: {selectedAsset.whyNeedAsset}</p>
        <p className="text-gray-700 text-base mb-2">Additional Information: {selectedAsset.additionalInformation}</p>
        <p className="text-gray-700 text-base mb-2">Request Date: {selectedAsset.assetRequestDateString}</p>
        <p className="text-gray-700 text-base mb-2">Status: {selectedAsset.requestStatus}</p>
      </div>
    </div>
            

            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => closeModal()}>Update</Button>
            <Button color="gray" onClick={() => closeModal()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default CustomeRequestList;
