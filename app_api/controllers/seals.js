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
        id: req.body.id,
        chapters:
            [{
                id: 1,
                reader: ""
            },
            {
                id: 2,
                reader: ""
            },
            {
                id: 3,
                reader: ""
            },
            {
                id: 4,
                reader: ""
            },
            {
                id: 5,
                reader: ""
            },
            {
                id: 6,
                reader: ""
            },
            {
                id: 7,
                reader: ""
            },
            {
                id: 8,
                reader: ""
            },
            {
                id: 9,
                reader: ""
            },
            {
                id: 10,
                reader: ""
            },
            {
                id: 11,
                reader: ""
            },
            {
                id: 12,
                reader: ""
            },
            {
                id: 13,
                reader: ""
            },
            {
                id: 14,
                reader: ""
            },
            {
                id: 15,
                reader: ""
            },
            {
                id: 16,
                reader: ""
            },
            {
                id: 17,
                reader: ""
            },
            {
                id: 18,
                reader: ""
            },
            {
                id: 19,
                reader: ""
            },
            {
                id: 20,
                reader: ""
            },
            {
                id: 21,
                reader: ""
            },
            {
                id: 22,
                reader: ""
            },
            {
                id: 23,
                reader: ""
            },
            {
                id: 24,
                reader: ""
            },
            {
                id: 25,
                reader: ""
            },
            {
                id: 26,
                reader: ""
            },
            {
                id: 27,
                reader: ""
            },
            {
                id: 28,
                reader: ""
            },
            {
                id: 29,
                reader: ""
            },
            {
                id: 30,
                reader: ""
            },
            {
                id: 31,
                reader: ""
            },
            {
                id: 32,
                reader: ""
            },
            {
                id: 33,
                reader: ""
            },
            {
                id: 34,
                reader: ""
            },
            {
                id: 35,
                reader: ""
            },
            {
                id: 36,
                reader: ""
            },
            {
                id: 37,
                reader: ""
            },
            {
                id: 38,
                reader: ""
            },
            {
                id: 39,
                reader: ""
            },
            {
                id: 40,
                reader: ""
            },
            {
                id: 41,
                reader: ""
            },
            {
                id: 42,
                reader: ""
            },
            {
                id: 43,
                reader: ""
            },
            {
                id: 44,
                reader: ""
            },
            {
                id: 45,
                reader: ""
            },
            {
                id: 46,
                reader: ""
            },
            {
                id: 47,
                reader: ""
            },
            {
                id: 48,
                reader: ""
            },
            {
                id: 49,
                reader: ""
            },
            {
                id: 50,
                reader: ""
            },
            {
                id: 51,
                reader: ""
            },
            {
                id: 52,
                reader: ""
            },
            {
                id: 53,
                reader: ""
            },
            {
                id: 54,
                reader: ""
            },
            {
                id: 55,
                reader: ""
            },
            {
                id: 56,
                reader: ""
            },
            {
                id: 57,
                reader: ""
            },
            {
                id: 58,
                reader: ""
            },
            {
                id: 59,
                reader: ""
            },
            {
                id: 60,
                reader: ""
            },
            {
                id: 61,
                reader: ""
            },
            {
                id: 62,
                reader: ""
            },
            {
                id: 63,
                reader: ""
            },
            {
                id: 64,
                reader: ""
            },
            {
                id: 65,
                reader: ""
            },
            {
                id: 66,
                reader: ""
            },
            {
                id: 67,
                reader: ""
            },
            {
                id: 68,
                reader: ""
            },
            {
                id: 69,
                reader: ""
            },
            {
                id: 70,
                reader: ""
            },
            {
                id: 71,
                reader: ""
            },
            {
                id: 72,
                reader: ""
            },
            {
                id: 73,
                reader: ""
            },
            {
                id: 74,
                reader: ""
            },
            {
                id: 75,
                reader: ""
            },
            {
                id: 76,
                reader: ""
            },
            {
                id: 77,
                reader: ""
            },
            {
                id: 78,
                reader: ""
            },
            {
                id: 79,
                reader: ""
            },
            {
                id: 80,
                reader: ""
            },
            {
                id: 81,
                reader: ""
            },
            {
                id: 82,
                reader: ""
            },
            {
                id: 83,
                reader: ""
            },
            {
                id: 84,
                reader: ""
            },
            {
                id: 85,
                reader: ""
            },
            {
                id: 86,
                reader: ""
            },
            {
                id: 87,
                reader: ""
            },
            {
                id: 88,
                reader: ""
            },
            {
                id: 89,
                reader: ""
            },
            {
                id: 90,
                reader: ""
            },
            {
                id: 91,
                reader: ""
            },
            {
                id: 92,
                reader: ""
            },
            {
                id: 93,
                reader: ""
            },
            {
                id: 94,
                reader: ""
            },
            {
                id: 95,
                reader: ""
            },
            {
                id: 96,
                reader: ""
            },
            {
                id: 97,
                reader: ""
            },
            {
                id: 98,
                reader: ""
            },
            {
                id: 99,
                reader: ""
            },
            {
                id: 100,
                reader: ""
            },
            {
                id: 101,
                reader: ""
            },
            {
                id: 102,
                reader: ""
            },
            {
                id: 103,
                reader: ""
            },
            {
                id: 104,
                reader: ""
            },
            {
                id: 105,
                reader: ""
            },
            {
                id: 106,
                reader: ""
            },
            {
                id: 107,
                reader: ""
            },
            {
                id: 108,
                reader: ""
            },
            {
                id: 109,
                reader: ""
            },
            {
                id: 110,
                reader: ""
            },
            {
                id: 111,
                reader: ""
            },
            {
                id: 112,
                reader: ""
            },
            {
                id: 113,
                reader: ""
            },
            {
                id: 114,
                reader: ""
            }
            ]
    }, (err, seal) => {
        if (err) {
            res
                .status(400)
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
            if (req.body.chapterid && req.bodu.reader) {
                seal.chapters[req.body.chapterid].reader = req.body.reader
            } else {
                return res
                    .status(404)
                    .json({ "message": "Both reader and chapter id are required" });
            }
            seal.save((err, updateSeal) => {
                if (err) {
                    res
                        .status(404)
                        .json(error);
                } else {
                    res
                        .status(200)
                        .json(updateSeal)
                }
            });
        });
};

module.exports = {
    getSeals,
    createSeal,
    getOneSeal,
    updateOneSeal,
}