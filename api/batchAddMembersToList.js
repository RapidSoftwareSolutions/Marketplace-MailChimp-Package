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
        if(typeof members == 'string') members = JSON.parse(members);
    } catch(e) {
        r.callback          = 'error';
        r.contextWrites[to] = {
             status_code: 'JSON_VALIDATION',
             status_msg: 'Syntax error. Incorrect input JSON. Please, check fields with JSON input.'
        }

        res.status(200).send(r);
        return;
    }

    if(!apiKey || !members) {
        _.echoBadEnd(r, to, res, 'apiKey, members');
        return;
    }

    //get datacenter
    let dcarr = apiKey.split('-'),
        dc    = dcarr[dcarr.length-1] + '.';

    updateExisting = updateExisting == 'true' ? true : false;

    let body = {
        update_existing: updateExisting,
        members: members
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