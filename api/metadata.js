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
        }, {
            "name":"getAutomationInWorkflow",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "workflowId",
                    type: "String",
                    info: "The unique id for the Automation workflow.",
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
        }, {
            "name":"pauseAllEmails",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "workflowId",
                    type: "String",
                    info: "The unique id for the Automation workflow.",
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
        }, {
            "name":"startAllEmails",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "workflowId",
                    type: "String",
                    info: "The unique id for the Automation workflow.",
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
        }, {
            "name":"getAutomatedEmailsList",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "workflowId",
                    type: "String",
                    info: "The unique id for the Automation workflow.",
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
        }, {
            "name":"getWorkflowEmail",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "workflowId",
                    type: "String",
                    info: "The unique id for the Automation workflow.",
                },
                {
                    name: "emailId",
                    type: "String",
                    info: "The unique id for the Automation workflow email.",
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
        }, {
            "name":"pauseAutomatedEmail",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "workflowId",
                    type: "String",
                    info: "The unique id for the Automation workflow.",
                },
                {
                    name: "emailId",
                    type: "String",
                    info: "The unique id for the Automation workflow email.",
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
        }, {
            "name":"startAutomatedEmail",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "workflowId",
                    type: "String",
                    info: "The unique id for the Automation workflow.",
                },
                {
                    name: "emailId",
                    type: "String",
                    info: "The unique id for the Automation workflow email.",
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
        }, {
            "name":"addWorkflowEmailSubscriber",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "workflowId",
                    type: "String",
                    info: "The unique id for the Automation workflow.",
                },
                {
                    name: "emailId",
                    type: "String",
                    info: "The unique id for the Automation workflow email.",
                },
                {
                    name: "emailAddress",
                    type: "String",
                    info: "The unique id for the Automation workflow email.",
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
        }, {
            "name":"getEmailSubscriber",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "workflowId",
                    type: "String",
                    info: "The unique id for the Automation workflow.",
                },
                {
                    name: "emailId",
                    type: "String",
                    info: "The unique id for the Automation workflow email.",
                },
                {
                    name: "emailAddress",
                    type: "String",
                    info: "The unique id for the Automation workflow email.",
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
        }, {
            "name":"removeWorkflowSubscriber",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "workflowId",
                    type: "String",
                    info: "The unique id for the Automation workflow.",
                },
                {
                    name: "emailAddress",
                    type: "String",
                    info: "The list member’s email address.",
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
        }, {
            "name":"createCampaignFolder",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name to associate with the folder.",
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
        }, {
            "name":"getCampaignFolders",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
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
