const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    id: Number,
    reader: String,
});

const sealSchema = new mongoose.Schema({
    id: Number,
    creationDate: {
        type: Date,
        default: Date.now()
    },
    closingDate: {
        type: Date,
    },
    chapters: {
        type: [chapterSchema],
        required: true
    }
})

mongoose.model('Seal', sealSchema);
