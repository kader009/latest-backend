import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);

  // if (await result.isUserExists(student.id)) {
  //   throw new Error('user already exists');
  // }
  return result;
};

const getAllStudentFromDB = async () => {
  const result = StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = StudentModel.findOne({ id });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

const updateStudentFromDB = async (id: string, body: Student) => {
  const result = await StudentModel.updateOne({ id: id }, body);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
  updateStudentFromDB,
};
