import axios from 'axios'

const URL = 'https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=frenzy-fox&include_orders=false'

export default async function handler(req, res) {
  const openSeaData = await axios.get(URL)
  res.status(200).json(openSeaData.data.assets)
}
