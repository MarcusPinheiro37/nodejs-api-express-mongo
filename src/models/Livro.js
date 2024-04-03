import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true},
    editora: { type: String },
    preco: { type: Number },
    paginas: { 
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
          }
    }
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;