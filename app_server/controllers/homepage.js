const homepage = (req, res) => {
    res.render('homepage', { title: 'أختر السور التي تودّ قراءتها' });
}

module.exports = {
    homepage
};