import React from 'react';
import { ipfs2http } from '../util';

export const NFT = (nft) => {
  return (
    <>
      <a
        className="mb-6 text-left w-24
        cursor-pointer rounded-md shadow-xs hover:shadow-md
        bg-white mr-4 hover:underline"
        href={`/${nft.id}`}
      >
        <img
          src={`https://ipfs.io/ipfs/${ipfs2http(nft.image)}`}
          className="rounded-t-md px-2 h-auto bg-black" />
        <div className="rounded-b-md py-2 px-2">
          <h3 className="text-xs text-gray-600">#{nft.id}</h3>
        </div>
      </a>
    </>
  );
}
