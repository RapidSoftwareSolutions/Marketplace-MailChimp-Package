const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

	// rpt bug
	req.body.args = _.clearArgs(req.body.args);

	let { 
		apiKey, 
		listId,
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!apiKey) {
		_.echoBadEnd(r, to, res);
		return;
	}

	type   = _.array(type);
	status = _.array(status);

	//get datacenter
	let dcarr = apiKey.split('-'),
		dc    = dcarr[dcarr.length-1] + '.';

	let options = {
		url: `https://${dc}api.mailchimp.com/3.0/lists/${listId}/`, 
		qs: { 
			apikey: apiKey,
		},
	};

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