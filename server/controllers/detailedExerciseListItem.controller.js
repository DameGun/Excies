import detailedExerciseListItemService from '../services/detailedExerciseListItem.service.js';

async function findAll(req, res, next) {
    const list_item_id = req.params.item_id;

    try {
        const data = await detailedExerciseListItemService.findAll(list_item_id);
        res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
}

async function findByPk(req, res, next) {
    const detailed_id = req.params.detailed_id;

    try {
        const data = await detailedExerciseListItemService.findByPk(detailed_id);
        res.status(200).json(data)
    }
    catch (err) {
        next(err);
    }
}

async function create(req, res, next) {
    const list_item_id = req.params.item_id;
    const reqDetailed = req.body;

    try {
        const data = await detailedExerciseListItemService.create(list_item_id, reqDetailed);
        res.status(201).json(data);
    }
    catch (err) {
        next(err);
    }
}

async function update(req, res, next) {
    const detailed_id = req.params.detailed_id;
    const reqDetailed = req.body;

    try {
        const data = await detailedExerciseListItemService.update(detailed_id, reqDetailed);
        res.status(200).json(data);
    }
    catch (err) {
        next(err)
    }
}

async function destroy(req, res, next) {
    const detailed_id = req.params.detailed_id;

    try {
        await detailedExerciseListItemService.destroy(detailed_id);
        res.status(200).json({
            status: true
        })
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