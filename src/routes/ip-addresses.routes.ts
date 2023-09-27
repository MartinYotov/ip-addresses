import { Router } from "express";
import { getIpAddressHandler, deleteIpAddressHandler } from "../controllers/ip-addresses.controller";

const ipAddressesRouter = Router();

ipAddressesRouter.get('/:address', getIpAddressHandler);
ipAddressesRouter.delete('/:address', deleteIpAddressHandler);

export default ipAddressesRouter;