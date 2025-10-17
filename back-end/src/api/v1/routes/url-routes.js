import express from 'express';
import { getBigUrl, urlShort } from '../../../controllers/url-controller.js';
export const urlRoutes = express.Router();

urlRoutes.post('/short-url', urlShort);
urlRoutes.get('/small/:code', getBigUrl);
