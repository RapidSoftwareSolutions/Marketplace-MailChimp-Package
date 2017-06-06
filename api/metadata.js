module.exports.do = function(req, res) {
res.status(200).send({
  "package": "MailChimp",
  "tagline": "MailChimp Package",
  "description": "The MailChimp Package can be used to build real time application based on the MailChimp platform.",
  "image": "https://pbs.twimg.com/profile_images/709825689181147136/SdVd6iit.jpg",
  'keywords': ["API", "analytics", "automation", "database", "email", "emails", "marketing"],
  "repo": "https://github.com/RapidSoftwareSolutions/marketplace-MailChimp-package",
  "accounts": {
    "domain": "mailchimp.com",
    "credentials": [
      "apiKey"
    ]
  },
  "blocks": [
    {
      "name": "getAutomationsList",
      "description": "Get a summary of an account’s Automations.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "fields",
          "type": "String",
          "info": "A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.",
          "required": false
        },
        {
          "name": "excludeFields",
          "type": "String",
          "info": "A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getAutomationInWorkflow",
      "description": "Get a summary of an individual Automation workflow’s settings and content.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "pauseAllEmails",
      "description": "Pause all emails in a specific Automation workflow.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "startAllEmails",
      "description": "Start all emails in an Automation workflow.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getAutomatedEmailsList",
      "description": "Get a list of the emails in an Automation workflow.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getWorkflowEmail",
      "description": "Get information about an individual Automation workflow email.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "Required: Required: The unique id for the Automation workflow.",
          "required": true
        },
        {
          "name": "emailId",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow email.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "pauseAutomatedEmail",
      "description": "Pause an automated email.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow.",
          "required": true
        },
        {
          "name": "emailId",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow email.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "startAutomatedEmail",
      "description": "Start an automated email.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow.",
          "required": true
        },
        {
          "name": "emailId",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow email.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "addWorkflowEmailSubscriber",
      "description": "Manually add a subscriber to a workflow, bypassing the default trigger settings",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow.",
          "required": true
        },
        {
          "name": "emailId",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow email.",
          "required": true
        },
        {
          "name": "emailAddress",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow email.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getEmailSubscriber",
      "description": "Get information about a specific subscriber in an Automation email queue.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "The unique id for the Automation workflow.",
          "required": false
        },
        {
          "name": "emailId",
          "type": "String",
          "info": "The unique id for the Automation workflow email.",
          "required": false
        },
        {
          "name": "emailAddress",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow email.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "removeWorkflowSubscriber",
      "description": "Remove a subscriber from a specific Automation workflow. You can remove a subscriber at any point in an Automation workflow, regardless of how many emails they’ve been sent from that workflow. Once they’re removed, they can never be added back to the same workflow.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "workflowId",
          "type": "String",
          "info": "Required: The unique id for the Automation workflow.",
          "required": true
        },
        {
          "name": "emailAddress",
          "type": "String",
          "info": "Required: The list member’s email address.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "createCampaignFolder",
      "description": "Create a new campaign folder.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "name",
          "type": "String",
          "info": "Required: Name to associate with the folder.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getCampaignFolders",
      "description": "Get all folders used to organize campaigns.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getCampaignFolder",
      "description": "Get information about a specific folder used to organize campaigns.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "folderId",
          "type": "String",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "updateCampaignFolder",
      "description": "Update a specific folder used to organize campaigns.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "folderId",
          "type": "String",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "name",
          "type": "String",
          "info": "Required: Name to associate with the folder.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "deleteCampaignFolder",
      "description": "Delete a specific campaign folder, and mark all the campaigns in the folder as ‘unfiled’.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "folderId",
          "type": "String",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "createCampaign",
      "description": "Create a new MailChimp campaign.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "type",
          "type": "String",
          "info": "Required: There are four types of campaigns you can create in MailChimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead.",
          "required": true
        },
        {
          "name": "recipientsListId",
          "type": "String",
          "info": "Required: The unique list id.",
          "required": true
        },
        {
          "name": "subjectLine",
          "type": "String",
          "info": "Required: The subject line for the campaign.",
          "required": true
        },
        {
          "name": "title",
          "type": "String",
          "info": "The title of the campaign.",
          "required": false
        },
        {
          "name": "fromName",
          "type": "String",
          "info": "Required: The ‘from’ name on the campaign (not an email address).",
          "required": true
        },
        {
          "name": "replyTo",
          "type": "String",
          "info": "Required: The reply-to email address for the campaign.",
          "required": true
        },
        {
          "name": "useConversation",
          "type": "String",
          "info": "The reply-to email address for the campaign.",
          "required": false
        },
        {
          "name": "toName",
          "type": "String",
          "info": "The campaign’s custom ‘To’ name.",
          "required": false
        },
        {
          "name": "folderId",
          "type": "String",
          "info": "If the campaign is listed in a folder, the id for that folder.",
          "required": false
        },
        {
          "name": "authenticate",
          "type": "String",
          "info": "Whether MailChimp authenticated the campaign. Defaults to true.",
          "required": false
        },
        {
          "name": "autoFooter",
          "type": "String",
          "info": "Automatically append MailChimp’s default footer to the campaign.",
          "required": false
        },
        {
          "name": "inlineCss",
          "type": "String",
          "info": "Automatically inline the CSS included with the campaign content.",
          "required": false
        },
        {
          "name": "autoTweet",
          "type": "String",
          "info": "Automatically tweet a link to the campaign archive page when the campaign is sent.",
          "required": false
        },
        {
          "name": "autoFbPost",
          "type": "String",
          "info": "An comma separated string of Facebook page ids to auto-post to.",
          "required": false
        },
        {
          "name": "fbComments",
          "type": "String",
          "info": "Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.",
          "required": false
        },
        {
          "name": "variateSettingsWinnerCriteria",
          "type": "Select",
          "options": ["opens","clicks","manual","total_revenue"],
          "info": "The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_critera is ignored. For Multivariate Campaigns with ‘manual’ as the winner_citeria, the winner must be chosen in the MailChimp web application. Possible Values: `opens`, `clicks`, `manual`, `total_revenue`",
          "required": false
        },
        {
          "name": "variateSettingsWaitTime",
          "type": "Number",
          "info": "The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.",
          "required": false
        },
        {
          "name": "variateSettingsTestSize",
          "type": "Number",
          "info": "The percentage of recipients to send the test combinations to, must be a value between 10 and 100.",
          "required": false
        },
        {
          "name": "variateSettingsSubjectLines",
          "type": "String",
          "info": "The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.",
          "required": false
        },
        {
          "name": "variateSettingsSendTimes",
          "type": "DatePicker",
          "info": "The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.",
          "required": false
        },
        {
          "name": "variateSettingsFromNames",
          "type": "String",
          "info": "The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.",
          "required": false
        },
        {
          "name": "replyToAddresses",
          "type": "String",
          "info": "The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.",
          "required": false
        },
        {
          "name": "trackingOpens",
          "type": "String",
          "info": "Whether to track opens. Defaults to true. Cannot be set to false for variate campaigns.",
          "required": false
        },
        {
          "name": "trackingHtmlClicks",
          "type": "String",
          "info": "Whether to track clicks in the HTML version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.",
          "required": false
        },
        {
          "name": "trackingTextClicks",
          "type": "String",
          "info": "Whether to track clicks in the plain-text version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.",
          "required": false
        },
        {
          "name": "trackingGoalTracking",
          "type": "String",
          "info": "Whether to enable Goal tracking.",
          "required": false
        },
        {
          "name": "trackingEcomm360",
          "type": "String",
          "info": "Whether to enable eCommerce360 tracking.",
          "required": false
        },
        {
          "name": "trackingGoogleAnalytics",
          "type": "String",
          "info": "The custom slug for Google Analytics tracking (max of 50 bytes).",
          "required": false
        },
        {
          "name": "trackingClicktale ",
          "type": "String",
          "info": "The custom slug for ClickTale tracking (max of 50 bytes).",
          "required": false
        },
        {
          "name": "trackingSalesforceCampaign ",
          "type": "String",
          "info": "Create a campaign in a connected Salesforce account.",
          "required": false
        },
        {
          "name": "trackingSalesforceNotes ",
          "type": "String",
          "info": "Update contact notes for a campaign based on subscriber email addresses.",
          "required": false
        },
        {
          "name": "trackingHighriseCampaign",
          "type": "String",
          "info": "Create a campaign in a connected Highrise account.",
          "required": false
        },
        {
          "name": "trackingHighriseNotes",
          "type": "String",
          "info": "Update contact notes for a campaign based on subscriber email addresses.",
          "required": false
        },
        {
          "name": "trackingCapsuleNotes",
          "type": "String",
          "info": "Update contact notes for a campaign based on subscriber email addresses.",
          "required": false
        },
        {
          "name": "rssOptsFeedUrl",
          "type": "String",
          "info": "The URL for the RSS feed.",
          "required": false
        },
        {
          "name": "rssOptsFrequency",
          "type": "String",
          "info": "The frequency of the RSS Campaign.",
          "required": false
        },
        {
          "name": "rssOptsScheduleHour",
          "type": "String",
          "info": "The hour to send the campaign in local time. Acceptable hours are 0-23. For example, ‘4’ would be 4am in your account’s default time zone.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendSunday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Sundays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendMonday",
          "type": "String",
          "info": "TSends the daily RSS Campaign on Mondays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendTuesday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Tuesdays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendWednesday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Wednesdays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendThursday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Thursdays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendFriday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Fridays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendSaturday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Saturdays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleWeeklySendDay",
          "type": "String",
          "info": "The day of the week to send a weekly RSS Campaign.",
          "required": false
        },
        {
          "name": "rssOptsScheduleMonthlySendDate",
          "type": "String",
          "info": "The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where ‘0’ is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.",
          "required": false
        },
        {
          "name": "rssOptsLastSent",
          "type": "String",
          "info": "The date the campaign was last sent.",
          "required": false
        },
        {
          "name": "rssOptsConstrainRssImg",
          "type": "String",
          "info": "Whether to add CSS to images in the RSS feed to constrain their width in campaigns.",
          "required": false
        },
        {
          "name": "socialCardImageUrl",
          "type": "String",
          "info": "The url for the header image for the card.",
          "required": false
        },
        {
          "name": "socialCardDescription",
          "type": "String",
          "info": "A short summary of the campaign to display.",
          "required": false
        },
        {
          "name": "socialCardTitle",
          "type": "String",
          "info": "The title for the card. Typically the subject line of the campaign.",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getCampaigns",
      "description": "Get all campaigns in an account.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "type",
          "type": "String",
          "info": "The campaign type.",
          "required": false
        },
        {
          "name": "status",
          "type": "String",
          "info": "The status of the campaign.",
          "required": false
        },
        {
          "name": "beforeSendTime",
          "type": "DatePicker",
          "info": "Restrict the response to campaigns sent before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.",
          "required": false
        },
        {
          "name": "sinceSendTime",
          "type": "DatePicker",
          "info": "Restrict the response to campaigns sent after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.",
          "required": false
        },
        {
          "name": "beforeCreateTime",
          "type": "DatePicker",
          "info": "Restrict the response to campaigns created before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.",
          "required": false
        },
        {
          "name": "sinceCreateTime",
          "type": "DatePicker",
          "info": "Restrict the response to campaigns created after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.",
          "required": false
        },
        {
          "name": "listId",
          "type": "String",
          "info": "The unique id for the list.",
          "required": false
        },
        {
          "name": "folderId",
          "type": "String",
          "info": "The unique folder id.",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getCampaign",
      "description": "Get information about a specific campaign.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The campaign id.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "updateCampaign",
      "description": "Update some or all of the settings for a specific campaign.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "recipientsListId",
          "type": "String",
          "info": "Required: The unique list id.",
          "required": true
        },
        {
          "name": "subjectLine",
          "type": "String",
          "info": "Required: The subject line for the campaign.",
          "required": true
        },
        {
          "name": "title",
          "type": "String",
          "info": "The title of the campaign.",
          "required": false
        },
        {
          "name": "fromName",
          "type": "String",
          "info": "Required: The ‘from’ name on the campaign (not an email address).",
          "required": true
        },
        {
          "name": "replyTo",
          "type": "String",
          "info": "Required: The reply-to email address for the campaign.",
          "required": true
        },
        {
          "name": "useConversation",
          "type": "String",
          "info": "The reply-to email address for the campaign.",
          "required": false
        },
        {
          "name": "toName",
          "type": "String",
          "info": "The campaign’s custom ‘To’ name.",
          "required": false
        },
        {
          "name": "folderId",
          "type": "String",
          "info": "If the campaign is listed in a folder, the id for that folder.",
          "required": false
        },
        {
          "name": "authenticate",
          "type": "String",
          "info": "Whether MailChimp authenticated the campaign. Defaults to true.",
          "required": false
        },
        {
          "name": "autoFooter",
          "type": "String",
          "info": "Automatically append MailChimp’s default footer to the campaign.",
          "required": false
        },
        {
          "name": "inlineCss",
          "type": "String",
          "info": "Automatically inline the CSS included with the campaign content.",
          "required": false
        },
        {
          "name": "autoTweet",
          "type": "String",
          "info": "Automatically tweet a link to the campaign archive page when the campaign is sent.",
          "required": false
        },
        {
          "name": "autoFbPost",
          "type": "String",
          "info": "An String of Facebook page ids to auto-post to.",
          "required": false
        },
        {
          "name": "fbComments",
          "type": "String",
          "info": "Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.",
          "required": false
        },
        {
          "name": "variateSettingsWinnerCriteria",
          "type": "Select",
          "options": ["opens","clicks","manual","total_revenue"],
          "info": "The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_critera is ignored. For Multivariate Campaigns with ‘manual’ as the winner_citeria, the winner must be chosen in the MailChimp web application. Possible Values: `opens`, `clicks`, `manual`, `total_revenue`",
          "required": false
        },
        {
          "name": "variateSettingsWaitTime",
          "type": "Number",
          "info": "The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.",
          "required": false
        },
        {
          "name": "variateSettingsTestSize",
          "type": "Number",
          "info": "The percentage of recipients to send the test combinations to, must be a value between 10 and 100.",
          "required": false
        },
        {
          "name": "variateSettingsSubjectLines",
          "type": "String",
          "info": "The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.",
          "required": false
        },
        {
          "name": "variateSettingsSendTimes",
          "type": "DatePicker",
          "info": "The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.",
          "required": false
        },
        {
          "name": "variateSettingsFromNames",
          "type": "String",
          "info": "The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.",
          "required": false
        },
        {
          "name": "replyToAddresses",
          "type": "String",
          "info": "The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.",
          "required": false
        },
        {
          "name": "trackingOpens",
          "type": "String",
          "info": "Whether to track opens. Defaults to true. Cannot be set to false for variate campaigns.",
          "required": false
        },
        {
          "name": "trackingHtmlClicks",
          "type": "String",
          "info": "Whether to track clicks in the HTML version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.",
          "required": false
        },
        {
          "name": "trackingTextClicks",
          "type": "String",
          "info": "Whether to track clicks in the plain-text version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.",
          "required": false
        },
        {
          "name": "trackingGoalTracking",
          "type": "String",
          "info": "Whether to enable Goal tracking.",
          "required": false
        },
        {
          "name": "trackingEcomm360",
          "type": "String",
          "info": "Whether to enable eCommerce360 tracking.",
          "required": false
        },
        {
          "name": "trackingGoogleAnalytics",
          "type": "String",
          "info": "The custom slug for Google Analytics tracking (max of 50 bytes).",
          "required": false
        },
        {
          "name": "trackingClicktale ",
          "type": "String",
          "info": "The custom slug for ClickTale tracking (max of 50 bytes).",
          "required": false
        },
        {
          "name": "trackingSalesforceCampaign ",
          "type": "String",
          "info": "Create a campaign in a connected Salesforce account.",
          "required": false
        },
        {
          "name": "trackingSalesforceNotes ",
          "type": "String",
          "info": "Update contact notes for a campaign based on subscriber email addresses.",
          "required": false
        },
        {
          "name": "trackingHighriseCampaign",
          "type": "String",
          "info": "Create a campaign in a connected Highrise account.",
          "required": false
        },
        {
          "name": "trackingHighriseNotes",
          "type": "String",
          "info": "Update contact notes for a campaign based on subscriber email addresses.",
          "required": false
        },
        {
          "name": "trackingCapsuleNotes",
          "type": "String",
          "info": "Update contact notes for a campaign based on subscriber email addresses.",
          "required": false
        },
        {
          "name": "rssOptsFeedUrl",
          "type": "String",
          "info": "The URL for the RSS feed.",
          "required": false
        },
        {
          "name": "rssOptsFrequency",
          "type": "String",
          "info": "The frequency of the RSS Campaign.",
          "required": false
        },
        {
          "name": "rssOptsScheduleHour",
          "type": "String",
          "info": "The hour to send the campaign in local time. Acceptable hours are 0-23. For example, ‘4’ would be 4am in your account’s default time zone.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendSunday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Sundays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendMonday",
          "type": "String",
          "info": "TSends the daily RSS Campaign on Mondays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendTuesday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Tuesdays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendWednesday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Wednesdays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendThursday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Thursdays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendFriday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Fridays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleDailySendSaturday",
          "type": "String",
          "info": "Sends the daily RSS Campaign on Saturdays.",
          "required": false
        },
        {
          "name": "rssOptsScheduleWeeklySendDay",
          "type": "String",
          "info": "The day of the week to send a weekly RSS Campaign.",
          "required": false
        },
        {
          "name": "rssOptsScheduleMonthlySendDate",
          "type": "String",
          "info": "The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where ‘0’ is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.",
          "required": false
        },
        {
          "name": "rssOptsLastSent",
          "type": "String",
          "info": "The date the campaign was last sent.",
          "required": false
        },
        {
          "name": "rssOptsConstrainRssImg",
          "type": "String",
          "info": "Whether to add CSS to images in the RSS feed to constrain their width in campaigns.",
          "required": false
        },
        {
          "name": "socialCardImageUrl",
          "type": "String",
          "info": "The url for the header image for the card.",
          "required": false
        },
        {
          "name": "socialCardDescription",
          "type": "String",
          "info": "A short summary of the campaign to display.",
          "required": false
        },
        {
          "name": "socialCardTitle",
          "type": "String",
          "info": "The title for the card. Typically the subject line of the campaign.",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "deleteCampaign",
      "description": "Remove a campaign from your MailChimp account.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "cancelCampaign",
      "description": "Cancel a Regular or Plain-Text Campaign after you send, before all of your recipients receive it.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "replicateCampaign",
      "description": "Replicate a campaign in saved or send status.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "resumeRSSCampaign",
      "description": "Resume an RSS-Driven campaign.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "scheduleCampaign",
      "description": "Schedule a campaign for delivery.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        },
        {
          "name": "scheduleTime",
          "type": "String",
          "info": "Required: The date and time in UTC to schedule the campaign for delivery. Campaigns may only be scheduled to send on the quarter-hour (:00, :15, :30, :45).",
          "required": true
        },
        {
          "name": "timewarp",
          "type": "String",
          "info": "Choose whether the campaign should use Timewarp when sending. Campaigns scheduled with Timewarp are localized based on the recipients’ time zones. For example, a Timewarp campaign with a schedule_time of 13:00 will be sent to each recipient at 1:00pm in their local time. Cannot be set to true for campaigns using Batch Delivery.",
          "required": false
        },
        {
          "name": "batchDeliveryBatchDelay",
          "type": "String",
          "info": "The delay, in minutes, between batches.",
          "required": false
        },
        {
          "name": "batchDeliveryBatchCount",
          "type": "String",
          "info": "The number of batches for the campaign send.",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "sendCampaign",
      "description": "Send a MailChimp campaign. For RSS Campaigns, the campaign will send according to its schedule. All other campaigns will send immediately.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "sendTestEmail",
      "description": "Send a test email.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        },
        {
          "name": "testEmails",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        },
        {
          "name": "sendType",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "unscheduleCampaign",
      "description": "Unschedule a scheduled campaign that hasn’t started sending.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getCampaignContent",
      "description": "Get the the HTML and plain-text content for a campaign.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getSendChecklist",
      "description": "Review the send checklist for a campaign, and resolve any issues before sending.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getConversationsList",
      "description": "Get a list of conversations for the account.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getConversation",
      "description": "Get details about an individual conversation.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "conversationId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "sendConversationMessage",
      "description": "Post a new message to a conversation.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "conversationId",
          "type": "String",
          "info": "Required: The unique id for the conversation.",
          "required": true
        },
        {
          "name": "fromEmail",
          "type": "String",
          "info": "Required: A label representing the email of the sender of this message",
          "required": true
        },
        {
          "name": "subject",
          "type": "String",
          "info": "The subject of this message",
          "required": false
        },
        {
          "name": "message",
          "type": "String",
          "info": "The plain-text content of the message",
          "required": false
        },
        {
          "name": "read",
          "type": "String",
          "info": "Required: Whether this message has been marked as read",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getConversationMessages",
      "description": "Get messages from a specific conversation.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "conversationId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        },
        {
          "name": "isRead",
          "type": "String",
          "info": "Whether a conversation message has been marked as read.",
          "required": false
        },
        {
          "name": "beforeTimestamp",
          "type": "DatePicker",
          "info": "Restrict the response to messages created before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.",
          "required": false
        },
        {
          "name": "sinceTimestamp",
          "type": "DatePicker",
          "info": "Restrict the response to messages created after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getConversationMessage",
      "description": "Get an individual message in a conversation.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "conversationId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        },
        {
          "name": "messageId ",
          "type": "String",
          "info": "Required: Whether a conversation message has been marked as read.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "createList",
      "description": "Create a new list in your MailChimp account.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "name",
          "type": "String",
          "info": "Required: The name of the list.",
          "required": true
        },
        {
          "name": "contactCompany",
          "type": "String",
          "info": "Required: The company name for the list.",
          "required": true
        },
        {
          "name": "contactAddress1",
          "type": "String",
          "info": "Required: The street address for the list contact.",
          "required": true
        },
        {
          "name": "contactAddress2",
          "type": "String",
          "info": "The street address for the list contact.",
          "required": false
        },
        {
          "name": "contactCity",
          "type": "String",
          "info": "Required: Required: The city for the list contact.",
          "required": true
        },
        {
          "name": "contactState",
          "type": "String",
          "info": "Required: The state for the list contact.",
          "required": true
        },
        {
          "name": "contactZip",
          "type": "String",
          "info": "The postal or zip code for the list contact.",
          "required": false
        },
        {
          "name": "contactCountry",
          "type": "String",
          "info": "A two-character ISO3166 country code. Defaults to US if invalid.",
          "required": false
        },
        {
          "name": "contactPhone",
          "type": "String",
          "info": "The phone number for the list contact.",
          "required": false
        },
        {
          "name": "permissionReminder",
          "type": "String",
          "info": "Required: The permission reminder for the list.",
          "required": true
        },
        {
          "name": "useArchiveBar",
          "type": "String",
          "info": "Whether campaigns for this list use the Archive Bar in archives by default.",
          "required": false
        },
        {
          "name": "campaignDefaultsFromName",
          "type": "String",
          "info": "Required: The default from name for campaigns sent to this list.",
          "required": true
        },
        {
          "name": "campaignDefaultsFromEmail",
          "type": "String",
          "info": "Required: The default from email for campaigns sent to this list.",
          "required": true
        },
        {
          "name": "campaignDefaultsSubject",
          "type": "String",
          "info": "Required: The default subject line for campaigns sent to this list.",
          "required": true
        },
        {
          "name": "campaignDefaultsLanguage",
          "type": "String",
          "info": "Required: The default language for this lists’s forms.",
          "required": true
        },
        {
          "name": "notifyOnSubscribe",
          "type": "String",
          "info": "The email address to send subscribe notifications to.",
          "required": false
        },
        {
          "name": "notifyOnUnsubscribe",
          "type": "String",
          "info": "The email address to send unsubscribe notifications to.",
          "required": false
        },
        {
          "name": "emailTypeOption",
          "type": "String",
          "info": "Required: Whether the list supports multiple formats for emails. When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup.",
          "required": true
        },
        {
          "name": "visibility",
          "type": "String",
          "info": "Whether this list is public or private.",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "batchAddMembersToList",
      "description": "Batch subscribe or unsubscribe list members.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "listId",
          "type": "String",
          "info": "Required: The unique id for the list.",
          "required": true
        },
        {
          "name": "members",
          "type": "JSON",
          "info": "Required: members.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getLists",
      "description": "Get information about all lists in the account.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "beforeDateCreated",
          "type": "String",
          "info": "Restrict response to lists created before the set date.",
          "required": false
        },
        {
          "name": "sinceDateCreated",
          "type": "String",
          "info": "Restrict results to lists created after the set date.",
          "required": false
        },
        {
          "name": "beforeCampaignLastSent",
          "type": "String",
          "info": "Restrict results to lists created before the last campaign send date.",
          "required": false
        },
        {
          "name": "sinceCampaignLastSent",
          "type": "String",
          "info": "Restrict results to lists created after the last campaign send date.",
          "required": false
        },
        {
          "name": "email",
          "type": "String",
          "info": "Restrict results to lists that include a specific subscriber’s email address.",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getList",
      "description": "Get information about a specific list in your MailChimp account.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "listId",
          "type": "String",
          "info": "Required: The unique id for the list.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "deleteList",
      "description": "Delete a list from your MailChimp account. If you delete a list, you’ll lose the list history - including subscriber activity, unsubscribes, complaints, and bounces. You’ll also lose subscribers’ email addresses, unless you exported and backed up your list.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "listId",
          "type": "String",
          "info": "Required: The unique id for the list.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "updateList",
      "description": "Update the settings for a specific list.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "listId",
          "type": "String",
          "info": "Required: List id to update.",
          "required": true
        },
        {
          "name": "name",
          "type": "String",
          "info": "Required: The name of the list.",
          "required": true
        },
        {
          "name": "contactCompany",
          "type": "String",
          "info": "Required: The company name for the list.",
          "required": true
        },
        {
          "name": "contactAddress1",
          "type": "String",
          "info": "Required: The street address for the list contact.",
          "required": true
        },
        {
          "name": "contactAddress2",
          "type": "String",
          "info": "The street address for the list contact.",
          "required": false
        },
        {
          "name": "contactCity",
          "type": "String",
          "info": "The city for the list contact.",
          "required": false
        },
        {
          "name": "contactState",
          "type": "String",
          "info": "Required: The state for the list contact.",
          "required": true
        },
        {
          "name": "contactZip",
          "type": "String",
          "info": "The postal or zip code for the list contact.",
          "required": false
        },
        {
          "name": "contactCountry",
          "type": "String",
          "info": "Required: A two-character ISO3166 country code. Defaults to US if invalid.",
          "required": true
        },
        {
          "name": "contactPhone",
          "type": "String",
          "info": "The phone number for the list contact.",
          "required": false
        },
        {
          "name": "permissionReminder",
          "type": "String",
          "info": "Required: The permission reminder for the list.",
          "required": true
        },
        {
          "name": "useArchiveBar",
          "type": "String",
          "info": "Whether campaigns for this list use the Archive Bar in archives by default.",
          "required": false
        },
        {
          "name": "campaignDefaultsFromName",
          "type": "String",
          "info": "Required: The default from name for campaigns sent to this list.",
          "required": true
        },
        {
          "name": "campaignDefaultsFromEmail",
          "type": "String",
          "info": "Required: The default from email for campaigns sent to this list.",
          "required": true
        },
        {
          "name": "campaignDefaultsSubject",
          "type": "String",
          "info": "Required: The default subject line for campaigns sent to this list.",
          "required": true
        },
        {
          "name": "campaignDefaultsLanguage",
          "type": "String",
          "info": "Required: The default language for this lists’s forms.",
          "required": true
        },
        {
          "name": "notifyOnSubscribe",
          "type": "String",
          "info": "The email address to send subscribe notifications to.",
          "required": false
        },
        {
          "name": "notifyOnUnsubscribe",
          "type": "String",
          "info": "The email address to send unsubscribe notifications to.",
          "required": false
        },
        {
          "name": "emailTypeOption",
          "type": "String",
          "info": "Required: cat getWhether the list supports multiple formats for emails. When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup.",
          "required": true
        },
        {
          "name": "visibility",
          "type": "String",
          "info": "Whether this list is public or private.",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getAbuseReportsList",
      "description": "Get all abuse reports for a specific list.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "listId",
          "type": "String",
          "info": "Required: The unique id for the list.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getAbuseReport",
      "description": "Get details about a specific abuse report.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "listId",
          "type": "String",
          "info": "Required: The unique id for the list.",
          "required": true
        },
        {
          "name": "reportId",
          "type": "String",
          "info": "Required: The unique id for the report.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getListActivity",
      "description": "Get up to the previous 180 days of daily detailed aggregated activity stats for a list, not including Automation activity.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "listId",
          "type": "String",
          "info": "Required: The unique id for the list.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "getTopEmailClients",
      "description": "Get a list of the top email clients based on user-agent strings.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "listId",
          "type": "String",
          "info": "Required: The unique id for the list.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "setCampaignContentHTML",
      "description": "Set the content for a campaign with raw HTML content.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        },
        {
          "name": "plainText",
          "type": "String",
          "info": "Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.",
          "required": false
        },
        {
          "name": "html",
          "type": "String",
          "info": "The raw HTML for the campaign.",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "setCampaignContentFromURL",
      "description": "Set the content for a campaign from a URL.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        },
        {
          "name": "plainText",
          "type": "String",
          "info": "Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.",
          "required": false
        },
        {
          "name": "url",
          "type": "String",
          "info": "Required: When importing a campaign, the URL where the HTML lives.",
          "required": true
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    },
    {
      "name": "setCampaignContentFromTemplate",
      "description": "Set a campaign content using a template.",
      "args": [
        {
          "name": "apiKey",
          "type": "credentials",
          "info": "Required: The api key obtained from MailChimp.",
          "required": true
        },
        {
          "name": "campaignId",
          "type": "String",
          "info": "Required: The unique id for the campaign.",
          "required": true
        },
        {
          "name": "plainText",
          "type": "String",
          "info": "Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.",
          "required": false
        },
        {
          "name": "templateId",
          "type": "String",
          "info": "Required: The id of the template to use.",
          "required": true
        },
        {
          "name": "templateSections",
          "type": "String",
          "info": "Content for the sections of the template. Each key should be the unique mc:edit area name from the template.",
          "required": false
        }
      ],
      "callbacks": [
        {
          "name": "error",
          "info": "Error"
        },
        {
          "name": "success",
          "info": "Success"
        }
      ]
    }
  ]
})
};
