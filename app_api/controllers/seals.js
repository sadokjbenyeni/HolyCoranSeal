const mongoose = require('mongoose');
const Seal = mongoose.model('Seal')

const getSeals = async (req, res) => {

    try {
        const seals = await Seal.find().exec();
        if (!seals) {
            return res.status(404).json({ "message": "No seals found" });
        }
        res.status(200).json(seals);
    }
    catch (error) {
        return res.status(404).json(error);
    }
};

const createSeal = async (req, res) => {
    try {
        const seal = await Seal.create({ title: req.body.title }).exec();
        res.status(201).json(seal);
    } catch (error) {
        res.status(500).json(error);

    }
};

const getOneSeal = async (req, res) => {
    var sealsList = await Seal.find().exec();
    const lastSealId = req.body.sealid ? req.body.sealid : sealsList[sealsList.length - 1]._id;
    try {
        const seal = await Seal.findById(lastSealId).exec();
        if (!seal) {
            return res.status(404).json({ "message": "Seal not found" });
        }
        res.status(200).json(seal);
    }
    catch (error) {
        return res.status(500).json(error);
    }

};

const updateOneSeal = async (req, res) => {
    if (!req.params.sealid) {
        return res.status(404).json({ "message": "Not found, seal id is required" });
    }
    try {
        const seal = await Seal.findById(req.params.sealid).select('chapters').exec();
        let totalProgress = 0;
        if (!seal) {
            return res.status(404).json({ "message": `seal with id ${sealid} was not found` })
        }
        if (req.body.readers) {
            for (const key of Object.keys(req.body.readers)) {
                seal.chapters[key - 1].reader = req.body.readers[key];
            }
        }
        if (req.body.states) {
            for (const key in req.body.states) {
                seal.chapters[key - 1].status = req.body.states[key];
            }
        }
        seal.chapters.forEach(chapter => {
            if (chapter.status == 'قرأت') {
                totalProgress += chapter.score
            }
        });
        if (totalProgress == 100) {
            seal.closingDate = Date.now();
        }
        seal.progress = totalProgress;
        seal.save((err, updatedSeal) => {
            if (err) {
                res.status(404).json(error);
            } else {
                res.status(200).json(updatedSeal);
            }
        });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteOneSeal = async (req, res) => {
    const { sealid } = req.params;

    try {
        if (!sealid) {
            res.status(404).json({ "message": "No location" });
        }
        await Seal.findByIdAndDelete(sealid).exec();
        res.status(204).json({ "message": "Seal delete successfully" });
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getSeals,
    createSeal,
    getOneSeal,
    updateOneSeal,
    deleteOneSeal
}