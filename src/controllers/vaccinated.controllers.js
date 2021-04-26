const Vaccinated = require("../models/vaccinated.model");

/**
 * Funcion que alamacena la informacion en la collecion personas
 * @param {
 * body: contiene la estrutura de la informacion para almacenar
 * en la base de datos
 * } req
 * @param {*} res
 * @param {*} next
 * @returns
 */
async function addData(req, res, next) {
  try {
    if (!req.body.name) {
      return res.status(400).send({ message: "Content cannot be empty" });
    }
    const newVaccinated = new Vaccinated(req.body);
    await newVaccinated.save();
    res.json({
      message: "Dato registrado",
      result: newVaccinated,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error en el registro de datos",
    });
  }
}

/**
 * Fucion que limpia la coleccion 'vacunados' de MongoDB
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function deleteAllCollection(req, res, next) {
  try {
    await Vaccinated.remove({});
    res.json({
      message: "Collecion vacunados eliminada.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al limpiar la coleccion de vacunados.",
    });
  }
}

module.exports = {
  addData,
  deleteAllCollection,
};
