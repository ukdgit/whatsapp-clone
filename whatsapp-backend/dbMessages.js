import mongoose from 'mongoose'; //will define data schema that how data is going to be built

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});
//collection
export default mongoose.model('messagecontents', whatsappSchema);
//messageContent- collection name