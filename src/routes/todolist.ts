import {Schema, model} from 'mongoose'

const tareasSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true  
    }
},{
        versionKey: false,
        timestamps: true
    }
);

export default model('Tareas', tareasSchema)