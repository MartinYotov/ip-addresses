import { expect } from 'chai';
import { getCachedIpAddress, createIpAddress, deleteIpAddress } from '../src/services/ip-addresses.service';
import { fetchIpAddressData } from '../src/services/http.service';
import { IIpAddressData } from '../src/data-types';

const address = '8.8.8.8';

describe('IP Address Service', () => {
    it('should create IP address', async () => {
        const mockIpData: IIpAddressData = {
            ip: address,
            success: true,
            type: 'IPv4',
            continent: 'North America',
            continent_code: 'NA',
            country: 'United States',
            country_code: 'US',
            region: 'California',
            region_code: 'CA',
            city: 'Los Angeles',
            latitude: 34.0522342,
            longitude: -118.2436849,
            is_eu: false,
            postal: '90012',
            calling_code: '1',
            capital: 'Washington D.C.',
            borders: 'CA,MX'
          };

        const ipAddress = await createIpAddress(mockIpData);
        expect(ipAddress).to.be.an('object');
        expect(ipAddress).to.have.property('ip', address);
        expect(ipAddress).to.have.property('createdAt').and.to.be.a('date');
    });

    it('should get cached IP address', async () => {
        const cachedIpAddress = await getCachedIpAddress(address);
        expect(cachedIpAddress).to.be.an('object');
        expect(cachedIpAddress).to.have.property('ip', address);
        expect(cachedIpAddress).to.have.property('createdAt').and.to.be.a('date');
    });

    it('should delete cached IP address', async () => {
        await deleteIpAddress(address);
        
        const cachedIpAddress = await getCachedIpAddress(address);
        expect(cachedIpAddress).to.be.null;
    });
});

describe('HTTP Service', () => {
    it('should fetch IP address data', async () => {
        const ipData = await fetchIpAddressData(address);
        expect(ipData).to.be.an('object');
        expect(ipData).to.have.property('ip', address);
        expect(ipData).to.have.property('success', true);
    });
});
