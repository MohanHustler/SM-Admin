var fs = require('fs');
const formidable = require('formidable');

const { SMContainerClient } = require('./connection');

const getBlobName = (originalName) => {
  const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
  return `${identifier}-${originalName}`;
};

const uploadAsAzureBlob = async (file) => {
  const blobName = getBlobName(file.name);
  const blockBlobClient = SMContainerClient.getBlockBlobClient(blobName);
  const blockOptions = {
    blobHTTPHeaders: {
      blobContentType: file.type
    },
    blockSize: 2000000
  };

  const uploadBlobResponse = await blockBlobClient.uploadFile(
    file.path,
    blockOptions
  );

  if (uploadBlobResponse.errorCode == undefined) {
    return { url: blockBlobClient.url };
  } else {
    return { url: '' };
  }
};

const uploadFiles = (req, res, next) => {
  const parseFormData = formidable({ multiples: true });
  parseFormData.parse(req, async (err, fields, files) => {
    for (var key in files) {
      const response = await uploadAsAzureBlob(files[key]);
      fields[key] = response.url;
    }
    req.body = fields;
    next();
  });
};

module.exports = {
  uploadFiles
};
