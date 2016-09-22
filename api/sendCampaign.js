const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

	// rpt bug
	req.body.args = _.clearArgs(req.body.args);

	let { 
		apiKey, 
		campaignId,
		scheduleTime,
		timewarpe,
		batchDelivery,
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!apiKey || !scheduleTime) {
		_.echoBadEnd(r, to, res);
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
		url: `https://${dc}api.mailchimp.com/3.0/campaigns/${campaignId}/actions/send`, 
		body: JSON.stringify(body);
	}

	return request(options, (err, response, body) => {
		if(!err && response.statusCode == 204) {
    		r.contextWrites[to] = JSON.stringify(body);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = JSON.stringify(err || body);
            r.callback = 'error';
        }

        res.status(200).send(r);
	})
	.auth(null, null, true, apiKey);
}