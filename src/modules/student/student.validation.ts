import { z } from 'zod';

const guardianNameSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNumber: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNumber: z.string(),
});

const localGuardianSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

export const studentValidationSchema = z.object({
  id: z.string().min(5),
  name: z.object({
    firstName: z.string()
      .refine(value => value.charAt(0).toUpperCase() + value.slice(1) === value, {
        message: 'First name must be capitalized',
      }),
    lastName: z.string(),
  }),
  gender: z.enum(['male', 'female'], { message: 'Select male or female' }),
  dateOfBirth: z.string().optional(), 
  email: z.string().email({ message: 'Invalid email address' }),
  contactNumber: z.string(),
  BloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
  guardian: guardianNameSchema,
  localGuardian: localGuardianSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(['Active', 'inActive']).default('Active'),
});