import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import useAssetRequest from '../../Hooks/useAssetRequest';

const MyAssets = () => {
  const { myRequestAsset } = useAssetRequest();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter assets based on asset name
  const filteredData = myRequestAsset.filter(item =>
    item.assetName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort filtered data based on assetRequestDateString in descending order
  const sortedData = filteredData.sort(
    (a, b) => new Date(b.assetRequestDateString) - new Date(a.assetRequestDateString)
  );

  const columns = [
    {
      name: 'Serial',
      selector: 'id',
      sortable: true,
    },
    { name: 'Asset Name', selector: 'assetName', sortable: true },
    { name: 'Requested by', selector: 'requestUser', sortable: true },
    { name: 'Price', selector: 'price', sortable: true },
    { name: 'Asset Type', selector: 'assetType', sortable: true },
    {
      name: 'Image',
      selector: 'assetImage',
      sortable: false,
      cell: row => <img src={row.assetImage} alt="Asset" style={{ maxWidth: '100px' }} />,
    },
    { name: 'Why Needed', selector: 'whyNeedAsset', sortable: true },
    { name: 'Status', selector: 'requestStatus', sortable: true },
    { name: 'Requested Date', selector: 'assetRequestDateString', sortable: true },
  ];

  // Add serial numbers to the data
  const data = sortedData.map((item, index) => ({ ...item, id: index + 1 }));

  // Customize styles
  const customStyles = {
    rows: {
      style: {
        minHeight: '56px', // Override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // Adjust header cell padding
        paddingRight: '8px',
        backgroundColor: '#BE185D', // Change header background color
        color: 'white',
      },
    },
  };
const handleSearch = () => {
    
}
  return (
    <div className="request-table">
      {/* Add search bar */}
     <div className='flex justify-center items-center my-3'>
     <input
        className='w-2/4 border rounded p-3 flex justify-center items-center'
        type="text"
        placeholder="Search by asset name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> <button
      className="rounded p-3 bg-[#91C840] text-white space"
      onClick={handleSearch}
    >
      Search
    </button>
     </div>

      {filteredData.length === 0 ? (
        <p>No assets found</p>
      ) : (
        <DataTable
          title="Latest Asset Requests"
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          customRowNumber={(start, rowsPerPage, dataIndex) => dataIndex + 1}
          customStyles={customStyles}
        />
      )}
    </div>
  );
};

export default MyAssets;
