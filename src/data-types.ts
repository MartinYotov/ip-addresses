import { Model } from "sequelize";

interface IIpAddressData {
    ip: string;
    success: boolean,
    message?: string,
    type: string;
    continent: string;
    continent_code: string;
    country: string;
    country_code: string;
    region: string;
    region_code: string;
    city: string;
    latitude: number;
    longitude: number;
    is_eu: boolean;
    postal: string;
    calling_code: string;
    capital: string;
    borders: string;
}

interface IIpAddress extends Omit<IIpAddressData, 'success' | 'message'>, Model {
    createdAt: Date;
}

export {
    IIpAddress,
    IIpAddressData
}