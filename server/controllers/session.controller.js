import sessionService from '../services/session.service.js';

async function findAll(req, res, next) {
    const username = req.params.username;

    try {
        const data = await sessionService.findAll(username);
        res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
}

async function findByPk(req, res, next) {
    const session_id = req.params.session_id;

    try {
        const data = await sessionService.findByPk(session_id);
        res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
}

async function create(req, res, next) {
    const username = req.params.username;
    const reqSession = req.body;

    try {
        const data = await sessionService.create(username, reqSession);
        res.status(201).json(data)
    }
    catch (err) {
        next(err);
    }
}

async function update(req, res, next) {
    const session_id = req.params.session_id;
    const reqSession = req.body;

    try {
        const data = await sessionService.update(session_id, reqSession);
        res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
}

async function destroy(req, res, next) {
    const session_id = req.params.session_id;

    try {
        await sessionService.destroy(session_id);
        res.status(200).json({ status: true });
    }
    catch {
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