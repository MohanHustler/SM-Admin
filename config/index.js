module.exports = {
  PORT: process.env.PORT || '4000',
  DEV_DB: process.env.DATABASE || 'sm_marketing_admin_app_development',
  DEV_DB_USER_NAME: process.env.DB_USER_NAME || 'sm_admin_user',
  DEV_DB_USER_PASSWORD: process.env.DB_USER_PASSWORD || 'admin@123',
  DEV_DB_HOST: process.env.DB_HOST || 'localhost',
  DEV_DB_DIALECT: process.env.DB_DIALECT || 'postgres',
  AZURE_STORAGE_CONNECTION_STRING:
    process.env.AZURE_STORAGE_CONNECTION_STRING ||
    'BlobEndpoint=https://smcorporatesite.blob.core.windows.net/;QueueEndpoint=https://smcorporatesite.queue.core.windows.net/;FileEndpoint=https://smcorporatesite.file.core.windows.net/;TableEndpoint=https://smcorporatesite.table.core.windows.net/;SharedAccessSignature=sv=2019-12-12&ss=bf&srt=sco&sp=rwdlacx&se=2020-12-23T19:42:14Z&st=2020-07-23T11:42:14Z&spr=https,http&sig=x9Nam34e6lDUnpo4wTSW50AEGvsmuceZmzInD1%2BlPwc%3D',
  AZURE_CONTAINER_NAME: process.env.AZURE_CONTAINER_NAME || 'cmsassets'
};
