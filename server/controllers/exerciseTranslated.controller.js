import exerciseTranslatedService from "../services/exerciseTranslated.service.js";

async function findAll(req, res, next) {
  const language = req.params.language;

  try {
    const data = await exerciseTranslatedService.findAll(language);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}

async function findDetailsByPk(req, res, next) {
  const id = req.params.id;

  try {
    const data = await exerciseTranslatedService.findDetailsByPk(id);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}

export default {
  findAll,
  findDetailsByPk,
};
