import { RequestHandler } from "express"
import Tarea from './todolist'
import { todo } from "node:test"

export const createTarea: RequestHandler = async (req, res) => {
    try {
        // Asegúrate de no proporcionar manualmente el _id
        delete req.body._id;

        const tarea = new Tarea(req.body);
        const tareaSave = await tarea.save();

        res.json(tareaSave);
    } catch (error) {
        console.error('Error al crear Tarea:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const getTareas: RequestHandler = async (req, res) => {
    try{
        const tarea = await Tarea.find()
        return res.json(tarea)
    } catch(error){
        res.json(error)
    }
}

export const getTarea: RequestHandler = async (req, res) => {
    const todoFound = await Tarea.findById(req.params.id)
    if (!todoFound) return res.status(204).json();
    return res.json(todoFound)
}

export const deleteTarea: RequestHandler = async (req, res) => {
    const todoFound = await Tarea.findByIdAndDelete(req.params.id)
    if (!todoFound) return res.status(204).json();
    return res.json(todoFound)
}

export const updateTarea: RequestHandler = async(req, res) => {
    const tareaUpdate = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new : true})
    if (!tareaUpdate) return res.status(204).json();
    res.json(tareaUpdate)
}