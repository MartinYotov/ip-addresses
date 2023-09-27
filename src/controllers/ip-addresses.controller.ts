import { Request, Response } from 'express';
import { createIpAddress, deleteIpAddress, getCachedIpAddress } from '../services/ip-addresses.service';
import { fetchIpAddressData } from '../services/http.service';
import { IIpAddress, IIpAddressData } from '../data-types';

const getIpAddressHandler = async (req: Request, res: Response): Promise<Response<IIpAddress | Error>> => {
    const { address } = req.params;

    const existingIpAddress = await getCachedIpAddress(address);

    if (existingIpAddress) {
        return res.status(200).json(existingIpAddress);
    } else {
        let ipData: IIpAddressData;
        try {
            ipData = await fetchIpAddressData(address);
        } catch (error) {
            return res.status(400).send(error);
        }

        const ipAddress = await createIpAddress(ipData);
        return res.status(201).json(ipAddress);
    }
};

const deleteIpAddressHandler = async (req: Request, res: Response): Promise<Response<void>> => {
    const { address } = req.params;

    await deleteIpAddress(address);

    return res.status(204).send();
}


export { getIpAddressHandler, deleteIpAddressHandler }