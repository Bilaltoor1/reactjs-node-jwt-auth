import mongoose, {Schema} from 'mongoose';

const UserSchema = new Schema({
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Password is required']
    }
});

const User = mongoose.model('User',UserSchema);

export default User;