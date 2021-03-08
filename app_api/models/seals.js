const mongoose = require('mongoose');

const chapterDefault = [
    { id: 1, chapters: 'ٱلْفَاتِحَة و ٱلْبَقَرَة', part: '3 - 1', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 2, chapters: 'آلِ عِمْرَان', part: '4 - 3', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 3, chapters: 'ٱلنِّسَاء', part: '6 - 4', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 4, chapters: 'ٱلْمَائِدَة و ٱلْأَنْعَام', part: '8 - 6', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 5, chapters: 'ٱلْأَعْرَاف', part: '9 - 8', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 6, chapters: 'ٱلْأَنْفَال و ٱلتَّوْبَة', part: '11 - 9', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 7, chapters: 'يُونُس و هُود', part: '12 - 11', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 8, chapters: 'من يُوسُف إلى إِبْرَاهِيم', part: '13 - 12', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 9, chapters: 'من ٱلْحِجْر إلى ٱلْإِسْرَاء', part: '15 - 14', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 10, chapters: 'من ٱلْكَهْف إلى طه', part: '16 - 15', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 11, chapters: 'من ٱلْأَنْبِيَاء إلى ٱلْمُؤْمِنُون', part: '18 - 17', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 12, chapters: 'من ٱلنُّور إلى ٱلشُّعَرَاء', part: '19 - 18', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 13, chapters: 'من ٱلنَّمْل إلى ٱلْعَنْكَبُوت', part: '21 - 19', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 14, chapters: 'من ٱلرُّوم إلى سَبَأ', part: '22 - 21', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 15, chapters: 'من فَاطِر إلى ص', part: '23 - 22', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 16, chapters: 'من ٱلزُّمَر إلى فُصِّلَت', part: '25 - 23', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 17, chapters: 'من ٱلشُّورىٰ إلى مُحَمَّد', part: '26 - 25', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 18, chapters: 'من ٱلْفَتْح إلى ٱلْوَاقِعَة', part: '27 - 26', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 19, chapters: 'من ٱلْحَدِيد إلى ٱلْحَاقَّة', part: '29 - 27', reader: 'إسم القارئ', status: 'غير مقروءة' },
    { id: 20, chapters: 'من نُوح إلى ٱلنَّاس', part: '30 - 29', reader: 'إسم القارئ', status: 'غير مقروءة' }
];

const chaptersSchema = new mongoose.Schema({
    id: Number,
    chapters: String,
    part: String,
    reader: String,
    status: String
});

const sealSchema = new mongoose.Schema({
    id: Number,
    title: String,
    creationDate: {
        type: Date,
        default: Date.now()
    },
    closingDate: {
        type: Date,
        default: new Date()
    },
    chapters: {
        type: [chaptersSchema],
        required: true,
        default: chapterDefault
    }
})

mongoose.model('Seal', sealSchema);
