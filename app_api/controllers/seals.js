const mongoose = require('mongoose');
const Seal = mongoose.model('Seal')

const getSeals = (req, res) => {

    Seal
        .find()
        .exec((err, seals) => {
            if (!seals) {
                return res
                    .status(404)
                    .json({ "message": "No Seals found" })
            }
            else if (err) {
                return res
                    .status(404)
                    .json(err)
            }
            res
                .status(200)
                .json(seals);
        })
};

const createSeal = (req, res) => {
    Seal.create({
        title: req.body.title
    }, (err, seal) => {
        if (err) {
            res
                .status(500)
                .json(err);
        } else {
            res
                .status(201)
                .json(seal);
        }
    });
};

const getOneSeal = (req, res) => {
    Seal
        .findOne({ id: req.params.sealid })
        .exec((err, seal) => {
            if (!seal) {
                return res
                    .status(404)
                    .json({ "message": "Seal not found" });
            } else if (err) {
                return res
                    .status(500)
                    .json(err);
            }
            res
                .status(200)
                .json(seal);
        });
};

const updateOneSeal = (req, res) => {
    if (!req.params.sealid) {
        return res
            .status(404)
            .json({
                "message": "Not found, seal id is required"
            });
    }
    Seal
        .findById(req.params.sealid)
        .select('chapters')
        .exec((err, seal) => {
            if (!seal) {
                return res
                    .status(404)
                    .json({
                        "message": `seal with id ${sealid} was not found`
                    });
            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            if (req.body.chapterid && req.body.reader) {
                seal.chapters[req.body.chapterid].reader = req.body.reader
            } else {
                return res
                    .status(404)
                    .json({ "message": "Both reader and chapter id are required" });
            }
            seal.save((err, updatedSeal) => {
                if (err) {
                    res
                        .status(404)
                        .json(error);
                } else {
                    res
                        .status(200)
                        .json(updatedSeal);
                }
            });
        });
};

const deleteOneSeal = (req, res) => {
    const { sealid } = req.params;
    if (sealid) {
        Seal
            .findByIdAndRemove(sealid)
            .exec((err, seal) => {
                if (err) {
                    return res
                        .status(404)
                        .json(err);
                }
                res
                    .status(204)
                    .json(null);
            });
    } else {
        res
            .status(404)
            .json({ "message": "No Location" });
    }
};

module.exports = {
    getSeals,
    createSeal,
    getOneSeal,
    updateOneSeal,
    deleteOneSeal
}