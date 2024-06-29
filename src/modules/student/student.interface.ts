import { Schema, model, connect } from 'mongoose';

export interface IGuardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
}

export interface IUser {
  name: {
    firstName: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNumber: string;
  email: string;
  BloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  guardian: IGuardian;
}
