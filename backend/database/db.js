import mongoose from "mongoose";


const Connection = async(url) => {
    const URL=`${url}`;
    try{
        // first arg is url and 2nd is object will take tools and all that mongodb will be using
        await mongoose.connect(URL,{ useNewUrlParser:true });
        console.log('Database is connected successfully');
    }catch(error){
        console.error('Error while connecting database', error)
    }
}

export default Connection;