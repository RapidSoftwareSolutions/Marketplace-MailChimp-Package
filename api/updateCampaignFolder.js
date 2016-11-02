const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

	// rpt bug
	req.body.args = _.clearArgs(req.body.args);

	let { 
		apiKey, 
		folderId,
		name,
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!apiKey || !name || !folderId) {
		_.echoBadEnd(r, to, res);
		return;
	}

	//get datacenter
	let dcarr = apiKey.split('-'),
		dc    = dcarr[dcarr.length-1] + '.';

	let options = {
		method: 'PATCH',
		url: `https://${dc}api.mailchimp.com/3.0/campaign-folders/${folderId}`, 
		body: `{"name":"${name}"}`
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