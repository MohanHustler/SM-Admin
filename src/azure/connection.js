const { BlobServiceClient } = require('@azure/storage-blob');

const config = require('../../config/');

const SMBlobServiceClient = BlobServiceClient.fromConnectionString(
  config.AZURE_STORAGE_CONNECTION_STRING
);

// Get a reference to a container
const SMContainerClient = SMBlobServiceClient.getContainerClient(
  config.AZURE_CONTAINER_NAME
);

module.exports = {
  SMContainerClient
};
