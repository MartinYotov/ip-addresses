import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';
import { IIpAddress } from '../data-types';

const IpAddress = sequelize.define<IIpAddress>(
    'IpAddress',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        ip: DataTypes.STRING,
        type: DataTypes.STRING,
        continent: DataTypes.STRING,
        continent_code: DataTypes.STRING,
        country: DataTypes.STRING,
        country_code: DataTypes.STRING,
        region: DataTypes.STRING,
        region_code: DataTypes.STRING,
        city: DataTypes.STRING,
        latitude: DataTypes.FLOAT,
        longitude: DataTypes.FLOAT,
        is_eu: DataTypes.BOOLEAN,
        postal: DataTypes.STRING,
        calling_code: DataTypes.STRING,
        capital: DataTypes.STRING,
        borders: DataTypes.STRING,
        createdAt: DataTypes.DATE,
    },
    {
        modelName: 'IpAddress',
        tableName: 'ip_addresses',
    }
);

export default IpAddress;