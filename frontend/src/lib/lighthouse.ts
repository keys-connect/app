import lighthouse from "@lighthouse-web3/sdk";

const apiKey = process.env.LIGHTHOUSE_API_KEY!;

if (!apiKey) {
  throw new Error("No Lighthouse API Key found");
}

export const uploadFile = async (file: FileList) => {
  return lighthouse.upload(file, apiKey, false);
};

export const getUploads = () => {
  return lighthouse.getUploads(apiKey);
};
