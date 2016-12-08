const _       = require('../lib/functions');
const request = require('request');

module.exports = (req, res) => {

    // rpt bug
    req.body.args = _.clearArgs(req.body.args);

    let { 
        apiKey,
        conversationId,
        messageId,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(!apiKey || !conversationId || !messageId) {
        _.echoBadEnd(r, to, res, 'apiKey, conversationId, messageId');
        return;
    }

    //get datacenter
    let dcarr = apiKey.split('-'),
        dc    = dcarr[dcarr.length-1] + '.';

    let options = {
        url: `https://${dc}api.mailchimp.com/3.0/conversations/${conversationId}/messages/${message_id}`, 
        qs: { 
            apikey: apiKey
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