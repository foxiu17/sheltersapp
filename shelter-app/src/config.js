export const config = {
  appName: process.env.REACT_APP_PAGE_TITLE,
  version: process.env.REACT_APP_VERSION,
  lang: process.env.REACT_APP_LANG || "pl-PL",
  googleApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
  cloudPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
  // client: process.env.REACT_APP_APOLLO_CLIENT
};
export default config;
