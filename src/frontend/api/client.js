import axios from "axios";
import { auth } from "../utils/authHeader";

const ipfs = axios.create({
    baseURL: 'https://ipfs.io',
    timeout: 10000,
    headers: {
        Authorization: auth,
    }
});

const ipfsSubdomain = axios.create({
    baseURL: 'https://nft-ipfs-subdomain.infura-ipfs.io',
    timeout: 10000,
    headers: {
        Authorization: auth,
    }
})

export {ipfs, ipfsSubdomain};