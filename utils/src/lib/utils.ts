import mongoose from 'mongoose';

export const connectTodb = () => {
  return mongoose
    .connect('mongodb+srv://abdi:abdi9503@cluster0.dciz7m9.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log("db connected"))
    .catch((err) => console.log(`error ${err}`));
};

// connectTodb
