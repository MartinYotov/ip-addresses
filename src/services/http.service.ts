import { IIpAddressData } from "../data-types";
import fetch from 'node-fetch';

const IP_WHO_URL = 'https://ipwho.is';

const fetchIpAddressData = async (address: string): Promise<IIpAddressData> => {
    const response = await fetch(`${IP_WHO_URL}/${address}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const ipData: IIpAddressData = await response.json() as IIpAddressData;
    if (!ipData.success) {
        throw new Error(ipData!.message);
    }

    return ipData;
}

export {
    fetchIpAddressData
}