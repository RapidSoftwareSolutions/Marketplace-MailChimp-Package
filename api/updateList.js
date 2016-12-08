const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

    // rpt bug
    req.body.args = _.clearArgs(req.body.args, false);

    let { 
        apiKey,
        name,
        listId,
        contactCompany,
        contactAddress1,
        contactAddress2,
        contactCity,
        contactState,
        contactZip,
        contactCountry,
        contactPhone,
        permissionReminder,
        useArchiveBar,
        campaignDefaultsFromName,
        campaignDefaultsFromEmail,
        campaignDefaultsSubject,
        campaignDefaultsLanguage,
        notifyOnSubscribe,
        notifyOnUnsubscribe,
        emailTypeOption,
        visibility,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(    !apiKey 
        || !listId
        || !name 
        || !contactCompany
        || !contactAddress1 
        || !contactCity
        || !contactState 
        || !contactCountry 
        || !permissionReminder
        || !campaignDefaultsFromEmail
        || !campaignDefaultsFromName
        || !campaignDefaultsSubject
        || !campaignDefaultsLanguage
        || !emailTypeOption) 
    {
        _.echoBadEnd(r, to, res, 
            'apiKey, listId, name, contactCountry, contactAddress1, contactCity, contactCountry, contactState, permissionReminder, campaignDefaultsFromEmail, campaignDefaultsFromName, campaignDefaultsSubject, campaignDefaultsLanguage, emailTypeOption');
        return;
    }

    //get datacenter
    let dcarr = apiKey.split('-'),
        dc    = dcarr[dcarr.length-1] + '.';

    useArchiveBar   = useArchiveBar   == 'true' ? true : false;
    emailTypeOption = emailTypeOption == 'true' ? true : false;

    let bodyOptions = {
        name: name,
        contact: {
            company: contactCompany,
            address1: contactAddress1,
            address2: contactAddress2,
            city: contactCity,
            state: contactState,
            zip: contactZip,
            country: contactCountry,
            phone: contactPhone,
        },
        permission_reminder: permissionReminder,
        use_archive_bar: useArchiveBar,
        campaign_defaults: {
            from_name: campaignDefaultsFromName,
            from_email: campaignDefaultsFromEmail,
            subject: campaignDefaultsSubject,
            language: campaignDefaultsLanguage
        },
        notify_on_subscribe: notifyOnSubscribe,
        notify_on_unsubscribe: notifyOnUnsubscribe,
        email_type_option: emailTypeOption,
        visibility: visibility
    };

    bodyOptions = _.clearArgs(bodyOptions, true);

    let options = {
        method: 'PATCH',
        url: `https://${dc}api.mailchimp.com/3.0/lists/${listId}`, 
        body: JSON.stringify(bodyOptions)
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