import express from 'express';
import ProgramController from './controller';

export default express.Router().get('/', ProgramController.getAll);
