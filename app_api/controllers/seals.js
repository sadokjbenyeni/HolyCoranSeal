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
    res.status(201).json({ "status": "success" });
};

const getOneSeal = (req, res) => {
    Seal
        .findById(req.params.sealid)
        .exec((err, seal) => {
            if (!seal) {
                return res
                    .status(404)
                    .json({ "message": "Seal not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(seal);
        });
};

const updateOneSeal = (req, res) => { };
const deleteOneSeal = (req, res) => { };

module.exports = {
    getSeals,
    createSeal,
    getOneSeal,
    updateOneSeal,
    deleteOneSeal
}