const mongoose = require('mongoose');

const chapterDefault = [
    { id: 1, chapters: 'ٱلْفَاتِحَة و ٱلْبَقَرَة', part: '3 - 1', reader: 'القارئ', status: 'لم تقرأ', score: 6 },
    { id: 2, chapters: 'آلِ عِمْرَان', part: '4 - 3', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 3, chapters: 'ٱلنِّسَاء', part: '6 - 4', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 4, chapters: 'ٱلْمَائِدَة و ٱلْأَنْعَام', part: '8 - 6', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 5, chapters: 'ٱلْأَعْرَاف', part: '9 - 8', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 6, chapters: 'ٱلْأَنْفَال و ٱلتَّوْبَة', part: '11 - 9', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 7, chapters: 'يُونُس و هُود', part: '12 - 11', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 8, chapters: 'من يُوسُف إلى إِبْرَاهِيم', part: '13 - 12', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 9, chapters: 'من ٱلْحِجْر إلى ٱلْإِسْرَاء', part: '15 - 14', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 10, chapters: 'من ٱلْكَهْف إلى طه', part: '16 - 15', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 11, chapters: 'من ٱلْأَنْبِيَاء إلى ٱلْمُؤْمِنُون', part: '18 - 17', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 12, chapters: 'من ٱلنُّور إلى ٱلشُّعَرَاء', part: '19 - 18', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 13, chapters: 'من ٱلنَّمْل إلى ٱلْعَنْكَبُوت', part: '21 - 19', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 14, chapters: 'من ٱلرُّوم إلى سَبَأ', part: '22 - 21', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 15, chapters: 'من فَاطِر إلى ص', part: '23 - 22', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 16, chapters: 'من ٱلزُّمَر إلى فُصِّلَت', part: '25 - 23', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 17, chapters: 'من ٱلشُّورىٰ إلى مُحَمَّد', part: '26 - 25', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 18, chapters: 'من ٱلْفَتْح إلى ٱلْوَاقِعَة', part: '27 - 26', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 19, chapters: 'من ٱلْحَدِيد إلى ٱلْحَاقَّة', part: '29 - 27', reader: 'القارئ', status: 'لم تقرأ', score: 5 },
    { id: 20, chapters: 'من نُوح إلى ٱلنَّاس', part: '30 - 29', reader: 'القارئ', status: 'لم تقرأ', score: 4 }
];

const chaptersSchema = new mongoose.Schema({
    id: Number,
    chapters: String,
    part: String,
    reader: String,
    status: String,
    score: Number
});

const sealSchema = new mongoose.Schema({
    title: String,
    progress: {
        type: Number,
        'default': 0,
        min: 0,
        max: 100
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    closingDate: {
        type: Date,
        default: Date.now()
    },
    chapters: {
        type: [chaptersSchema],
        required: true,
        default: chapterDefault
    }
})
mongoose.model('Seal', sealSchema);
