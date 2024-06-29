import { Schema, model } from 'mongoose';
import { IGuardian, LocalGuardian, Student } from './student.interface';

const guardianName = new Schema<IGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNumber: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNumber: { type: String, required: true },
});

const Localguadian = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  BloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  guardian: guardianName,
  localGuardian: Localguadian,
  profileImage: { type: String },
  isActive: ['Active', 'inActive'],
});


const StudentModel = model<Student>('Student',studentSchema);