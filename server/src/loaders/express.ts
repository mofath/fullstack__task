import express, { Application } from 'express';
import cors from 'cors';
import api from '../api/routes';

const expressLoader = async (app: Application) => {
  app.use(cors());
  app.use(express.json({ limit: '50mb', strict: false }));
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/v1', api);
};

export default expressLoader;
