const Task = require("../database/scheema/tasksScheema");
const ErrorHandler = require("../middlewares/error");

const addtask = async (req, res, next) => {
    try {

        console.log("adding task");
        const { title, description } = req.body;
        await Task.create({
            title,
            description,
            user: req.user
        })

        res.status(201).json({
            success: true,
            message: "Task Added"
        })
    } catch (err) {
        console.log(err);
    }
}

const getAllTask = async (req, res, next) => {
    try {
        console.log("getting task");
        const userid = req.user._id;
        const tasks = await Task.find({ user: userid });
        res.status(200).json({
            success: true,
            tasks
        })

    } catch (err) {
        console.log(err);
    }
}


const updateTask = async (req, res, next) => {

    try {

        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Invalid Id"
            })

        }
        task.isCompleted = !task.isCompleted;

        await task.save();
        res.status(200).json({
            success: true,
            message: "Updated successfully"
        })
    } catch (err) {
        console.log(err);
    }
}

 
const deleteTask = async (req, res, next) => {
    try {

        const task = await Task.findById(req.params.id);
        if (!task) {
            // return next(new ErrorHandler("Task Not found", 404));
            // return next(new Error("Task Not found", 404));
            return res.status(404).json({
                success: false,
                message: "Task Not Found"
            })

        }

        await task.deleteOne();
        res.status(200).json({
            success: true,
            message: "Deleted  successfully"
        })
    } catch (err) {
        // console.log(err);
    }
}

module.exports = { addtask, getAllTask, updateTask, deleteTask };