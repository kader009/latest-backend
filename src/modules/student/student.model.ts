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
  id: { type: String, required: true, unique: true },
  name: {
    firstName: { type: String, required: true, trim: true,
    validate: {
      validator: function (value : string) {
        const firstNamestr = value.charAt(0).toUpperCase() + value.slice(1)
        return firstNamestr === value;
      },
      message: '{VALUE} is not a capitalize'
    }
    
    },
    lastName: { type: String, required: true, trim: true }, 
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: 'select male or female',
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
  BloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  guardian: {
    type: guardianName,
    required: true,
  },
  localGuardian: {
    type: Localguadian,
    required: true,
  },
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ['Active', 'inActive'],
    default: 'Active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
