import Image from "next/image"

interface ROIInterface {
    "times": number,
    "currency": string,
    "percentage": number
}

interface APIInterface {
    "id": string,
    "symbol": string,
    "name": string,
    "image": string,
    "current_price": number,
    "market_cap": number,
    "market_cap_rank": number,
    "fully_diluted_valuation": number,
    "total_volume": number,
    "high_24h": number,
    "low_24h": number,
    "price_change_24h": number,
    "price_change_percentage_24h": number,
    "market_cap_change_24h": number,
    "market_cap_change_percentage_24h": number,
    "circulating_supply": number,
    "total_supply": number,
    "max_supply": number,
    "ath": number,
    "ath_change_percentage": number,
    "ath_date": string,
    "atl": number,
    "atl_change_percentage": number,
    "atl_date": string,
    "roi": ROIInterface,
    "last_updated": string
}

interface CoinAPIInterface {
    data: Array<APIInterface>
}

const TableRow = (data: APIInterface) => {
    return <tr className="border border-black">
        <td className="p-2 text-center align-middle">
            <Image
                src={data.image}
                alt="logo"
                width={30}
                height={30} />
        </td>
        <td className="p-2 text-center align-middle">{data.name}</td>
        <td className="p-2 text-center align-middle">{Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(data.current_price)}</td>
        <td className="p-2 text-center align-middle">{Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(data.market_cap)}</td>
    </tr>
}

const CoinAPI = ({ data }: CoinAPIInterface) => {
    return <div className="m-4">
        <table className="text-black border border-black w-full">
            <thead>
                <tr className="border border-black">
                    <th>Image</th>
                    <th>Name</th>
                    <th>Current Price</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => <TableRow key={item.id} {...item} />)}
            </tbody>
        </table>
    </div>
}

export async function getServerSideProps() {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10`)
    const data = await res.json()
    return { props: { data } }
}

export default CoinAPI