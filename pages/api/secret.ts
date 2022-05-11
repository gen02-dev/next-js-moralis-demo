import Moralis from "moralis/node";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    try {
      // Initialize Moralis
      await Moralis.start({
        appId: process.env.MORALIS_APP_ID,
        serverUrl: process.env.MORALIS_SERVER_URL,
        masterKey: process.env.MORALIS_MASTER_KEY,
      });

      // Query Session From DB
      const query = new Moralis.Query("_Session");
      const { sessionToken } = req.body;
      query.include("user");
      query.equalTo("sessionToken", sessionToken);
      query.limit(1);
      const result = await query.find({ useMasterKey: true });

      // Check whether user own certain NFT on MATIC
      if (result.length > 0) {
        const _address = result[0].get("user").get("accounts")[0];
        const CONTRACT_ADDRESS = "0x25ed58c027921E14D86380eA2646E3a1B5C55A8b";
        const NFTs = await Moralis.Web3API.token.getNFTOwners({
          address: CONTRACT_ADDRESS,
          chain: "eth",
        });

        // @ts-ignore
        const NFTFound = NFTs?.result.find((nft) => nft.owner_of === _address);

        // If no NFT found, then return empty array for `NFTdata`
        res.status(200).json({
          NFTFound: Boolean(NFTFound),
          user: _address,
          message: "This is the secret Message",
        });
      } else {
        res.status(404).json({});
      }
    } catch (error) {
      res.status(404).json({ error });
    }
  } else {
    res.status(404).json({});
  }
}
