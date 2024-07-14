import mongoose from 'mongoose';

const uri: string = process.env.MONGO_URI as string;
const mongoDbName: string = process.env.MONGO_DB as string;

interface ConnectToMongoDbResponse {
  closeMongoConnection: (force?: boolean) => Promise<void>;
}

const connectToMongoDb = (): ConnectToMongoDbResponse => {
  mongoose
    .connect(uri + mongoDbName)
    .then(() => {
      console.debug('Connected to MongoDB');
    })
    .catch((error) => {
      console.debug('Error connecting to MongoDB', error);
    });

  mongoose.connection.on('connected', () => {
    console.debug('Connection to MongoDB established');
  });

  mongoose.connection.on('error', (error) => {
    console.debug('Error connecting to MongoDB', error);
  });

  mongoose.connection.on('disconnected', () => {
    console.debug('Disconnected from MongoDB');
  });

  return {
    closeMongoConnection: mongoose.connection.close.bind(mongoose.connection),
  };
};

export default connectToMongoDb;
