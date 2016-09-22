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
        }, {
            "name":"getCampaignFolder",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "folderId",
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
        }, {
            "name":"updateCampaignFolder",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "folderId",
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
            "name":"deleteCampaignFolder",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "folderId",
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
        }, {
            "name":"createCampaign",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "recipientsListId",
                    type: "String",
                    info: "The unique list id.",
                },
                {
                    name: "subjectLine", //*
                    type: "String",
                    info: "The subject line for the campaign.",
                },
                {
                    name: "title",
                    type: "String",
                    info: "The title of the campaign.",
                },
                {
                    name: "fromName", //*
                    type: "String",
                    info: "The ‘from’ name on the campaign (not an email address).",
                },
                {
                    name: "replyTo", //*
                    type: "String",
                    info: "The reply-to email address for the campaign.",
                },
                { 
                    name: "useConversation",
                    type: "String", // Bool
                    info: "The reply-to email address for the campaign.",
                },
                {
                    name: "toName",
                    type: "String",
                    info: "The campaign’s custom ‘To’ name.",
                },
                {
                    name: "folderId",
                    type: "String",
                    info: "If the campaign is listed in a folder, the id for that folder.",
                },
                {
                    name: "authenticate",
                    type: "String", // Bool
                    info: "Whether MailChimp authenticated the campaign. Defaults to true.",
                },
                {
                    name: "autoFooter",
                    type: "String", // Bool
                    info: "Automatically append MailChimp’s default footer to the campaign.",
                },
                {
                    name: "inlineCss",
                    type: "String", // Bool
                    info: "Automatically inline the CSS included with the campaign content.",
                },
                {
                    name: "autoTweet",
                    type: "String", // Bool
                    info: "Automatically tweet a link to the campaign archive page when the campaign is sent.",
                },
                {
                    name: "autoFbPost",
                    type: "Array",
                    info: "An array of Facebook page ids to auto-post to.",
                },
                {
                    name: "fbComments",
                    type: "String", // Bool
                    info: "Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.",
                },
                {
                    name: "variateSettingsWinnerCriteria", //*
                    type: "String",
                    info: "The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_critera is ignored. For Multivariate Campaigns with ‘manual’ as the winner_citeria, the winner must be chosen in the MailChimp web application. Possible Values: `opens`, `clicks`, `manual`, `total_revenue`",
                },
                {
                    name: "variateSettingsWaitTime",
                    type: "Number",
                    info: "The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.",
                },
                {
                    name: "variateSettingsTestSize",
                    type: "Number",
                    info: "The percentage of recipients to send the test combinations to, must be a value between 10 and 100.",
                },
                {
                    name: "variateSettingsSubjectLines",
                    type: "Array",
                    info: "The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.",
                },
                {
                    name: "variateSettingsSendTimes",
                    type: "Array",
                    info: "The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.",
                },
                {
                    name: "variateSettingsFromNames",
                    type: "Array",
                    info: "The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.",
                },
                {
                    name: "replyToAddresses",
                    type: "Array",
                    info: "The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.",
                },
                {
                    name: "trackingOpens",
                    type: "String", //Boolean
                    info: "",
                },
                {
                    name: "trackingHtmlClicks",
                    type: "String", //Boolean
                    info: ""
                },
                {
                    name: "trackingTextClicks",
                    type: "String", //Boolean
                    info: ""
                },
                {
                    name: "trackingGoalTracking",
                    type: "String", //Boolean
                    info: ""
                },
                {
                    name: "trackingEcomm360",
                    type: "String", //Boolean
                    info: ""
                },
                {
                    name: "trackingGoogleAnalytics",
                    type: "String",
                    info: ""
                },
                {
                    name: "trackingClicktale ",
                    type: "String",
                    info: ""
                },
                {
                    name: "trackingSalesforceCampaign ",
                    type: "String",
                    info: ""
                },
                {
                    name: "trackingSalesforceNotes ",
                    type: "String",
                    info: ""
                },
                {
                    name: "trackingHighriseCampaign",
                    type: "String",
                    info: ""
                },
                {
                    name: "trackingHighriseNotes",
                    type: "String",
                    info: ""
                },
                {
                    name: "trackingCapsuleNotes",
                    type: "String",
                    info: ""
                },
                {
                    name: "rssOptsFeedUrl",
                    type: "String",
                    info: ""
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
