import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// will call here
router.post('/create-student', StudentController.createStudnet);
router.get('/', StudentController.getAllStudent);
router.get('/:studentId', StudentController.getSingleStudent);
router.delete('/:studentId', StudentController.deleteSingleStudent);

export const StudentRoute = router;