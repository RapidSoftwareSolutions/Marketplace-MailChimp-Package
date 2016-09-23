const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

	// rpt bug
	req.body.args = _.clearArgs(req.body.args);

	let { 
		apiKey, 
		conversationId,
		fromEmail,
		subject,
		message,
		read,
		to="to" } = req.body.args;

	let r  = {
        callback     : "",
        contextWrites: {}
    };

	if(!apiKey || !conversationId || !fromEmail || !read) {
		_.echoBadEnd(r, to, res);
		return;
	}

	//get datacenter
	let dcarr = apiKey.split('-'),
		dc    = dcarr[dcarr.length-1] + '.';


	let body = {
		from_email: fromEmail,
		subject: subject,
		message: message,
		read: read
	}

	let options = {
		method: 'POST',
		url: `https://${dc}api.mailchimp.com/3.0/conversations/${conversationId}/messages`, 
		body: JSON.stringify(body)
	};

	return request(options, (err, response, body) => {
		if(!err && (response.statusCode == 204 || response.statusCode == 200)) {
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