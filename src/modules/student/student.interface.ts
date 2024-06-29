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
}
