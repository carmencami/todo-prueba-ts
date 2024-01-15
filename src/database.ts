import mongoose , {ConnectionOptions} from 'mongoose'
import config from './config'

(async () => {
    try {
        const mongooseOptions: ConnectionOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // user: config.MONGO_USER,
            // pass: config.MONGO_PASS
        }
        const db = await mongoose.connect('mongodb://localhost/mern-database', mongooseOptions);
        console.log('Connected to MongoDB to : ' + db.connection.name)
    } catch (error) {
        console.error(error)
    }
    

})()
