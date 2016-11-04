const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

    // rpt bug
    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey, 
        listId,
        updateExisting,
        members,
        to="to" 
    } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    try {
        var membersArr = JSON.parse(members);
    } catch(e) {
        _.echoBadEnd(r, to, res);
        return;
    }

    if(!apiKey || !members || membersArr == '[]') {
        _.echoBadEnd(r, to, res);
        return;
    }

    //get datacenter
    let dcarr = apiKey.split('-'),
        dc    = dcarr[dcarr.length-1] + '.';

    updateExisting = updateExisting == 'true' ? true : false;

    let body = {
        update_existing: updateExisting,
        members: membersArr
    }

    let options = {
        method: 'POST',
        url: `https://${dc}api.mailchimp.com/3.0/lists/${listId}`, 
        body: JSON.stringify(body)
    };

    return request(options, (err, response, body) => {
        if(!err && (response.statusCode == 204 || response.statusCode == 200)) {
            r.contextWrites[to] = JSON.parse(body);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = JSON.parse(err || body);
            r.callback = 'error';
        }

        res.status(200).send(r);
    })
    .auth(null, null, true, apiKey);
}