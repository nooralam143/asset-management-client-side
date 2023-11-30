import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import moment from 'moment';
import useAssetList from '../../Hooks/useAssetList';

const AssetList = () => {
    const { myAllAssets } = useAssetList();
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (myAllAssets.length > 0) {
          const formattedData = myAllAssets.map((item) => ({
            ...item,
            dateAdded: moment(item.PublishDateString).format('MM/DD/YYYY, hh:mm:ss A'),
          }));
          setFilteredData(formattedData);
          setLoading(false);
        }
      }, [myAllAssets]);

  // Define columns for the table
  const columns = [
    {
      name: 'Product Name',
      selector: 'productName',
      sortable: true,
    },
    {
      name: 'Product Type',
      selector: 'productType',
      sortable: true,
    },
    {
      name: 'Product Quantity',
      selector: 'productQuantity',
      sortable: true,
    },
    {
      name: 'Date Added',
      selector: 'dateAdded',
      sortable: true,
    },
    {
      name: 'Update',
      cell: (row) => <button className="rounded p-2 bg-blue-500 text-white mr-2" onClick={() => handleUpdate(row)}>Update</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: 'Delete',
      cell: (row) => <button className="rounded p-2 bg-red-500 text-white" onClick={() => handleDelete(row)}>Delete</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  // Format the data to include the 'dateAdded' field
  const formattedData = myAllAssets.map((item) => ({
    ...item,
    dateAdded: moment(item.PublishDateString).format('MM/DD/YYYY, hh:mm:ss A'),
  }));

  // Define the update and delete handlers
  const handleUpdate = (row) => {
    // Implement your update logic here
    console.log('Update:', row);
  };

  const handleDelete = (row) => {
    // Implement your delete logic here
    console.log('Delete:', row);
  };

  // Define custom styles
  const customStyles = {
    rows: {
      style: {
        minHeight: '56px', // Override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // Header cell padding
        paddingRight: '8px',
        backgroundColor: '#BE185D', // Header background color
        color: 'white',
      },
    },
  };

  // Handle search functionality
  const handleSearch = (searchText) => {
    const filtered = formattedData.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Handle filter functionality
  const handleFilter = (type, value) => {
    const filtered = formattedData.filter((item) => {
      if (type === 'stockStatus') {
        // Implement your logic based on stock status
        return true;
      } else if (type === 'assetType') {
        return item.productType.toLowerCase() === value.toLowerCase();
      }
      return true;
    });
    setFilteredData(filtered);
  };

  // Handle sorting functionality
  const handleSort = (column, direction) => {
    // Implement your sorting logic here
    console.log('Sort:', column, direction);
  };

  return (

<div>
      {loading ? (
        <p>Loading...</p>
      )
      : 
      ( <>
      {/* Search Section */}
      <input
        type="text"
        placeholder="Search by product name"
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* Filter Section */}
      <div>
  <label>Stock Status:</label>
  <select onChange={(e) => handleFilter('stockStatus', e.target.value)}>
    <option value="">All</option>
    <option value="available">Available</option>
    <option value="out-of-stock">Out of Stock</option>
  </select>

  <label>Asset Type:</label>
  <select onChange={(e) => handleFilter('assetType', e.target.value)}>
    <option value="">All</option>
    <option value="returnable">Returnable</option>
    <option value="non-returnable">Non-returnable</option>
  </select>
</div>

      {/* Sorting Section */}
      <div>
        <label>Sort by Quantity:</label>
        {/* Implement your quantity sort dropdown here */}
      </div>

      {/* DataTable */}
      <DataTable
        title="Product List"
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        customStyles={customStyles}
        onSort={(column, direction) => handleSort(column, direction)}
      />
      </>
      )}
    </div>
    
  );
};

export default AssetList;
