const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

	// rpt bug
	req.body.args = _.clearArgs(req.body.args);

	let { 
		apiKey, 
		beforeDateCreated, 
		sinceDateCreated, 
		beforeCampaignLastSent, 
		sinceCampaignLastSent, 
		email, 
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!apiKey) {
		_.echoBadEnd(r, to, res);
		return;
	}

	//get datacenter
	let dcarr = apiKey.split('-'),
		dc    = dcarr[dcarr.length-1] + '.';

	let options = {
		url: `https://${dc}api.mailchimp.com/3.0/lists`, 
		qs: { 
			apikey: apiKey,	
			before_date_created: beforeDateCreated, 
			since_date_created: sinceDateCreated, 
			before_campaign_last_sent: beforeCampaignLastSent, 
			since_campaign_last_sent: sinceCampaignLastSent, 
			email: email, 
		},
	};

	options.qs = _.clearArgs(options.qs);
	
	return request(options, (err, response, body) => {
		if(!err && response.statusCode == 200) {
    		r.contextWrites[to] = JSON.stringify(body);
            r.callback = 'success'; 
        } else {
            r.contextWrites[to] = JSON.stringify(err || body);
            r.callback = 'error';
        }

        res.status(200).send(r);
	});
}