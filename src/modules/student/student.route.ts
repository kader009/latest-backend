import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// will call here
router.post('/create-student', StudentController.createStudnet)