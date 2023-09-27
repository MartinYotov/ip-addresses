import express, { Express } from 'express';
import cron from 'node-cron';
import IpAddresses from './models/ip-address.model';
import ipAddressesRouter from './routes/ip-addresses.routes';
import { deleteExpiredIpAddresses } from './services/ip-addresses.service';

const port = 3000;
const app: Express = express();

app.use('/ip-address', ipAddressesRouter);

app.listen(port, async () => {
    console.log(`Server listening on port ${port}...`);

    await IpAddresses.sync();

    // runs every 20 seconds to delete cached address older than 60 seconds
    cron.schedule('*/20 * * * * *', async () => {
        await deleteExpiredIpAddresses();
    });
});