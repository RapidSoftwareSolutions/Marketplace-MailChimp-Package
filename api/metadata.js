module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'MailChimp',
        "tagline": "MailChimp Package",
        "description": "The MailChimp Package can be used to build real time application based on the MailChimp platform.",
        'image': 'https://pbs.twimg.com/profile_images/709825689181147136/SdVd6iit.jpg',
        'repo': 'https://github.com/RapidSoftwareSolutions/marketplace-MailChimp-package',
        'accounts': {
            'domain': 'mailchimp.com',
            'credentials': [
                'apiKey',
            ]
        },
        'blocks': [{
            "name":"getAutomationsList",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "fields",
                    type: "String",
                    info: "A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.",
                },
                {
                    name: "excludeFields",
                    type: "String",
                    info: "A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.",
                }
            ], 
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }]
    })
};
