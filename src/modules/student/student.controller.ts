import { Request, Response } from 'express';
import { StudentServices } from './student.services';
import { studentValidationSchema } from './student.validation';

const createStudnet = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    const zodDataValidation = studentValidationSchema.parse(student);

    const result = await StudentServices.createStudentIntoDB(zodDataValidation);

    res.status(200).json({
      success: true,
      message: 'student create successfully',
      data: result,
    });

  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error
    })
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Student retrieve successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Single Student retrieve successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: ' Student data deleted successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudnet,
  getAllStudent,
  getSingleStudent,
  deleteSingleStudent
};
