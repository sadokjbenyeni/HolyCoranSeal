const request = require('request');
const { post } = require('../routes');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = "https://holy-coran-seal.herokuapp.com/";
}

const renderSealsList = (req, res, responseBody) => {
    let message = null;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            messsage = "No open seals exist"
        }
    }
    res.render('homepage', {
        title: 'أختر السور التي تودّ قراءتها',
        seals: responseBody,
        message
    });
}
const sealsList = (req, res) => {
    const path = '/api/seals';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
        qs: {}
    };
    request(requestOptions, (err, statusCode, body) => {
        if (statusCode) {
            renderSealsList(req, res, body);
        } else {
            showError(req, res, statusCode)
        }
    });
};

const renderSealDetails = (req, res, seal) => {
    res.render('homepage', {
        id: seal.id,
        creationDate: seal.creationDate
    });
};

const sealDetails = (req, res) => {
    const path = `/api/seal/${req.params.sealid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    }
    request(requestOptions, (err, statusCode, body) => {
        let data = body;
        if (statusCode === 200) {
            renderSealDetails(req, res, data);
        } else {
            showError(req, res, statusCode)
        }
    });
};

const createNewSeal = (req, res) => {
    const path = '/api/seal';
    const postdata = {
        id: req.body.id
    };
    const requestOptions = {
        url: `${apiOptions.sevrer}${path}`,
        method: 'POST',
        json: postdata
    };
    request(requestOptions, (err, { statusCode }, body) => {
        if (statusCode !== 201) {
            showError(req, res, statusCode);
        }
    });
};

const showError = (req, res, status) => {
    let title = '';
    let content = '';
    if (status = 404) {
        title = '404, page not found';
        content = 'Oh dear, Looks like you can\'t find this page. Sorry.';
    } else {
        title = `${status}, something's wrong`;
        content = 'Something, somewhere, has gone just a little bit wrong.';
    }
    res.status(status);
    res.render('generic-text', {
        title,
        content
    });
};



module.exports = {
    sealsList,
    sealDetails,
    createNewSeal
};