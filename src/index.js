const http = require('http');
const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const Health = require('./api/health');
const Brands = require('./api/brands');
const Coffee = require('./api/coffee');

const router = express();

// middleware
router.use(cors());
router.use(parser.urlencoded({ extended: true }));
router.use(parser.json());

router.use('/health', Health);
router.use('/brands', Brands);
router.use('/coffee', Coffee);

const server = http.createServer(router);
server.listen(3000);