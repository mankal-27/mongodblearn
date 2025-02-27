import { Schema, model, Document, models } from 'mongoose';

interface User {
    name: string;
    email: string;
}

const UserSchema = new Schema<User>({
    name: String,
    email: String,
});

// return mongoose's model if it exists
// otherwise create a new model
const User = models?.User || model<User>('User', UserSchema);
export default User;
