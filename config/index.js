export const config = {
  env: "local",
  LOCAL_API_URL: "localhost:3000",
  API_URL: "https://rarity-score-lac.vercel.app/",
  COLLECTION_NAME: "Lilverse",
  COLLECTION_TITLE: "lilverse",
  COLLECTION_DESCRIPTION: 'The Internet needs a new hero. This is why decided to create these little, funny, memeable and cute characters called "lils".',
  COLLECTION_IMG_LINK: "https://openseauserdata.com/files/0a8d2089ff0612fa9964f98c440300cd.png",
  CONTRACT: {
    // if you're not sure, set CONTRACT: {}, will remove opensea link
    CHAIN: "ethereum", //possible values of ethereum, matic (polygin), klatyn, solana
    ADDRESS: "0x8e0f07454850198f089ef10d083601a2a1644656", //note: for solana these values change, so currently not supported
  },
  WEIGHTS: {},
};
