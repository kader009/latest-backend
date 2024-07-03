import { Schema, model } from 'mongoose';
import {
  IGuardian,
  LocalGuardian,
  Student,
  StudentCustomModel,
} from './student.interface';
import bcrypt from 'bcrypt';
import config from '../../app/config';

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

const studentSchema = new Schema<Student, StudentCustomModel>(
  {
    id: { type: String, required: true, unique: true },
    password: { type: String },
    name: {
      firstName: {
        type: String,
        required: true,
        trim: true,
        validate: {
          validator: function (value: string) {
            const firstNamestr = value.charAt(0).toUpperCase() + value.slice(1);
            return firstNamestr === value;
          },
          message: '{VALUE} is not a capitalize',
        },
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
    isDeleted: { type: Boolean, default: false },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// mongoose virtual
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.lastName}`; 
});

// pre save middleware
studentSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook');
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt));
  next();
});

// post save middleware
studentSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// query middleware
// studentSchema.pre('find', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// studentSchema.pre('findOne', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// aggregation middleware
// studentSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
//   next();
// });

// create a custom static method
// studentSchema.statics.isUserExists = async function(id:string){
//   const existingUser = await StudentStaticModel.findOne({id})
//   return existingUser;
// }

// creating a custom instance method
// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await StudentModel.findOne({ id });
//   return existingUser;
// };

export const StudentModel = model<Student, StudentCustomModel>(
  'Student',
  studentSchema,
);
