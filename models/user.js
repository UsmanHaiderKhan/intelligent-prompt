import { model, models, Schema } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already Exists!'],
    required: [true, 'Email is required'],
  },
  username: {
    type: String,
    required: [true, 'UserName is Required '],
    // match: [
    //   /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    //   'Username invalid, it should contain 8-20 alphanumeric letters and be unique!',
    // ],
  },
  userImage: {
    type: String,
  },
});
const User = models.User || model('User', userSchema);
export default User;
