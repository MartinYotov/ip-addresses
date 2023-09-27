import { Op } from "sequelize";
import IPAddresses from "../models/ip-address.model";
import { IIpAddress, IIpAddressData } from "../data-types";

const getCurrentThreshold = (): Date => new Date(new Date().getTime() - 60000);

const getCachedIpAddress = async (address: string): Promise<IIpAddress | null> => {
    const ipAddress = await IPAddresses.findOne({
        where: {
            ip: address,
            createdAt: {
                [Op.gte]: getCurrentThreshold()
            }
        }
    });

    return ipAddress;
};

const createIpAddress = async (ipData: IIpAddressData): Promise<IIpAddress> => {
    const ipAddress = await IPAddresses.create({
        ...ipData,
        createdAt: new Date()
    });

    return ipAddress;
};

const deleteIpAddress = async (address: string): Promise<void> => {
    await IPAddresses.destroy({
        where: {
            ip: address,
        }
    });
};

const deleteExpiredIpAddresses = async (): Promise<void> => {
    await IPAddresses.destroy({
        where: {
            createdAt: {
                [Op.lt]: getCurrentThreshold()
            }
        }
    });
};

export {
    getCachedIpAddress,
    createIpAddress,
    deleteIpAddress,
    deleteExpiredIpAddresses
}