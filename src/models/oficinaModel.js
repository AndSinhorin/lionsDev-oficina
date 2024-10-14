import { Schema, model } from "mongoose";

const oficinaSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    endereço: {
        type: String,
        required: true
    },
    especialidades: {
        type: String,
        required: true,
    },
});

export default model ('Oficina', oficinaSchema);