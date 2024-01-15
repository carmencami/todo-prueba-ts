import { RequestHandler } from "express"
import Tareas from './todolist'
import { todo } from "node:test"

export const createTarea: RequestHandler = async (req, res) => {
    const tarea = new Tareas(req.body)
    const tareaSave = await tarea.save()
    res.json(tareaSave)
}

export const getTareas: RequestHandler = async (req, res) => {
    try{
        const tareas = await Tareas.find()
        return res.json(tareas)
    } catch(error){
        res.json(error)
    }
}

export const getTarea: RequestHandler = async (req, res) => {
    const todoFound = await Tareas.findById(req.params.id)
    if (todoFound) return res.status(204).json();
    return res.json(todoFound)
}

export const deleteTarea: RequestHandler = (req, res) => {
    res.json('delete Todo')
}

export const updateTarea: RequestHandler = (req, res) => {
    res.json('update Todo')
}