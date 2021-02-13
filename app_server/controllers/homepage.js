const homepage = (req, res) => {
    res.render('homepage', { title: 'Home' });
}

module.exports = {
    homepage
};