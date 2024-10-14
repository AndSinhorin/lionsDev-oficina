import { Schema, model } from 'mongoose';

const veiculoSchema = new Schema({
    placa: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    nomeProprietario: {
        type: String,
        required: true
    },
    manutencao: {
        type: Schema.Types.ObjectId,
        ref: 'Manutencao',
        required: false
    }
});

export default model ('Veiculo', veiculoSchema);