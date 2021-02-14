const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    reader: String,
});

const sealSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.UTC
    },
    closedDate: {
        type: Date,
    },
    chapters: {
        type: [chapterSchema],
        required: true
    }
})

mongoose.model('Seal', sealSchema);
