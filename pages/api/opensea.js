import axios from 'axios'

const URL = 'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x15a180762B859A072D99d8ef703cDbAf66b5f61c'

export default async function handler(req, res) {
  const openSeaData = await axios.get(URL)
  res.status(200).json(openSeaData.data.assets)
}
