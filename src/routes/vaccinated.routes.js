const { Router } = require("express");
const router = Router();
const {
  addData,
  deleteAllCollection,
} = require("../controllers/vaccinated.controllers");

/**
 * Inserta informacion en la base de datos
 * Rrecibiendo un JSON son la siguiente estructura
 * 
  {
  "name": "Pablo Mendoza",
  "location": "Guatemala City",
  "gender": "male",
  "age": 35,
  "vaccine_type": "Sputnik V",
  "route": "gRPC"
  }
 */
router.post("/data", addData);

/**
 * Elimina toda la collecion
 */
router.delete("/delete-collection", deleteAllCollection);

module.exports = {
  routes: router,
};
