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
        'blocks': [
                {
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
                    name: "type",
                    type: "String",
                    info: "There are four types of campaigns you can create in MailChimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead.",
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
                    info: "Whether to track opens. Defaults to true. Cannot be set to false for variate campaigns.",
                },
                {
                    name: "trackingHtmlClicks",
                    type: "String", //Boolean
                    info: "Whether to track clicks in the HTML version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.",
                },
                {
                    name: "trackingTextClicks",
                    type: "String", //Boolean
                    info: "Whether to track clicks in the plain-text version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.",
                },
                {
                    name: "trackingGoalTracking",
                    type: "String", //Boolean
                    info: "Whether to enable Goal tracking.",
                },
                {
                    name: "trackingEcomm360",
                    type: "String", //Boolean
                    info: "Whether to enable eCommerce360 tracking.",
                },
                {
                    name: "trackingGoogleAnalytics",
                    type: "String",
                    info: "The custom slug for Google Analytics tracking (max of 50 bytes).",
                },
                {
                    name: "trackingClicktale ",
                    type: "String",
                    info: "The custom slug for ClickTale tracking (max of 50 bytes).",
                },
                {
                    name: "trackingSalesforceCampaign ",
                    type: "String",
                    info: "Create a campaign in a connected Salesforce account.",
                },
                {
                    name: "trackingSalesforceNotes ",
                    type: "String",
                    info: "Update contact notes for a campaign based on subscriber email addresses.",
                },
                {
                    name: "trackingHighriseCampaign",
                    type: "String",
                    info: "Create a campaign in a connected Highrise account.",
                },
                {
                    name: "trackingHighriseNotes",
                    type: "String",
                    info: "Update contact notes for a campaign based on subscriber email addresses.",
                },
                {
                    name: "trackingCapsuleNotes",
                    type: "String",
                    info: "Update contact notes for a campaign based on subscriber email addresses.",
                },
                {
                    name: "rssOptsFeedUrl",
                    type: "String",
                    info: "The URL for the RSS feed.",
                },
                {
                    name: "rssOptsFrequency",
                    type: "String",
                    info: "The frequency of the RSS Campaign.",
                },
                {
                    name: "rssOptsScheduleHour",
                    type: "String",
                    info: "The hour to send the campaign in local time. Acceptable hours are 0-23. For example, ‘4’ would be 4am in your account’s default time zone.",
                },
                {
                    name: "rssOptsScheduleDailySendSunday",
                    type: "String",
                    info: "Sends the daily RSS Campaign on Sundays.",
                },
                {
                    name: "rssOptsScheduleDailySendMonday",
                    type: "String",
                    info: "TSends the daily RSS Campaign on Mondays.",
                },
                                {
                    name: "rssOptsScheduleDailySendTuesday",
                    type: "String",
                    info: "Sends the daily RSS Campaign on Tuesdays.",
                },
                                {
                    name: "rssOptsScheduleDailySendWednesday",
                    type: "String",
                    info: "Sends the daily RSS Campaign on Wednesdays.",
                },
                                {
                    name: "rssOptsScheduleDailySendThursday",
                    type: "String",
                    info: "Sends the daily RSS Campaign on Thursdays.",
                },
                                {
                    name: "rssOptsScheduleDailySendFriday",
                    type: "String",
                    info: "Sends the daily RSS Campaign on Fridays.",
                },
                                {
                    name: "rssOptsScheduleDailySendSaturday",
                    type: "String",
                    info: "Sends the daily RSS Campaign on Saturdays.",
                },
                {
                    name: "rssOptsScheduleWeeklySendDay",
                    type: "String",
                    info: "The day of the week to send a weekly RSS Campaign.",
                },
                {
                    name: "rssOptsScheduleMonthlySendDate",
                    type: "String",
                    info: "The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where ‘0’ is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.",
                },
                {
                    name: "rssOptsLastSent",
                    type: "String",
                    info: "The date the campaign was last sent.",
                },
                {
                    name: "rssOptsConstrainRssImg",
                    type: "String",
                    info: "Whether to add CSS to images in the RSS feed to constrain their width in campaigns.",
                },
                {
                    name: "socialCardImageUrl",
                    type: "String",
                    info: "The url for the header image for the card.",
                },
                {
                    name: "socialCardDescription",
                    type: "String",
                    info: "A short summary of the campaign to display.",
                },
                {
                    name: "socialCardTitle",
                    type: "String",
                    info: "The title for the card. Typically the subject line of the campaign.",
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
            "name":"getCampaigns",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "type",
                    type: "String",
                    info: "The campaign type.",
                },
                {
                    name: "status",
                    type: "String",
                    info: "The status of the campaign.",
                },
                {
                    name: "beforeSendTime",
                    type: "String",
                    info: "Restrict the response to campaigns sent before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.",
                },
                {
                    name: "sinceSendTime",
                    type: "String",
                    info: "Restrict the response to campaigns sent after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.",
                },
                {
                    name: "beforeCreateTime",
                    type: "String",
                    info: "Restrict the response to campaigns created before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.",
                },
                {
                    name: "sinceCreateTime",
                    type: "String",
                    info: "Restrict the response to campaigns created after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "folderId",
                    type: "String",
                    info: "The unique folder id.",
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
            "name":"getCampaign",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The campaign id.",
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
        },{
            "name":"updateCampaign",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
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
                    info: "Whether to track opens. Defaults to true. Cannot be set to false for variate campaigns.",
                },
                {
                    name: "trackingHtmlClicks",
                    type: "String", //Boolean
                    info: "Whether to track clicks in the HTML version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.",
                },
                {
                    name: "trackingTextClicks",
                    type: "String", //Boolean
                    info: "Whether to track clicks in the plain-text version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.",
                },
                {
                    name: "trackingGoalTracking",
                    type: "String", //Boolean
                    info: "Whether to enable Goal tracking.",
                },
                {
                    name: "trackingEcomm360",
                    type: "String", //Boolean
                    info: "Whether to enable eCommerce360 tracking.",
                },
                {
                    name: "trackingGoogleAnalytics",
                    type: "String",
                    info: "The custom slug for Google Analytics tracking (max of 50 bytes).",
                },
                {
                    name: "trackingClicktale ",
                    type: "String",
                    info: "The custom slug for ClickTale tracking (max of 50 bytes).",
                },
                {
                    name: "trackingSalesforceCampaign ",
                    type: "String",
                    info: "Create a campaign in a connected Salesforce account.",
                },
                {
                    name: "trackingSalesforceNotes ",
                    type: "String",
                    info: "Update contact notes for a campaign based on subscriber email addresses.",
                },
                {
                    name: "trackingHighriseCampaign",
                    type: "String",
                    info: "Create a campaign in a connected Highrise account.",
                },
                {
                    name: "trackingHighriseNotes",
                    type: "String",
                    info: "Update contact notes for a campaign based on subscriber email addresses.",
                },
                {
                    name: "trackingCapsuleNotes",
                    type: "String",
                    info: "Update contact notes for a campaign based on subscriber email addresses.",
                },
                {
                    name: "rssOptsFeedUrl",
                    type: "String",
                    info: "The URL for the RSS feed.",
                },
                {
                    name: "rssOptsFrequency",
                    type: "String",
                    info: "The frequency of the RSS Campaign.",
                },
                {
                    name: "rssOptsScheduleHour",
                    type: "String",
                    info: "The hour to send the campaign in local time. Acceptable hours are 0-23. For example, ‘4’ would be 4am in your account’s default time zone.",
                },
                {
                    name: "rssOptsScheduleDailySendSunday",
                    type: "String",
                    info: "Sends the daily RSS Campaign on Sundays.",
                },
                {
                    name: "rssOptsScheduleDailySendMonday",
                    type: "String",
                    info: "TSends the daily RSS Campaign on Mondays.",
                },
                                {
                    name: "rssOptsScheduleDailySendTuesday",
                    type: "String",
                    info: "Sends the daily RSS Campaign on Tuesdays.",
                },
                                {
                    name: "rssOptsScheduleDailySendWednesday",
                    type: "String",
                    info: "Sends the daily RSS Campaign on Wednesdays.",
                },
                                {
                    name: "rssOptsScheduleDailySendThursday",
                    type: "String",
                    info: "Sends the daily RSS Campaign on Thursdays.",
                },
                                {
                    name: "rssOptsScheduleDailySendFriday",
                    type: "String",
                    info: "Sends the daily RSS Campaign on Fridays.",
                },
                                {
                    name: "rssOptsScheduleDailySendSaturday",
                    type: "String",
                    info: "Sends the daily RSS Campaign on Saturdays.",
                },
                {
                    name: "rssOptsScheduleWeeklySendDay",
                    type: "String",
                    info: "The day of the week to send a weekly RSS Campaign.",
                },
                {
                    name: "rssOptsScheduleMonthlySendDate",
                    type: "String",
                    info: "The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where ‘0’ is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.",
                },
                {
                    name: "rssOptsLastSent",
                    type: "String",
                    info: "The date the campaign was last sent.",
                },
                {
                    name: "rssOptsConstrainRssImg",
                    type: "String",
                    info: "Whether to add CSS to images in the RSS feed to constrain their width in campaigns.",
                },
                {
                    name: "socialCardImageUrl",
                    type: "String",
                    info: "The url for the header image for the card.",
                },
                {
                    name: "socialCardDescription",
                    type: "String",
                    info: "A short summary of the campaign to display.",
                },
                {
                    name: "socialCardTitle",
                    type: "String",
                    info: "The title for the card. Typically the subject line of the campaign.",
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
            "name":"deleteCampaign",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
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
            "name":"cancelCampaign",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
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
            "name":"replicateCampaign",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
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
            "name":"resumeRSSCampaign",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
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
            "name":"scheduleCampaign",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
                },
                {
                    name: "scheduleTime",
                    type: "String",
                    info: "The date and time in UTC to schedule the campaign for delivery. Campaigns may only be scheduled to send on the quarter-hour (:00, :15, :30, :45).",
                },
                {
                    name: "timewarp",
                    type: "String",
                    info: "Choose whether the campaign should use Timewarp when sending. Campaigns scheduled with Timewarp are localized based on the recipients’ time zones. For example, a Timewarp campaign with a schedule_time of 13:00 will be sent to each recipient at 1:00pm in their local time. Cannot be set to true for campaigns using Batch Delivery.",
                },
                {
                    name: "batchDeliveryBatchDelay",
                    type: "String",
                    info: "The delay, in minutes, between batches.",
                },
                {
                    name: "batchDeliveryBatchCount",
                    type: "String",
                    info: "The number of batches for the campaign send.",
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
            "name":"sendCampaign",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
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
            "name":"sendTestEmail",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
                },
                {
                    name: "testEmails",
                    type: "String",
                    info: "The unique id for the campaign.",
                },
                {
                    name: "sendType",
                    type: "String",
                    info: "The unique id for the campaign.",
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
            "name":"unscheduleCampaign",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
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
            "name":"getCampaignContent",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
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
            "name":"getSendChecklist",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
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
            "name":"getConversationsList",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
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
            "name":"getConversation",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "conversationId",
                    type: "String",
                    info: "The unique id for the campaign.",
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
            "name":"sendConversationMessage",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "conversationId",
                    type: "String",
                    info: "The unique id for the conversation.",
                },
                {
                    name: "fromEmail",
                    type: "String",
                    info: "A label representing the email of the sender of this message",
                },
                {
                    name: "subject",
                    type: "String",
                    info: "The subject of this message",
                },
                {
                    name: "message",
                    type: "String",
                    info: "The plain-text content of the message",
                },
                {
                    name: "read",
                    type: "String",
                    info: "Whether this message has been marked as read",
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
            "name":"getConversationMessages",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "conversationId",
                    type: "String",
                    info: "The unique id for the campaign.",
                },
                {
                    name: "isRead",
                    type: "String",
                    info: "Whether a conversation message has been marked as read.",
                },
                {
                    name: "beforeTimestamp",
                    type: "String",
                    info: "Restrict the response to messages created before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.",
                },
                {
                    name: "sinceTimestamp",
                    type: "String",
                    info: "Restrict the response to messages created after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.",
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
            "name":"getConversationMessage",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "conversationId",
                    type: "String",
                    info: "The unique id for the campaign.",
                },
                {
                    name: "messageId ",
                    type: "String",
                    info: "Whether a conversation message has been marked as read.",
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
            "name":"createList",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "The name of the list.",
                },
                {
                    name: "contactCompany",
                    type: "String",
                    info: "The company name for the list.",
                },
                {
                    name: "contactAddress1",
                    type: "String",
                    info: "The street address for the list contact.",
                },
                {
                    name: "contactAddress2",
                    type: "String",
                    info: "The street address for the list contact.",
                },
                {
                    name: "contactCity",
                    type: "String",
                    info: "The city for the list contact.",
                },
                {
                    name: "contactState",
                    type: "String",
                    info: "The state for the list contact.",
                },
                {
                    name: "contactZip",
                    type: "String",
                    info: "The postal or zip code for the list contact.",
                },
                {
                    name: "contactCountry",
                    type: "String",
                    info: "A two-character ISO3166 country code. Defaults to US if invalid.",
                },
                {
                    name: "contactPhone",
                    type: "String",
                    info: "The phone number for the list contact.",
                },
                {
                    name: "permissionReminder",
                    type: "String",
                    info: "The permission reminder for the list.",
                },
                {
                    name: "useArchiveBar",
                    type: "String",
                    info: "Whether campaigns for this list use the Archive Bar in archives by default.",
                },
                {
                    name: "campaignDefaultsFromName",
                    type: "String",
                    info: "The default from name for campaigns sent to this list.",
                },
                {
                    name: "campaignDefaultsFromEmail",
                    type: "String",
                    info: "The default from email for campaigns sent to this list.",
                },
                {
                    name: "campaignDefaultsSubject",
                    type: "String",
                    info: "The default subject line for campaigns sent to this list.",
                },
                {
                    name: "campaignDefaultsLanguage",
                    type: "String",
                    info: "The default language for this lists’s forms.",
                },
                {
                    name: "notifyOnSubscribe",
                    type: "String",
                    info: "The email address to send subscribe notifications to.",
                },
                {
                    name: "notifyOnUnsubscribe",
                    type: "String",
                    info: "The email address to send unsubscribe notifications to.",
                },
                {
                    name: "emailTypeOption",
                    type: "String",
                    info: "Whether the list supports multiple formats for emails. When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup.",
                },
                {
                    name: "visibility",
                    type: "String",
                    info: "Whether this list is public or private.",
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
            "name":"batchAddMembersToList",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "members",
                    type: "JSON",
                    info: "",
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
            "name":"getLists",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "beforeDateCreated",
                    type: "String",
                    info: "Restrict response to lists created before the set date.",
                },
                {
                    name: "sinceDateCreated",
                    type: "String",
                    info: "Restrict results to lists created after the set date.",
                },
                {
                    name: "beforeCampaignLastSent",
                    type: "String",
                    info: "Restrict results to lists created before the last campaign send date.",
                },
                {
                    name: "sinceCampaignLastSent",
                    type: "String",
                    info: "Restrict results to lists created after the last campaign send date.",
                },
                {
                    name: "email",
                    type: "String",
                    info: "Restrict results to lists that include a specific subscriber’s email address.",
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
            "name":"getList",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
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
            "name":"deleteList",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
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
            "name":"updateList",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "",
                },
                {
                    name: "name",
                    type: "String",
                    info: "The name of the list.",
                },
                {
                    name: "contactCompany",
                    type: "String",
                    info: "The company name for the list.",
                },
                {
                    name: "contactAddress1",
                    type: "String",
                    info: "The street address for the list contact.",
                },
                {
                    name: "contactAddress2",
                    type: "String",
                    info: "The street address for the list contact.",
                },
                {
                    name: "contactCity",
                    type: "String",
                    info: "The city for the list contact.",
                },
                {
                    name: "contactState",
                    type: "String",
                    info: "The state for the list contact.",
                },
                {
                    name: "contactZip",
                    type: "String",
                    info: "The postal or zip code for the list contact.",
                },
                {
                    name: "contactCountry",
                    type: "String",
                    info: "A two-character ISO3166 country code. Defaults to US if invalid.",
                },
                {
                    name: "contactPhone",
                    type: "String",
                    info: "The phone number for the list contact.",
                },
                {
                    name: "permissionReminder",
                    type: "String",
                    info: "The permission reminder for the list.",
                },
                {
                    name: "useArchiveBar",
                    type: "String",
                    info: "Whether campaigns for this list use the Archive Bar in archives by default.",
                },
                {
                    name: "campaignDefaultsFromName",
                    type: "String",
                    info: "The default from name for campaigns sent to this list.",
                },
                {
                    name: "campaignDefaultsFromEmail",
                    type: "String",
                    info: "The default from email for campaigns sent to this list.",
                },
                {
                    name: "campaignDefaultsSubject",
                    type: "String",
                    info: "The default subject line for campaigns sent to this list.",
                },
                {
                    name: "campaignDefaultsLanguage",
                    type: "String",
                    info: "The default language for this lists’s forms.",
                },
                {
                    name: "notifyOnSubscribe",
                    type: "String",
                    info: "The email address to send subscribe notifications to.",
                },
                {
                    name: "notifyOnUnsubscribe",
                    type: "String",
                    info: "The email address to send unsubscribe notifications to.",
                },
                {
                    name: "emailTypeOption",
                    type: "String",
                    info: "Whether the list supports multiple formats for emails. When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup.",
                },
                {
                    name: "visibility",
                    type: "String",
                    info: "Whether this list is public or private.",
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
        },{
            "name":"getAbuseReportsList",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
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
        },{
            "name":"getAbuseReport",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "reportId",
                    type: "String",
                    info: "The unique id for the report.",
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
        },{
            "name":"getListActivity",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
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
        },{
            "name":"createInterestCategory",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "title",
                    type: "String",
                    info: "The text description of this category. This field appears on signup forms and is often phrased as a question.",
                },
                {
                    name: "displayOrder",
                    type: "String",
                    info: "The order that the categories are displayed in the list. Lower numbers display first.",
                },
                {
                    name: "type",
                    type: "String",
                    info: "Determines how this category’s interests are displayed on signup forms.",
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
        },{
            "name":"getInterestCategories",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
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
                },
                {
                    name: "count",
                    type: "String",
                    info: "The number of records to return.",
                },
                {
                    name: "offset",
                    type: "String",
                    info: "The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.",
                },
                {
                    name: "type",
                    type: "String",
                    info: "Restrict results a type of interest group",
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
        },{
            "name":"getInterestCategory",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "interestCategoryId",
                    type: "String",
                    info: "The unique id for the interest category.",
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
        },{
            "name":"getTopEmailClients",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
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
        },{
            "name":"getListGrowthHistory",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
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
                },
                {
                    name: "count",
                    type: "String",
                    info: "The number of records to return.",
                },
                {
                    name: "offset",
                    type: "String",
                    info: "The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.",
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
        },{
            "name":"getMonthListGrowth",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "month",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "fields",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "excludeFields",
                    type: "String",
                    info: "The unique id for the list.",
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
            "name":"updateInterestCategory",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "interestCategoryId",
                    type: "String",
                    info: "The unique id for the interest category.",
                },
                {
                    name: "title",
                    type: "String",
                    info: "The text description of this category. This field appears on signup forms and is often phrased as a question.",
                },
                {
                    name: "displayOrder",
                    type: "String",
                    info: "The order that the categories are displayed in the list. Lower numbers display first.",
                },
                {
                    name: "type",
                    type: "String",
                    info: "Determines how this category’s interests are displayed on signup forms.",
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
        },{
            "name":"createInterest",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "interestCategoryId",
                    type: "String",
                    info: "The unique id for the interest category.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "The name of the interest. This can be shown publicly on a subscription form.",
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
        },{
            "name":"getAllInterests",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "interestCategoryId",
                    type: "String",
                    info: "The unique id for the interest category.",
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
                },
                {
                    name: "count",
                    type: "String",
                    info: "The number of records to return.",
                },
                {
                    name: "offset",
                    type: "String",
                    info: "The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.",
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
        },{
            "name":"getInterests",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "interestCategoryId",
                    type: "String",
                    info: "The unique id for the interest category.",
                },
                {
                    name: "interestId",
                    type: "String",
                    info: "The specific interest or group name.",
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
        },{
            "name":"updateInterests",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "interestCategoryId",
                    type: "String",
                    info: "The unique id for the interest category.",
                },
                {
                    name: "interestId",
                    type: "String",
                    info: "The specific interest or group name.",
                },
                {
                    name: "newListId",
                    type: "String",
                    info: "The ID for the list that this interest belongs to.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "The name of the interest. This can be shown publicly on a subscription form.",
                },
                {
                    name: "subscriberCount",
                    type: "String",
                    info: "The number of subscribers associated with this interest.",
                },
                {
                    name: "displayOrder",
                    type: "String",
                    info: "The display order for interests.",
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
        },{
            "name":"deleteInterests",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: "The unique id for the list.",
                },
                {
                    name: "interestCategoryId",
                    type: "String",
                    info: "The unique id for the interest category.",
                },
                {
                    name: "interestId",
                    type: "String",
                    info: "The specific interest or group name.",
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
        },{
            "name":"setCampaignContentHTML",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
                },
                {
                    name: "plainText",
                    type: "String",
                    info: "The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.",
                },
                {
                    name: "html",
                    type: "String",
                    info: "The raw HTML for the campaign.",
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
        },{
            "name":"setCampaignContentHTML",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
                },
                {
                    name: "plainText",
                    type: "String",
                    info: "The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.",
                },
                {
                    name: "html",
                    type: "String",
                    info: "The raw HTML for the campaign.",
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
        },{
            "name":"setCampaignContentFromURL",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
                },
                {
                    name: "plainText",
                    type: "String",
                    info: "The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.",
                },
                {
                    name: "url",
                    type: "String",
                    info: "When importing a campaign, the URL where the HTML lives.",
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
        },{
            "name":"setCampaignContentFromTemplate",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
                },
                {
                    name: "templateId",
                    type: "String",
                    info: "The id of the template to use.",
                },
                {
                    name: "templateSections",
                    type: "String",
                    info: "Content for the sections of the template. Each key should be the unique mc:edit area name from the template.",
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
        },
        {
            "name":"addMember",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "emailType",
                    type: "String",
                    info: "Type of email this member asked to get (‘html’ or ‘text’).",
                },
                {
                    name: "status",
                    type: "String",
                    info: "Subscriber’s current status.",
                },
                {
                    name: "mergeFields",
                    type: "String",
                    info: "An individual merge var and value for a member.",
                },
                {
                    name: "interests",
                    type: "String",
                    info: "The key of this object’s properties is the ID of the interest in question.",
                },
                {
                    name: "language",
                    type: "String",
                    info: "If set/detected, the subscriber’s language.",
                },
                {
                    name: "vip",
                    type: "String",
                    info: "VIP status for subscriber.",
                },
                {
                    name: "locationLatitude",
                    type: "String",
                    info: "The location latitude.",
                },
                {
                    name: "locationLongtitude",
                    type: "String",
                    info: "The location longitude.",
                },
                {
                    name: "ipSignup",
                    type: "String",
                    info: "IP address the subscriber signed up from.",
                },
                {
                    name: "timestampSignup",
                    type: "String",
                    info: "The date and time the subscriber signed up for the list.",
                },
                {
                    name: "ipOpt",
                    type: "String",
                    info: "The IP address the subscriber used to confirm their opt-in status.",
                },
                {
                    name: "timestampOpt",
                    type: "String",
                    info: "The date and time the subscribe confirmed their opt-in status.",
                },
                {
                    name: "emailAddress",
                    type: "String",
                    info: "Email address for a subscriber.",
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
        },{
            "name":"getMembers",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
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
                },
                {
                    name: "count",
                    type: "String",
                    info: "The number of records to return.",
                },
                {
                    name: "offset",
                    type: "String",
                    info: "The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.",
                },
                {
                    name: "emailType",
                    type: "String",
                    info: "The email type.",
                },
                {
                    name: "status",
                    type: "String",
                    info: "The subscriber’s status.",
                },
                {
                    name: "sinceTimestampOpt",
                    type: "String",
                    info: "Restrict results to subscribers who opted-in after the set timeframe.",
                },
                {
                    name: "beforeTimestampOpt",
                    type: "String",
                    info: "Restrict results to subscribers who opted-in before the set timeframe.",
                },
                {
                    name: "sinceLastChanged",
                    type: "String",
                    info: "Restrict results to subscribers whose information changed after the set timeframe.",
                },
                {
                    name: "beforeLastChanged",
                    type: "String",
                    info: "Restrict results to subscribers whose information changed before the set timeframe.",
                },
                {
                    name: "uniqueEmailId",
                    type: "String",
                    info: "A unique identifier for the email address across all MailChimp lists. This parameter can be found in any links with Ecommerce Tracking enabled.",
                },
                {
                    name: "vipOnly",
                    type: "String",
                    info: "A filter to return only the list’s VIP members. Passing true will restrict results to VIP list members, passing false will return all list members.",
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
        },{
            "name":"getMembers",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "subscriberHash",
                    type: "String",
                    info: "The MD5 hash of the lowercase version of the list member’s email address.",
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
        },{
            "name":"updateMember",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "subscriberHash",
                    type: "String",
                    info: "The MD5 hash of the lowercase version of the list member’s email address.",
                },
                {
                    name: "emailType",
                    type: "String",
                    info: "Type of email this member asked to get (‘html’ or ‘text’).",
                },
                {
                    name: "status",
                    type: "String",
                    info: "Subscriber’s current status.",
                },
                {
                    name: "mergeFields",
                    type: "String",
                    info: "An individual merge var and value for a member.",
                },
                {
                    name: "interests",
                    type: "String",
                    info: "The key of this object’s properties is the ID of the interest in question.",
                },
                {
                    name: "language",
                    type: "String",
                    info: "If set/detected, the subscriber’s language.",
                },
                {
                    name: "vip",
                    type: "String",
                    info: "VIP status for subscriber.",
                },
                {
                    name: "locationLatitude",
                    type: "String",
                    info: "The location latitude.",
                },
                {
                    name: "locationLongtitude",
                    type: "String",
                    info: "The location longitude.",
                },
                {
                    name: "ipSignup",
                    type: "String",
                    info: "IP address the subscriber signed up from.",
                },
                {
                    name: "timestampSignup",
                    type: "String",
                    info: "The date and time the subscriber signed up for the list.",
                },
                {
                    name: "ipOpt",
                    type: "String",
                    info: "The IP address the subscriber used to confirm their opt-in status.",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "The date and time the subscribe confirmed their opt-in status.",
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
        },{
            "name":"deleteMember",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "subscriberHash",
                    type: "String",
                    info: "The MD5 hash of the lowercase version of the list member’s email address.",
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
        },{
            "name":"getMemberActivity",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "subscriberHash",
                    type: "String",
                    info: "The MD5 hash of the lowercase version of the list member’s email address.",
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
        },{
            "name":"getMemberGoals",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "subscriberHash",
                    type: "String",
                    info: "The MD5 hash of the lowercase version of the list member’s email address.",
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
        },{
            "name":"addNote",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "subscriberHash",
                    type: "String",
                    info: "The MD5 hash of the lowercase version of the list member’s email address.",
                },
                {
                    name: "note",
                    type: "String",
                    info: "The content of the note.",
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
        },{
            "name":"getNote",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "subscriberHash",
                    type: "String",
                    info: "The MD5 hash of the lowercase version of the list member’s email address.",
                },
                {
                    name: "noteId",
                    type: "String",
                    info: "The content of the note.",
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
        },{
            "name":"updateNote",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "subscriberHash",
                    type: "String",
                    info: "The MD5 hash of the lowercase version of the list member’s email address.",
                },
                {
                    name: "noteId",
                    type: "String",
                    info: "The content of the note.",
                },
                {
                    name: "note",
                    type: "String",
                    info: "The content of the note.",
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
        },{
            "name":"deleteNote",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "subscriberHash",
                    type: "String",
                    info: "The MD5 hash of the lowercase version of the list member’s email address.",
                },
                {
                    name: "noteId",
                    type: "String",
                    info: "The content of the note.",
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
        },{
            "name":"addMergeField",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "tag",
                    type: "String",
                    info: "The tag used in MailChimp campaigns and for the /members endpoint.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "The name of the merge field.",
                },
                {
                    name: "required",
                    type: "String",
                    info: "The boolean value if the merge field is required.",
                },
                {
                    name: "defaultValue",
                    type: "String",
                    info: "The default value for the merge field if null.",
                },
                {
                    name: "public",
                    type: "String",
                    info: "Whether the merge field is displayed on the signup form.",
                },
                {
                    name: "displayOrder",
                    type: "String",
                    info: "The order that the merge field displays on the list signup form.",
                },
                {
                    name: "optionsDefaultCountry",
                    type: "String",
                    info: "In an address field, the default country code if none supplied.",
                },
                {
                    name: "optionsPhoneFormat",
                    type: "String",
                    info: "In a phone field, the phone number type: US or International.",
                },
                {
                    name: "optionsDateFormat",
                    type: "String",
                    info: "In a date or birthday field, the format of the date.",
                },
                {
                    name: "optionsChoices",
                    type: "String",
                    info: "In a radio or dropdown non-group field, the available options for members to pick from.",
                },
                {
                    name: "optionsSize",
                    type: "String",
                    info: "In a text field, the default length of the text field.",
                },
                {
                    name: "helpText",
                    type: "String",
                    info: "Extra text to help the subscriber fill out the form.",
                },
                {
                    name: "type",
                    type: "String",
                    info: "The type for the merge field.",
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
        },{
            "name":"addSegment",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "The name of the segment.",
                },
                {
                    name: "staticSegment",
                    type: "String",
                    info: "An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. Passing an empty array will create a static segment without any subscribers. This field cannot be provided with the options field.",
                },
                {
                    name: "optionsMatch",
                    type: "String",
                    info: "Match type.",
                },
                {
                    name: "optionsConditionsConditionType",
                    type: "String",
                    info: "The type of segment, for example: date, language, Mandrill, static, and more.",
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
        },{
            "name":"getAllSegments",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
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
                },
                {
                    name: "count",
                    type: "String",
                    info: "The number of records to return.",
                },
                {
                    name: "offset",
                    type: "String",
                    info: "The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.",
                },
                {
                    name: "type",
                    type: "String",
                    info: "Limit results based on segment type.",
                },
                {
                    name: "sinceCreatedAt",
                    type: "String",
                    info: "Restrict results to segments created after the set time.",
                },
                {
                    name: "beforeCreatedAt",
                    type: "String",
                    info: "Restrict results to segments created before the set time.",
                },
                {
                    name: "sinceUpdatedAt",
                    type: "String",
                    info: "Restrict results to segments update after the set time.",
                },
                {
                    name: "beforeUpdatedAt",
                    type: "String",
                    info: "Restrict results to segments update before the set time.",
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
        },{
            "name":"getSegment",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "segmentId",
                    type: "String",
                    info: "The unique id for the segment.",
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
        },{
            "name":"updateSegment",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "segmentId",
                    type: "String",
                    info: "The unique id for the segment.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "The name of the segment.",
                },
                {
                    name: "staticSegment",
                    type: "String",
                    info: "An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. Passing an empty array will create a static segment without any subscribers. This field cannot be provided with the options field.",
                },
                {
                    name: "optionsMatch",
                    type: "String",
                    info: "Match type.",
                },
                {
                    name: "optionsConditionsConditionType",
                    type: "String",
                    info: "An array of segment conditions.",
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
        },{
            "name":"deleteSegment",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "segmentId",
                    type: "String",
                    info: "The unique id for the segment.",
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
        },{
            "name":"addStaticSegmentMember",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "segmentId",
                    type: "String",
                    info: "The unique id for the segment.",
                },
                {
                    name: "emailAddress",
                    type: "String",
                    info: "Email address for a subscriber.",
                },
                {
                    name: "status",
                    type: "String",
                    info: "Subscriber’s current status.",
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
        },{
            "name":"getAllMembers",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "segmentId",
                    type: "String",
                    info: "The unique id for the segment.",
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
                },
                {
                    name: "count",
                    type: "String",
                    info: "The number of records to return.",
                },
                {
                    name: "offset",
                    type: "String",
                    info: "The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.",
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
        },{
            "name":"deleteStaticSegmentMember",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "segmentId",
                    type: "String",
                    info: "The unique id for the segment.",
                },
                {
                    name: "subscriberHash",
                    type: "String",
                    info: "The MD5 hash of the lowercase version of the list member’s email address.",
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
        },{
            "name":"addSignupForm",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "headerImageUrl",
                    type: "String",
                    info: "Header image URL.",
                },
                {
                    name: "headerText",
                    type: "String",
                    info: "Header text.",
                },
                {
                    name: "headerImageWidth",
                    type: "String",
                    info: "Image width, in pixels.",
                },
                {
                    name: "headerImageHeight",
                    type: "String",
                    info: "Image height, in pixels.",
                },
                {
                    name: "headerImageAlt",
                    type: "String",
                    info: "Alt text for the image.",
                },
                {
                    name: "headerImageLink",
                    type: "String",
                    info: "The URL that the header image will link to.",
                },
                {
                    name: "headerImageAlign",
                    type: "String",
                    info: "Image alignment.",
                },
                {
                    name: "headerImageBorderWidth",
                    type: "String",
                    info: "Image border width.",
                },
                {
                    name: "headerImageBorderStyle",
                    type: "String",
                    info: "Image border style.",
                },
                {
                    name: "headerImageBorderColor",
                    type: "String",
                    info: "Image border color.",
                },
                {
                    name: "headerImageTarget",
                    type: "String",
                    info: "Image link target.",
                },
                {
                    name: "contentsSection",
                    type: "String",
                    info: "The content section name.",
                },
                {
                    name: "contentsValue",
                    type: "String",
                    info: "The content section text.",
                },
                {
                    name: "styleSelector",
                    type: "String",
                    info: "A string that identifies the element selector.",
                },
                {
                    name: "styleOptionsProperty",
                    type: "String",
                    info: "A string that identifies the property.",
                },
                {
                    name: "styleOptionsValue",
                    type: "String",
                    info: "A string that identifies value of the property.",
                },
                {
                    name: "signupFormUrl",
                    type: "String",
                    info: "Signup form URL.",
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
        },{
            "name":"getSignupForm",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
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
        },{
            "name":"createTwitterLeadGenerationCard",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "id",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "name",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "title",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "ctaText",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "privacyPolicyUrl",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "customKeyName",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "imageUrl",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "twitterCardId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "twitterAccountId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "listIdOpt",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "previewUrl",
                    type: "String",
                    info: " The unique id for the list.",
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
        },{
            "name":"getAllTwitterLeadGenerationCards",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
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
        },{
            "name":"getTwitterLeadGenerationCard",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "twitterCardId",
                    type: "String",
                    info: " The unique ID for the Twitter Lead Generation Card.",
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
        },{
            "name":"createWebhook",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "url",
                    type: "String",
                    info: "A valid URL for the Webhook.",
                },
                {
                    name: "eventsSubscribe",
                    type: "String",
                    info: "Optional: Whether the webhook is triggered when a list subscriber is added.",
                },
                {
                    name: "eventsUnsubscribe",
                    type: "String",
                    info: "Optional: Whether the webhook is triggered when a list member unsubscribes.",
                },
                {
                    name: "eventsProfile",
                    type: "String",
                    info: "Optional: Whether the webhook is triggered when a subscriber’s profile is updated.",
                },
                {
                    name: "eventsCleaned",
                    type: "String",
                    info: "Optional: Whether the webhook is triggered when a subscriber’s email address is cleaned from the list.",
                },
                {
                    name: "eventsUpemail",
                    type: "String",
                    info: "Optional: Whether the webhook is triggered when a subscriber’s email address is changed.",
                },
                {
                    name: "eventsCampaign",
                    type: "String",
                    info: "Optional: Whether the webhook is triggered when a campaign is sent or cancelled.",
                },
                {
                    name: "sourcesUser",
                    type: "String",
                    info: "Optional: Whether the webhook is triggered by subscriber-initiated actions.",
                },
                {
                    name: "sourcesAdmin",
                    type: "String",
                    info: "Optional: Whether the webhook is triggered by admin-initiated actions in the web interface.",
                },
                {
                    name: "sourcesApi",
                    type: "String",
                    info: "Optional: Whether the webhook is triggered by actions initiated via the API.",
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
        },{
            "name":"getAllWebhooks",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
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
        },{
            "name":"getWebhook",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "webhookId",
                    type: "String",
                    info: " The unique id for the webhook.",
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
        },{
            "name":"deleteWebhook",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "listId",
                    type: "String",
                    info: " The unique id for the list.",
                },
                {
                    name: "webhookId",
                    type: "String",
                    info: " The unique id for the webhook.",
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
        },{
            "name":"createTemplateFolder",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "name",
                    type: "String",
                    info: " The name of the folder.",
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
        },{
            "name":"getAllTemplateFolders",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "fields",
                    type: "String",
                    info: "Optional: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.",
                },
                {
                    name: "excludeFields",
                    type: "String",
                    info: "Optional: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.",
                },
                {
                    name: "count",
                    type: "String",
                    info: "Optional: The number of records to return.",
                },
                {
                    name: "offset",
                    type: "String",
                    info: "Optional: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.",
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
        },{
            "name":"getTemplateFolder",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "folderId",
                    type: "String",
                    info: "The unique id for the template folder.",
                },
                {
                    name: "fields",
                    type: "String",
                    info: "Optional: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.",
                },
                {
                    name: "excludeFields",
                    type: "String",
                    info: "Optional: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.",
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
        },{
            "name":"updateTemplateFolder",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "folderId",
                    type: "String",
                    info: "The unique id for the template folder.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "The name of the folder.",
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
        },{
            "name":"deleteTemplateFolder",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "folderId",
                    type: "String",
                    info: "The unique id for the template folder.",
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
        },{
            "name":"createTemplate",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "The name of the template.",
                },
                {
                    name: "folderId",
                    type: "String",
                    info: "Optional: The id of the folder the template is currently in.",
                },
                {
                    name: "html",
                    type: "String",
                    info: "The raw HTML for the template. Supported the MailChimp Template Language",
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
        },{
            "name":"getTemplates",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "fields",
                    type: "String",
                    info: "Optional: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.",
                },
                {
                    name: "excludeFields",
                    type: "String",
                    info: "Optional: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.",
                },
                {
                    name: "count",
                    type: "String",
                    info: "Optional: The number of records to return.",
                },
                {
                    name: "offset",
                    type: "String",
                    info: "Optional: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.",
                },
                {
                    name: "createdBy",
                    type: "String",
                    info: "Optional: The MailChimp account user who created the template.",
                },
                {
                    name: "sinceCreatedAt",
                    type: "String",
                    info: "Optional: Restrict the response to templates created after the set date.",
                },
                {
                    name: "beforeCreatedAt",
                    type: "String",
                    info: "Optional: Restrict the response to templates created before the set date.",
                },
                {
                    name: "type",
                    type: "String",
                    info: "Optional: Limit results based on template type.",
                },
                {
                    name: "folderId",
                    type: "String",
                    info: "Optional: The unique folder id.",
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
        },{
            "name":"getTemplate",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "templateId",
                    type: "String",
                    info: "The unique id for the template.",
                },
                {
                    name: "fields",
                    type: "String",
                    info: "Optional: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.",
                },
                {
                    name: "excludeFields",
                    type: "String",
                    info: "Optional: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.",
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
        },{
            "name":"updateTemplate",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "templateId",
                    type: "String",
                    info: "The unique id for the template.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "The name of the template.",
                },
                {
                    name: "folderId",
                    type: "String",
                    info: "Optional: The id of the folder the template is currently in.",
                },
                {
                    name: "html",
                    type: "String",
                    info: "The raw HTML for the template. Supported the MailChimp Template Language",
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
        },{
            "name":"deleteTemplate",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "templateId",
                    type: "String",
                    info: "The unique id for the template.",
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
        },{
            "name":"getTemplateDefaultContent",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "templateId",
                    type: "String",
                    info: "The unique id for the template.",
                },
                {
                    name: "fields",
                    type: "String",
                    info: "Optional: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.",
                },
                {
                    name: "excludeFields",
                    type: "String",
                    info: "Optional: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.",
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
        },{
            "name":"setCampaignContentHTML",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
                },
                {
                    name: "plainText",
                    type: "String",
                    info: "Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.",
                },
                {
                    name: "html",
                    type: "String",
                    info: "The raw HTML for the campaign.",
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
        },{
            "name":"setCampaignContentFromURL",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
                },
                {
                    name: "plainText",
                    type: "String",
                    info: "Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.",
                },
                {
                    name: "url",
                    type: "String",
                    info: "When importing a campaign, the URL where the HTML lives.",
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
        },{
            "name":"setCampaignContentFromTemplate",
            "args":[
                {
                    name: "apiKey",
                    type: "String",
                    info: "The api key obtained from MailChimp.",
                },
                {
                    name: "campaignId",
                    type: "String",
                    info: "The unique id for the campaign.",
                },
                {
                    name: "plainText",
                    type: "String",
                    info: "Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.",
                },
                {
                    name: "templateId",
                    type: "String",
                    info: "The id of the template to use.",
                },
                {
                    name: "templateSections",
                    type: "String",
                    info: "Content for the sections of the template. Each key should be the unique mc:edit area name from the template.",
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
        }
        ]
    })
};
