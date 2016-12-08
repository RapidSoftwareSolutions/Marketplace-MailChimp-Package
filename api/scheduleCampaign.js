const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

    // rpt bug
    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey, 
        campaignId,
        scheduleTime,
        timewarp,
        batchDelivery,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !scheduleTime) {
        _.echoBadEnd(r, to, res, 'apiKey, scheduleTime');
        return;
    }

    //get datacenter
    let dcarr = apiKey.split('-'),
        dc    = dcarr[dcarr.length-1] + '.';

    let body = {
        schedule_time: scheduleTime,
        timewarp: timewarp,
        batch_delivery: batchDelivery
    }

    let options = {
        method: 'POST',
        url: `https://${dc}api.mailchimp.com/3.0/campaigns/${campaignId}/actions/schedule`, 
        body: JSON.stringify(body)
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
    })
    .auth(null, null, true, apiKey);
}