import exerciseListService from '../services/exerciseList.service.js';

async function findAll(req, res, next) {
    const username = req.params.username;

    try {
        const data = await exerciseListService.findAll(username);
        res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
}

async function findByPk(req, res, next) {
    const list_id = req.params.list_id;

    try {
        const data = await exerciseListService.findByPk(list_id);
        res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
}

async function create(req, res, next) {
    const username = req.params.username;
    const reqExerciseList = req.body;

    try {
        const data = await exerciseListService.create(username, reqExerciseList);
        res.status(201).json(data);
    }
    catch (err) {
        next(err);
    }
}

async function update(req, res, next) {
    const list_id = req.params.list_id;
    const reqExerciseList = req.body;

    try {
        const data = await exerciseListService.update(list_id, reqExerciseList);
        res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
}

async function destroy(req, res, next) {
    const list_id = req.params.list_id;

    try {
        await exerciseListService.destroy(list_id);
        res.status(200).json({ status: true });
    }
    catch (err) {
        next(err);
    }
}

export default {
    findAll,
    findByPk,
    create,
    update,
    destroy
}