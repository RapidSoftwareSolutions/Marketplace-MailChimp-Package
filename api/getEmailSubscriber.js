const _        = require('../lib/functions')
const md5      = require('md5');
const request  = require('request');

module.exports = (req, res) => {

    // rpt bug
    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey, 
        workflowId,
        emailId,
        emailAddress,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !workflowId || !emailAddress || !emailId) {
        _.echoBadEnd(r, to, res, 'apiKey, workflowId, emailAddress, emailId');
        return;
    }

    //get datacenter
    let dcarr = apiKey.split('-'),
        dc    = dcarr[dcarr.length-1] + '.';

    let options = {
        url: `/automations/${workflow_id}/emails/${emailId}/queue/${md5(emailAddress)}`,
        qs: { 
            apikey: apiKey,
        },
    }

    return request(options, (err, response, body) => {
        if(!err && response.statusCode == 200) {
            r.contextWrites[to] = JSON.parse(body);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = JSON.parse(err || body);
            r.callback = 'error';
        }

        res.status(200).send(r);
    });
}