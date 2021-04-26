const { Schema, model } = require("mongoose");

/**
 * Schema Persona
 * name: String - Almacena el nombre del vacunado
 * location: String - Almacena la ubicacion del vacunado
 * gender: String - Almacena el genero biologico del vacunado
 * age: Number - Almacena la edad del vacunado
 * vaccine_type: String - Almacena el tipo de vacuna con el que fue vacunado
 * route: String - Almacena la ruta del Protocolo de mensajeria que llego el registo
 * Se almacena el createdAt
 * Se genera un ID unico.
 */
const vaccinatedSchema = new Schema(
  {
    name: { type: String, default: "None" },
    location: { type: String, default: "None" },
    gender: { type: String, default: "male" },
    age: { type: Number, default: 0 },
    vaccine_type: { type: String, default: "None" },
    route: { type: String, default: "None" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Change the '_id' property name to 'id'
vaccinatedSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Vaccinated", vaccinatedSchema, "people");
