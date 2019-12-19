const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const banzoSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    nome: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    categoria: {type:Boolean, required: true}
})
const banzoSchema = mongoose.model("banzo", banzoSchema);

module.exports = banzoModel