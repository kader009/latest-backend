import { Model } from 'mongoose';

export interface IGuardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
}

export interface IUsername {
  firstName: string;
  lastName: string;
}

export interface LocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
}

export interface Student {
  id: string;
  password:string;
  name: IUsername;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  contactNumber: string;
  email: string;
  BloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  guardian: IGuardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: 'Active' | 'inActive';
  isDeleted: boolean;
}

// for creating static
// export interface StudentStaticModel extends Model<Student> {
//   isUserExists(id: string): Promise<Student | null>;
// }

// for creating instance

export interface StudentMethods {
  isUserExists(id: string): Promise<Student | null>;
}

export type StudentCustomModel = Model<
  Student,
  Record<string, never>,
  StudentMethods
>;
