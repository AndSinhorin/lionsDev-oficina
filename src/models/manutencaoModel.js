import { Schema, model } from 'mongoose';

const manutencaoSchema = new Schema({
    oficina: {
        type: Schema.Types.ObjectId,
        ref: 'Oficina',
        required: true
    },
    veiculo: {
        type: Schema.Types.ObjectId,
        ref: 'Veiculo',
        required: true
    },
    servicos: [{
        nome:{
            type: String, 
            required: true
        },
        preço:{
            type: Number, 
            required: true 
        }
    }],
    data: {
        type: Date,
        required: true
    },
    valorTotal: {
        type: Number,
        required: true
    },
})

export default model ('Manutencao', manutencaoSchema)