# MailChimp Package
The MailChimp Package can be used to build real time application based on the MailChimp platform.
* Domain: mailchimp.com
* Credentials: apiKey

## How to get credentials: 
0. Create MailChimp account.
1. Go to account folder.
2. Go to `Extras -> Api Keys` folder.
3. Click on <kbd>Create A Key</kbd> button and save your apiKey.

## TOC: 
* [getAutomationsList](#getAutomationsList)
* [getAutomationInWorkflow](#getAutomationInWorkflow)
* [pauseAllEmails](#pauseAllEmails)
* [startAllEmails](#startAllEmails)
* [getAutomatedEmailsList](#getAutomatedEmailsList)
* [getWorkflowEmail](#getWorkflowEmail)
* [pauseAutomatedEmail](#pauseAutomatedEmail)
* [startAutomatedEmail](#startAutomatedEmail)
* [addWorkflowEmailSubscriber](#addWorkflowEmailSubscriber)
* [getEmailSubscriber](#getEmailSubscriber)
* [removeWorkflowSubscriber](#removeWorkflowSubscriber)
* [createCampaignFolder](#createCampaignFolder)
* [getCampaignFolders](#getCampaignFolders)
* [getCampaignFolder](#getCampaignFolder)
* [updateCampaignFolder](#updateCampaignFolder)
* [deleteCampaignFolder](#deleteCampaignFolder)
* [createCampaign](#createCampaign)
* [getCampaigns](#getCampaigns)
* [getCampaign](#getCampaign)
* [updateCampaign](#updateCampaign)
* [deleteCampaign](#deleteCampaign)
* [cancelCampaign](#cancelCampaign)
* [replicateCampaign](#replicateCampaign)
* [resumeRSSCampaign](#resumeRSSCampaign)
* [scheduleCampaign](#scheduleCampaign)
* [sendCampaign](#sendCampaign)
* [sendTestEmail](#sendTestEmail)
* [unscheduleCampaign](#unscheduleCampaign)
* [getCampaignContent](#getCampaignContent)
* [getSendChecklist](#getSendChecklist)
* [getConversationsList](#getConversationsList)
* [getConversation](#getConversation)
* [sendConversationMessage](#sendConversationMessage)
* [getConversationMessages](#getConversationMessages)
* [getConversationMessage](#getConversationMessage)
* [createList](#createList)
* [batchAddMembersToList](#batchAddMembersToList)
* [getLists](#getLists)
* [getList](#getList)
* [deleteList](#deleteList)
* [updateList](#updateList)
* [getAbuseReportsList](#getAbuseReportsList)
* [getAbuseReport](#getAbuseReport)
* [getListActivity](#getListActivity)
* [createInterestCategory](#createInterestCategory)
* [getInterestCategories](#getInterestCategories)
* [getInterestCategory](#getInterestCategory)
* [getTopEmailClients](#getTopEmailClients)
* [getListGrowthHistory](#getListGrowthHistory)
* [getMonthListGrowth](#getMonthListGrowth)
* [updateInterestCategory](#updateInterestCategory)
* [createInterest](#createInterest)
* [getAllInterests](#getAllInterests)
* [getInterests](#getInterests)
* [updateInterests](#updateInterests)
* [deleteInterests](#deleteInterests)
* [setCampaignContentHTML](#setCampaignContentHTML)
* [setCampaignContentFromURL](#setCampaignContentFromURL)
* [setCampaignContentFromTemplate](#setCampaignContentFromTemplate)
* [addMember](#addMember)
* [getMembers](#getMembers)
* [getMembers](#getMembers)
* [updateMember](#updateMember)
* [deleteMember](#deleteMember)
* [getMemberActivity](#getMemberActivity)
* [getMemberGoals](#getMemberGoals)
* [addNote](#addNote)
* [getNote](#getNote)
* [updateNote](#updateNote)
* [deleteNote](#deleteNote)
* [addMergeField](#addMergeField)
* [addSegment](#addSegment)
* [getAllSegments](#getAllSegments)
* [getSegment](#getSegment)
* [updateSegment](#updateSegment)
* [deleteSegment](#deleteSegment)
* [addStaticSegmentMember](#addStaticSegmentMember)
* [getAllMembers](#getAllMembers)
* [deleteStaticSegmentMember](#deleteStaticSegmentMember)
* [addSignupForm](#addSignupForm)
* [getSignupForm](#getSignupForm)
* [createTwitterLeadGenerationCard](#createTwitterLeadGenerationCard)
* [getAllTwitterLeadGenerationCards](#getAllTwitterLeadGenerationCards)
* [getTwitterLeadGenerationCard](#getTwitterLeadGenerationCard)
* [createWebhook](#createWebhook)
* [getAllWebhooks](#getAllWebhooks)
* [getWebhook](#getWebhook)
* [deleteWebhook](#deleteWebhook)
* [createTemplateFolder](#createTemplateFolder)
* [getAllTemplateFolders](#getAllTemplateFolders)
* [getTemplateFolder](#getTemplateFolder)
* [updateTemplateFolder](#updateTemplateFolder)
* [deleteTemplateFolder](#deleteTemplateFolder)
* [createTemplate](#createTemplate)
* [getTemplates](#getTemplates)
* [getTemplate](#getTemplate)
* [updateTemplate](#updateTemplate)
* [deleteTemplate](#deleteTemplate)
* [getTemplateDefaultContent](#getTemplateDefaultContent)
* [setCampaignContentFromURL](#setCampaignContentFromURL)
* [setCampaignContentFromTemplate](#setCampaignContentFromTemplate)
 
<a name="getAutomationsList"/>
## MailChimp.getAutomationsList
Method description

| Field        | Type  | Description
|--------------|-------|----------
| apiKey       | credentials| The api key obtained from MailChimp.
| fields       | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields| String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### Request example
```json
{	
	"apiKey": "...",
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "automations": [
			    {
			      "id": "b0a1c24f1a",
			      "create_time": "2015-09-15T14:31:54+00:00",
			      "start_time": "2015-09-15T15:45:32+00:00",
			      "status": "paused",
			      "emails_sent": 1,
			      "recipients": {
			        "list_id": "57afe96172"
			      },
			      "settings": {
			        "title": "Freddie's Best Jokes",
			        "from_name": "Freddie",
			        "reply_to": "freddie@freddiesjokes.com",
			        "use_conversation": false,
			        "to_name": "*|FNAME|*",
			        "authenticate": true,
			        "auto_footer": false,
			        "inline_css": false
			      },
			      "tracking": {
			        "opens": true,
			        "html_clicks": true,
			        "text_clicks": true,
			        "goal_tracking": true,
			        "ecomm360": true,
			        "google_analytics": "Freddie_s_Best_Jokes9_15_2015",
			        "clicktale": ""
			      },
			      "trigger_settings": {
			        "workflow_type": "emailSeries",
			        "send_immediately": false,
			        "trigger_on_import": false,
			        "runtime": {
			          "days": [
			            "sunday",
			            "monday",
			            "tuesday",
			            "wednesday",
			            "thursday",
			            "friday",
			            "saturday"
			          ],
			          "hours": {
			            "send_at": "12:00am"
			          }
			        },
			        "workflow_emails_count": 1
			      },
			      "report_summary": {
			        "opens": 1,
			        "unique_opens": 1,
			        "open_rate": 1,
			        "clicks": 0,
			        "subscriber_clicks": 0,
			        "click_rate": 0
			      },
			      "_links": [
			        {
			          "rel": "parent",
			          "href": "https://usX.api.mailchimp.com/3.0/automations",
			          "method": "GET",
			          "targetSchema": "https://api.mailchimp.com/schema/3.0/Automations/Collection.json",
			          "schema": "https://api.mailchimp.com/schema/3.0/CollectionLinks/Automations.json"
			        },
			        {
			          "rel": "self",
			          "href": "https://usX.api.mailchimp.com/3.0/automations/b0a1c24f1a",
			          "method": "GET",
			          "targetSchema": "https://api.mailchimp.com/schema/3.0/Automations/Instance.json"
			        },
			        {
			          "rel": "start-all-emails",
			          "href": "https://usX.api.mailchimp.com/3.0/automations/b0a1c24f1a/actions/start-all-emails",
			          "method": "POST"
			        },
			        {
			          "rel": "pause-all-emails",
			          "href": "https://usX.api.mailchimp.com/3.0/automations/b0a1c24f1a/actions/pause-all-emails",
			          "method": "POST"
			        },
			        {
			          "rel": "emails",
			          "href": "https://usX.api.mailchimp.com/3.0/automations/b0a1c24f1a/emails",
			          "method": "GET",
			          "targetSchema": "https://api.mailchimp.com/schema/3.0/Automations/Emails/Collection.json"
			        },
			        {
			          "rel": "removed-subscribers",
			          "href": "https://usX.api.mailchimp.com/3.0/automations/b0a1c24f1a/removed-subscribers",
			          "method": "GET",
			          "targetSchema": "https://api.mailchimp.com/schema/3.0/Automations/RemovedSubscribers/Collection.json"
			        }
			      ]
			    }
			  ],
			  "total_items": 1,
			  "_links": [
			    {
			      "rel": "parent",
			      "href": "https://usX.api.mailchimp.com/3.0/",
			      "method": "GET",
			      "targetSchema": "https://api.mailchimp.com/schema/3.0/Root.json"
			    },
			    {
			      "rel": "self",
			      "href": "https://usX.api.mailchimp.com/3.0/automations",
			      "method": "GET",
			      "targetSchema": "https://api.mailchimp.com/schema/3.0/Automations/Collection.json",
			      "schema": "https://api.mailchimp.com/schema/3.0/CollectionLinks/Automations.json"
			    }
			  ]
			}
		}
	}
}
```

<a name="getAutomationInWorkflow"/>
## MailChimp.getAutomationInWorkflow
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| workflowId| String| The unique id for the Automation workflow.

#### Request example
```json
{	"apiKey": "...",
	"workflowId": "xxxxx"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="pauseAllEmails"/>
## MailChimp.pauseAllEmails
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| workflowId| String| The unique id for the Automation workflow.

#### Request example
```json
{	"apiKey": "...",
	"workflowId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "b0a1c24f1a",
			  "create_time": "2015-09-15T14:31:54+00:00",
			  "start_time": "",
			  "status": "save",
			  "emails_sent": 0,
			  "recipients": {
			    "list_id": "1a2df69511"
			  },
			  "settings": {
			    "title": "Freddie's best new jokes",
			    "from_name": "Freddie",
			    "reply_to": "freddie@freddiesjokes.com",
			    "use_conversation": false,
			    "to_name": "*|FNAME|*",
			    "authenticate": true,
			    "auto_footer": false,
			    "inline_css": false
			  },
			  "tracking": {
			    "opens": true,
			    "html_clicks": true,
			    "text_clicks": false,
			    "goal_tracking": false,
			    "ecomm360": true,
			    "google_analytics": true,
			    "clicktale": false
			  },
			  "trigger_settings": {
			    "workflow_type": "categoryFollowup",
			    "send_immediately": false,
			    "category_name": "Jokes",
			    "runtime": {
			      "days": [
			        "sunday",
			        "monday",
			        "tuesday",
			        "wednesday",
			        "thursday",
			        "friday",
			        "saturday"
			      ],
			      "hours": {
			        "send_asap": true
			      }
			    },
			    "workflow_emails_count": 3
			  }
			  
			  ...
			}
		}
	}
}
```

<a name="startAllEmails"/>
## MailChimp.startAllEmails
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| workflowId| String| The unique id for the Automation workflow.

#### Request example
```json
{	"apiKey": "...",
	"workflowId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="getAutomatedEmailsList"/>
## MailChimp.getAutomatedEmailsList
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| workflowId| String| The unique id for the Automation workflow.

#### Request example
```json
{	"apiKey": "...",
	"workflowId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "workflow_id": "b0a1c24f1a",
			  "emails": [
			    {
			      "id": "491fec26f1",
			      "workflow_id": "b0a1c24f1a",
			      "position": 1,
			      "delay": {
			        "amount": 1,
			        "type": "day",
			        "direction": "after",
			        "action": "signup"
			      },
			      "create_time": "2015-09-15T14:33:20+00:00",
			      "start_time": "2015-09-15T15:45:32+00:00",
			      "archive_url": "http://eepurl.com/xxxx",
			      "status": "paused",
			      "emails_sent": 0,
			      "send_time": "2015-09-15T15:48:05+00:00",
			      "content_type": "template",
			      "recipients": {
			        "list_id": "57afe96172"
			      },
			      "settings": {
			        "subject_line": "Your first joke from Freddie!",
			        ...
			      },
			      "tracking": {
			        "opens": true,
			        ...
			      },
			      "report_summary": {
			        "opens": 0,
			        ...
			      },
			      ...
			    }
			  ],
			  "total_items": 1,
			  "_links": [
			    {
			      "rel": "parent",
			      "href": "https://usX.api.mailchimp.com/3.0/automations/b0a1c24f1a",
			      "method": "GET",
			      "targetSchema": "https://api.mailchimp.com/schema/3.0/Automations/Instance.json"
			    },
			    {
			      "rel": "self",
			      "href": "https://usX.api.mailchimp.com/3.0/automations/b0a1c24f1a/emails",
			      "method": "GET",
			      "targetSchema": "https://api.mailchimp.com/schema/3.0/Automations/Emails/Collection.json"
			    }
			  ]
			}
		}
	}
}
```

<a name="getWorkflowEmail"/>
## MailChimp.getWorkflowEmail
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| workflowId| String| The unique id for the Automation workflow.
| emailId   | String| The unique id for the Automation workflow email.

#### Request example
```json
{	"apiKey": "...",
	"workflowId": "...",
	"emailId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "491fec26f1",
			  "workflow_id": "b0a1c24f1a",
			  "position": 1,
			  "delay": {
			    "amount": 1,
			    ...
			  },
			  "create_time": "2015-09-15T14:33:20+00:00",
			  "start_time": "2015-09-15T15:45:32+00:00",
			  "archive_url": "http://eepurl.com/xxxx",
			  "status": "paused",
			  "emails_sent": 0,
			  "send_time": "2015-09-15T15:48:05+00:00",
			  "content_type": "template",
			  "recipients": {
			    "list_id": "57afe96172"
			  },
			  "settings": {
			    "subject_line": "Your first joke from Freddie!",
			    ...
			  },
			  "tracking": {
			    "opens": true,
			    ...
			  },
			  "report_summary": {
			    "opens": 0,
			   	...
			  },
			  ...
			}
       
		}
	}
}
```

<a name="pauseAutomatedEmail"/>
## MailChimp.pauseAutomatedEmail
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| workflowId| String| The unique id for the Automation workflow.
| emailId   | String| The unique id for the Automation workflow email.

#### Request example
```json
{	"apiKey": "...",
	"workflowId": "...",
	"emailId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="startAutomatedEmail"/>
## MailChimp.startAutomatedEmail
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| workflowId| String| The unique id for the Automation workflow.
| emailId   | String| The unique id for the Automation workflow email.

#### Request example
```json
{	"apiKey": "...",
	"workflowId": "...",
	"emailId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="addWorkflowEmailSubscriber"/>
## MailChimp.addWorkflowEmailSubscriber
Method description

| Field       | Type  | Description
|-------------|-------|----------
| apiKey      | credentials| The api key obtained from MailChimp.
| workflowId  | String| The unique id for the Automation workflow.
| emailId     | String| The unique id for the Automation workflow email.
| emailAddress| String| The unique id for the Automation workflow email.

#### Request example
```json
{	"apiKey": "...",
	"workflowId": "...",
	"emailId": "...",
	"emailAddress": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="getEmailSubscriber"/>
## MailChimp.getEmailSubscriber
Method description

| Field       | Type  | Description
|-------------|-------|----------
| apiKey      | credentials| The api key obtained from MailChimp.
| workflowId  | String| The unique id for the Automation workflow.
| emailId     | String| The unique id for the Automation workflow email.
| emailAddress| String| The unique id for the Automation workflow email.

#### Request example
```json
{	"apiKey": "...",
	"workflowId": "...",
	"emailId": "...",
	"emailAddress": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "62eeb292278cc15f5817cb78f7790b08",
			  "workflow_id": "b0a1c24f1a",
			  "email_id": "491fec26f1",
			  "list_id": "57afe96172",
			  "email_address": "urist.mcvankab@freddiesjokes.com",
			  ...
			}
		}
	}
}
```

<a name="removeWorkflowSubscriber"/>
## MailChimp.removeWorkflowSubscriber
Method description

| Field       | Type  | Description
|-------------|-------|----------
| apiKey      | credentials| The api key obtained from MailChimp.
| workflowId  | String| The unique id for the Automation workflow.
| emailAddress| String| The list member’s email address.

#### Request example
```json
{	"apiKey": "...",
	"workflowId": "...",
	"emailAddress": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="createCampaignFolder"/>
## MailChimp.createCampaignFolder
Method description

| Field | Type  | Description
|-------|-------|----------
| apiKey| credentials| The api key obtained from MailChimp.
| name  | String| Name to associate with the folder.

#### Request example
```json
{	"apiKey": "...",
	"name": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "id": "8888969b77",
			  "name": "The name of the folder",
			  "count": 0,
			  ...
			}
		}
	}
}
```

<a name="getCampaignFolders"/>
## MailChimp.getCampaignFolders
Method description

| Field | Type  | Description
|-------|-------|----------
| apiKey| credentials| The api key obtained from MailChimp.

#### Request example
```json
{	"apiKey": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "folders": [{
			      "id": "67d0d46c87",
			      "name": "Purchases",
			      "count": 0,
				}]
			}
		}
}
```

<a name="getCampaignFolder"/>
## MailChimp.getCampaignFolder
Method description

| Field   | Type  | Description
|---------|-------|----------
| apiKey  | credentials| The api key obtained from MailChimp.
| folderId| String| The api key obtained from MailChimp.

#### Request example
```json
{	"apiKey": "...",
	"folderId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			 	"id": "67d0d46c87",
			  	"name": "Purchases",
			  	"count": 0,
			  	...
			}
		}
	}
}
```

<a name="updateCampaignFolder"/>
## MailChimp.updateCampaignFolder
Method description

| Field   | Type  | Description
|---------|-------|----------
| apiKey  | credentials| The api key obtained from MailChimp.
| folderId| String| The api key obtained from MailChimp.
| name    | String| Name to associate with the folder.

#### Request example
```json
{	"apiKey": "...",
	"folderId": "...",
	"name": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
				 "id": "67d0d46c87",
				 "name": "The updated name of the folder",
				 "count": 0,
				 ...
			}
	}
}
```

<a name="deleteCampaignFolder"/>
## MailChimp.deleteCampaignFolder
Method description

| Field   | Type  | Description
|---------|-------|----------
| apiKey  | credentials| The api key obtained from MailChimp.
| folderId| String| The api key obtained from MailChimp.

#### Request example
```json
{	"apiKey": "...",
	"folderId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"success"
		}
	}
}
```

<a name="createCampaign"/>
## MailChimp.createCampaign
Method description

| Field                            | Type  | Description
|----------------------------------|-------|----------
| apiKey                           | credentials| The api key obtained from MailChimp.
| type                             | String| There are four types of campaigns you can create in MailChimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead.
| recipientsListId                 | String| The unique list id.
| subjectLine                      | String| The subject line for the campaign.
| title                            | String| The title of the campaign.
| fromName                         | String| The ‘from’ name on the campaign (not an email address).
| replyTo                          | String| The reply-to email address for the campaign.
| useConversation                  | String| The reply-to email address for the campaign.
| toName                           | String| The campaign’s custom ‘To’ name.
| folderId                         | String| If the campaign is listed in a folder, the id for that folder.
| authenticate                     | String| Whether MailChimp authenticated the campaign. Defaults to true.
| autoFooter                       | String| Automatically append MailChimp’s default footer to the campaign.
| inlineCss                        | String| Automatically inline the CSS included with the campaign content.
| autoTweet                        | String| Automatically tweet a link to the campaign archive page when the campaign is sent.
| autoFbPost                       | Array | An array of Facebook page ids to auto-post to.
| fbComments                       | String| Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
| variateSettingsWinnerCriteria    | String| The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_critera is ignored. For Multivariate Campaigns with ‘manual’ as the winner_citeria, the winner must be chosen in the MailChimp web application. Possible Values: `opens`, `clicks`, `manual`, `total_revenue`
| variateSettingsWaitTime          | Number| The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
| variateSettingsTestSize          | Number| The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
| variateSettingsSubjectLines      | Array | The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
| variateSettingsSendTimes         | Array | The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
| variateSettingsFromNames         | Array | The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
| replyToAddresses                 | Array | The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
| trackingOpens                    | String| Whether to track opens. Defaults to true. Cannot be set to false for variate campaigns.
| trackingHtmlClicks               | String| Whether to track clicks in the HTML version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.
| trackingTextClicks               | String| Whether to track clicks in the plain-text version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.
| trackingGoalTracking             | String| Whether to enable Goal tracking.
| trackingEcomm360                 | String| Whether to enable eCommerce360 tracking.
| trackingGoogleAnalytics          | String| The custom slug for Google Analytics tracking (max of 50 bytes).
| trackingClicktale                | String| The custom slug for ClickTale tracking (max of 50 bytes).
| trackingSalesforceCampaign       | String| Create a campaign in a connected Salesforce account.
| trackingSalesforceNotes          | String| Update contact notes for a campaign based on subscriber email addresses.
| trackingHighriseCampaign         | String| Create a campaign in a connected Highrise account.
| trackingHighriseNotes            | String| Update contact notes for a campaign based on subscriber email addresses.
| trackingCapsuleNotes             | String| Update contact notes for a campaign based on subscriber email addresses.
| rssOptsFeedUrl                   | String| The URL for the RSS feed.
| rssOptsFrequency                 | String| The frequency of the RSS Campaign.
| rssOptsScheduleHour              | String| The hour to send the campaign in local time. Acceptable hours are 0-23. For example, ‘4’ would be 4am in your account’s default time zone.
| rssOptsScheduleDailySendSunday   | String| Sends the daily RSS Campaign on Sundays.
| rssOptsScheduleDailySendMonday   | String| TSends the daily RSS Campaign on Mondays.
| rssOptsScheduleDailySendTuesday  | String| Sends the daily RSS Campaign on Tuesdays.
| rssOptsScheduleDailySendWednesday| String| Sends the daily RSS Campaign on Wednesdays.
| rssOptsScheduleDailySendThursday | String| Sends the daily RSS Campaign on Thursdays.
| rssOptsScheduleDailySendFriday   | String| Sends the daily RSS Campaign on Fridays.
| rssOptsScheduleDailySendSaturday | String| Sends the daily RSS Campaign on Saturdays.
| rssOptsScheduleWeeklySendDay     | String| The day of the week to send a weekly RSS Campaign.
| rssOptsScheduleMonthlySendDate   | String| The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where ‘0’ is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
| rssOptsLastSent                  | String| The date the campaign was last sent.
| rssOptsConstrainRssImg           | String| Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
| socialCardImageUrl               | String| The url for the header image for the card.
| socialCardDescription            | String| A short summary of the campaign to display.
| socialCardTitle                  | String| The title for the card. Typically the subject line of the campaign.

#### Request example
```json
{	"apiKey": "...",
	"type": "...",
	"recipientsListId": "...",
	"subjectLine": "...",
	"title": "...",
	"fromName": "...",
	"replyTo": "...",
	"useConversation": "...",
	"toName": "...",
	"folderId": "...",
	"authenticate": "...",
	"autoFooter": "...",
	"inlineCss": "...",
	"autoTweet": "...",
	"autoFbPost": "...",
	"fbComments": "...",
	"variateSettingsWinnerCriteria": "...",
	"variateSettingsWaitTime": 0,
	"variateSettingsTestSize": 0,
	"variateSettingsSubjectLines": "...",
	"variateSettingsSendTimes": "...",
	"variateSettingsFromNames": "...",
	"replyToAddresses": "...",
	"trackingOpens": "...",
	"trackingHtmlClicks": "...",
	"trackingTextClicks": "...",
	"trackingGoalTracking": "...",
	"trackingEcomm360": "...",
	"trackingGoogleAnalytics": "...",
	"trackingClicktale ": "...",
	"trackingSalesforceCampaign ": "...",
	"trackingSalesforceNotes ": "...",
	"trackingHighriseCampaign": "...",
	"trackingHighriseNotes": "...",
	"trackingCapsuleNotes": "...",
	"rssOptsFeedUrl": "...",
	"rssOptsFrequency": "...",
	"rssOptsScheduleHour": "...",
	"rssOptsScheduleDailySendSunday": "...",
	"rssOptsScheduleDailySendMonday": "...",
	"rssOptsScheduleDailySendTuesday": "...",
	"rssOptsScheduleDailySendWednesday": "...",
	"rssOptsScheduleDailySendThursday": "...",
	"rssOptsScheduleDailySendFriday": "...",
	"rssOptsScheduleDailySendSaturday": "...",
	"rssOptsScheduleWeeklySendDay": "...",
	"rssOptsScheduleMonthlySendDate": "...",
	"rssOptsLastSent": "...",
	"rssOptsConstrainRssImg": "...",
	"socialCardImageUrl": "...",
	"socialCardDescription": "...",
	"socialCardTitle": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "3e06f4ec92",
			  "type": "regular",
			  ...
			  "recipients": {
			    "list_id": "3c307a9f3f",
			    "segment_text": ""
			  },
			  "settings": {
			    "subject_line": "Your Purchase Receipt",
			    "title": "",
			    "from_name": "Customer Service",
			    ...
			  },
			  "tracking": {
			    "opens": true,
			    ...
			  },
			  "delivery_status": {
			    "enabled": false
			  },
			  ...
			}
		}
	}
}
```

<a name="getCampaigns"/>
## MailChimp.getCampaigns
Method description

| Field           | Type  | Description
|-----------------|-------|----------
| apiKey          | credentials| The api key obtained from MailChimp.
| type            | String| The campaign type.
| status          | String| The status of the campaign.
| beforeSendTime  | String| Restrict the response to campaigns sent before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.
| sinceSendTime   | String| Restrict the response to campaigns sent after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.
| beforeCreateTime| String| Restrict the response to campaigns created before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.
| sinceCreateTime | String| Restrict the response to campaigns created after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.
| listId          | String| The unique id for the list.
| folderId        | String| The unique folder id.

#### Request example
```json
{	"apiKey": "...",
	"type": "...",
	"status": "...",
	"beforeSendTime": "...",
	"sinceSendTime": "...",
	"beforeCreateTime": "...",
	"sinceCreateTime": "...",
	"listId": "...",
	"folderId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "campaigns": [
			    {
			      "id": "42694e9e57",
			      "type": "regular",
			      ...
			      "recipients": {
			        "list_id": "57afe96172",
			        "segment_text": ""
			      },
			      "settings": {
			        "subject_line": "I have a rice crispy treat watermelon farm.",
			        ...
			      },
			      "tracking": {
			        "opens": true,
			        ...
			      },
			      "delivery_status": {
			        "enabled": false
			      },
			      ...
			    },
			    {
			      "id": "f6276207cc",
			      ...
			      "recipients": {
			        ...
			      },
			      "settings": {
			        "subject_line": "Take my poll!",
			        ...
			      },
			      "tracking": {
			        "opens": true,
			        ...
			      },
			      "report_summary": {
			        "opens": 1,
			        ...
			      },
			      "delivery_status": {
			        "enabled": false
			      },
			      ...
			    }
			  ],
			  "total_items": 2,
				...
			}
		}
	}
}
```

<a name="getCampaign"/>
## MailChimp.getCampaign
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| campaignId| String| The campaign id.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "42694e9e57",
			  "type": "regular",
			  ...
			  "recipients": {
			    "list_id": "57afe96172",
			    ...
			  },
			  "settings": {
			    "subject_line": "I have a rice crispy treat watermelon farm.",
			    "title": "Freddie's Jokes Vol. 1",
			    ...
			  },
			  "tracking": {
			    "opens": true,
			    ...
			  },
			  "delivery_status": {
			    "enabled": false
			  },
			  ...
			}
		}
	}
}
```

<a name="updateCampaign"/>
## MailChimp.updateCampaign
Method description

| Field                            | Type  | Description
|----------------------------------|-------|----------
| apiKey                           | credentials| The api key obtained from MailChimp.
| campaignId                       | String| The api key obtained from MailChimp.
| recipientsListId                 | String| The unique list id.
| subjectLine                      | String| The subject line for the campaign.
| title                            | String| The title of the campaign.
| fromName                         | String| The ‘from’ name on the campaign (not an email address).
| replyTo                          | String| The reply-to email address for the campaign.
| useConversation                  | String| The reply-to email address for the campaign.
| toName                           | String| The campaign’s custom ‘To’ name.
| folderId                         | String| If the campaign is listed in a folder, the id for that folder.
| authenticate                     | String| Whether MailChimp authenticated the campaign. Defaults to true.
| autoFooter                       | String| Automatically append MailChimp’s default footer to the campaign.
| inlineCss                        | String| Automatically inline the CSS included with the campaign content.
| autoTweet                        | String| Automatically tweet a link to the campaign archive page when the campaign is sent.
| autoFbPost                       | Array | An array of Facebook page ids to auto-post to.
| fbComments                       | String| Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
| variateSettingsWinnerCriteria    | String| The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_critera is ignored. For Multivariate Campaigns with ‘manual’ as the winner_citeria, the winner must be chosen in the MailChimp web application. Possible Values: `opens`, `clicks`, `manual`, `total_revenue`
| variateSettingsWaitTime          | Number| The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
| variateSettingsTestSize          | Number| The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
| variateSettingsSubjectLines      | Array | The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
| variateSettingsSendTimes         | Array | The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
| variateSettingsFromNames         | Array | The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
| replyToAddresses                 | Array | The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
| trackingOpens                    | String| Whether to track opens. Defaults to true. Cannot be set to false for variate campaigns.
| trackingHtmlClicks               | String| Whether to track clicks in the HTML version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.
| trackingTextClicks               | String| Whether to track clicks in the plain-text version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.
| trackingGoalTracking             | String| Whether to enable Goal tracking.
| trackingEcomm360                 | String| Whether to enable eCommerce360 tracking.
| trackingGoogleAnalytics          | String| The custom slug for Google Analytics tracking (max of 50 bytes).
| trackingClicktale                | String| The custom slug for ClickTale tracking (max of 50 bytes).
| trackingSalesforceCampaign       | String| Create a campaign in a connected Salesforce account.
| trackingSalesforceNotes          | String| Update contact notes for a campaign based on subscriber email addresses.
| trackingHighriseCampaign         | String| Create a campaign in a connected Highrise account.
| trackingHighriseNotes            | String| Update contact notes for a campaign based on subscriber email addresses.
| trackingCapsuleNotes             | String| Update contact notes for a campaign based on subscriber email addresses.
| rssOptsFeedUrl                   | String| The URL for the RSS feed.
| rssOptsFrequency                 | String| The frequency of the RSS Campaign.
| rssOptsScheduleHour              | String| The hour to send the campaign in local time. Acceptable hours are 0-23. For example, ‘4’ would be 4am in your account’s default time zone.
| rssOptsScheduleDailySendSunday   | String| Sends the daily RSS Campaign on Sundays.
| rssOptsScheduleDailySendMonday   | String| TSends the daily RSS Campaign on Mondays.
| rssOptsScheduleDailySendTuesday  | String| Sends the daily RSS Campaign on Tuesdays.
| rssOptsScheduleDailySendWednesday| String| Sends the daily RSS Campaign on Wednesdays.
| rssOptsScheduleDailySendThursday | String| Sends the daily RSS Campaign on Thursdays.
| rssOptsScheduleDailySendFriday   | String| Sends the daily RSS Campaign on Fridays.
| rssOptsScheduleDailySendSaturday | String| Sends the daily RSS Campaign on Saturdays.
| rssOptsScheduleWeeklySendDay     | String| The day of the week to send a weekly RSS Campaign.
| rssOptsScheduleMonthlySendDate   | String| The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where ‘0’ is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
| rssOptsLastSent                  | String| The date the campaign was last sent.
| rssOptsConstrainRssImg           | String| Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
| socialCardImageUrl               | String| The url for the header image for the card.
| socialCardDescription            | String| A short summary of the campaign to display.
| socialCardTitle                  | String| The title for the card. Typically the subject line of the campaign.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "...",
	"recipientsListId": "...",
	"subjectLine": "...",
	"title": "...",
	"fromName": "...",
	"replyTo": "...",
	"useConversation": "...",
	"toName": "...",
	"folderId": "...",
	"authenticate": "...",
	"autoFooter": "...",
	"inlineCss": "...",
	"autoTweet": "...",
	"autoFbPost": "...",
	"fbComments": "...",
	"variateSettingsWinnerCriteria": "...",
	"variateSettingsWaitTime": 0,
	"variateSettingsTestSize": 0,
	"variateSettingsSubjectLines": "...",
	"variateSettingsSendTimes": "...",
	"variateSettingsFromNames": "...",
	"replyToAddresses": "...",
	"trackingOpens": "...",
	"trackingHtmlClicks": "...",
	"trackingTextClicks": "...",
	"trackingGoalTracking": "...",
	"trackingEcomm360": "...",
	"trackingGoogleAnalytics": "...",
	"trackingClicktale ": "...",
	"trackingSalesforceCampaign ": "...",
	"trackingSalesforceNotes ": "...",
	"trackingHighriseCampaign": "...",
	"trackingHighriseNotes": "...",
	"trackingCapsuleNotes": "...",
	"rssOptsFeedUrl": "...",
	"rssOptsFrequency": "...",
	"rssOptsScheduleHour": "...",
	"rssOptsScheduleDailySendSunday": "...",
	"rssOptsScheduleDailySendMonday": "...",
	"rssOptsScheduleDailySendTuesday": "...",
	"rssOptsScheduleDailySendWednesday": "...",
	"rssOptsScheduleDailySendThursday": "...",
	"rssOptsScheduleDailySendFriday": "...",
	"rssOptsScheduleDailySendSaturday": "...",
	"rssOptsScheduleWeeklySendDay": "...",
	"rssOptsScheduleMonthlySendDate": "...",
	"rssOptsLastSent": "...",
	"rssOptsConstrainRssImg": "...",
	"socialCardImageUrl": "...",
	"socialCardDescription": "...",
	"socialCardTitle": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "42694e9e57",
			  "type": "regular",
			  ...
			  "recipients": {
			    "list_id": "57afe96172",
			    ...
			  },
			  "settings": {
			    "subject_line": "I have a rice crispy treat watermelon farm.",
			    "title": "Freddie's Jokes Vol. 1",
			    ...
			  },
			  "tracking": {
			    "opens": true,
			    ...
			  },
			  "delivery_status": {
			    "enabled": false
			  },
			  ...
			}
		}
	}
}
```

<a name="deleteCampaign"/>
## MailChimp.deleteCampaign
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| campaignId| String| The unique id for the campaign.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="cancelCampaign"/>
## MailChimp.cancelCampaign
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| campaignId| String| The unique id for the campaign.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="replicateCampaign"/>
## MailChimp.replicateCampaign
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| campaignId| String| The unique id for the campaign.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="resumeRSSCampaign"/>
## MailChimp.resumeRSSCampaign
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| campaignId| String| The unique id for the campaign.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="scheduleCampaign"/>
## MailChimp.scheduleCampaign
Method description

| Field                  | Type  | Description
|------------------------|-------|----------
| apiKey                 | credentials| The api key obtained from MailChimp.
| campaignId             | String| The unique id for the campaign.
| scheduleTime           | String| The date and time in UTC to schedule the campaign for delivery. Campaigns may only be scheduled to send on the quarter-hour (:00, :15, :30, :45).
| timewarp               | String| Choose whether the campaign should use Timewarp when sending. Campaigns scheduled with Timewarp are localized based on the recipients’ time zones. For example, a Timewarp campaign with a schedule_time of 13:00 will be sent to each recipient at 1:00pm in their local time. Cannot be set to true for campaigns using Batch Delivery.
| batchDeliveryBatchDelay| String| The delay, in minutes, between batches.
| batchDeliveryBatchCount| String| The number of batches for the campaign send.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "...",
	"scheduleTime": "...",
	"timewarp": "...",
	"batchDeliveryBatchDelay": "...",
	"batchDeliveryBatchCount": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="sendCampaign"/>
## MailChimp.sendCampaign
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| campaignId| String| The unique id for the campaign.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="sendTestEmail"/>
## MailChimp.sendTestEmail
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| campaignId| String| The unique id for the campaign.
| testEmails| String| The unique id for the campaign.
| sendType  | String| The unique id for the campaign.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "...",
	"testEmails": "...",
	"sendType": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="unscheduleCampaign"/>
## MailChimp.unscheduleCampaign
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| campaignId| String| The unique id for the campaign.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="getCampaignContent"/>
## MailChimp.getCampaignContent
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| campaignId| String| The unique id for the campaign.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
				"plain_text": "...",
				"html": "..."
			}
		}
	}
}
```

<a name="getSendChecklist"/>
## MailChimp.getSendChecklist
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| campaignId| String| The unique id for the campaign.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "is_ready": true,
			  "items": [
			    {
			      "type": "success",
			      "heading": "List",
			      "details": "MailChimp will deliver this to the Orders list. (365 recipients) (#) "
			    },
			    {
			      "type": "success",
			      "heading": "Subject line",
			      "details": "\"Your Purchase Receipt\" "
			    }
			  ],
			  ...
			}
		}
	}
}
```

<a name="getConversationsList"/>
## MailChimp.getConversationsList
Method description

| Field | Type  | Description
|-------|-------|----------
| apiKey| credentials| The api key obtained from MailChimp.

#### Request example
```json
{	"apiKey": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "conversations": [
			    {
			      "id": "fa8c387539",
			      "message_count": 1,
			      "campaign_id": "42694e9e57",
			      "list_id": "57afe96172",
			      "unread_messages": 0,
			      "from_label": "Freddie Jokes (freddie@freddiesjokes.com)",
			      "from_email": "freddie@freddiesjokes.com",
			      "subject": "Re: I have a rice crispy treat watermelon farm.",
			      "last_message": {
			        "from_label": "freddie@freddiesjokes.com",
			        "from_email": "freddie@freddiesjokes.com",
			        "subject": "Re: I have a rice crispy treat watermelon farm.",
			        "message": "We&#39;re so glad you like it! Stay tuned for his next joke coming Monday.",
			        "read": true,
			        "timestamp": "2015-09-15 19:17:59"
			      },
			      ...
			      ]
			    }
			  ],
			  "total_items": 1,
			 ...
			}
		}
	}
}
```

<a name="getConversation"/>
## MailChimp.getConversation
Method description

| Field         | Type  | Description
|---------------|-------|----------
| apiKey        | credentials| The api key obtained from MailChimp.
| conversationId| String| The unique id for the campaign.

#### Request example
```json
{	"apiKey": "...",
	"conversationId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "fa8c387539",
		      "message_count": 1,
		      "campaign_id": "42694e9e57",
		      "list_id": "57afe96172",
		      "unread_messages": 0,
		      "from_label": "Freddie Jokes (freddie@freddiesjokes.com)",
		      "from_email": "freddie@freddiesjokes.com",
		      "subject": "Re: I have a rice crispy treat watermelon farm.",
		      "last_message": {
		        "from_label": "freddie@freddiesjokes.com",
		        "from_email": "freddie@freddiesjokes.com",
		        "subject": "Re: I have a rice crispy treat watermelon farm.",
		        "message": "We&#39;re so glad you like it! Stay tuned for his next joke coming Monday.",
		        "read": true,
		        "timestamp": "2015-09-15 19:17:59"
		      }
		}
	}
}
```

<a name="sendConversationMessage"/>
## MailChimp.sendConversationMessage
Method description

| Field         | Type  | Description
|---------------|-------|----------
| apiKey        | credentials| The api key obtained from MailChimp.
| conversationId| String| The unique id for the conversation.
| fromEmail     | String| A label representing the email of the sender of this message
| subject       | String| The subject of this message
| message       | String| The plain-text content of the message
| read          | String| Whether this message has been marked as read

#### Request example
```json
{	"apiKey": "...",
	"conversationId": "...",
	"fromEmail": "...",
	"subject": "...",
	"message": "...",
	"read": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
				  "id": "d7cd9cd4b8",
				  "conversation_id": "fa8c387539",
				  "list_id": 790425,
				  "from_label": "Freddie Jokes (freddie@freddiesjokes.com)",
				  "from_email": "urist.mcvankab@freddiesjokes.com",
				  "subject": "",
				  "message": "I love Freddie's jokes!",
				  "read": false,
				  "timestamp": "2015-09-15 20:41:53"
			}
		}
	}
}
```

<a name="getConversationMessages"/>
## MailChimp.getConversationMessages
Method description

| Field          | Type  | Description
|----------------|-------|----------
| apiKey         | credentials| The api key obtained from MailChimp.
| conversationId | String| The unique id for the campaign.
| isRead         | String| Whether a conversation message has been marked as read.
| beforeTimestamp| String| Restrict the response to messages created before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.
| sinceTimestamp | String| Restrict the response to messages created after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.

#### Request example
```json
{	"apiKey": "...",
	"conversationId": "...",
	"isRead": "...",
	"beforeTimestamp": "...",
	"sinceTimestamp": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
		  "conversation_messages": [
		    {
		      "id": "fa8c387539",
		      "conversation_id": "363a443a3f",
		      "list_id": 790425,
		      "from_label": "freddie@freddiesjokes.com",
		      "from_email": "freddie@freddiesjokes.com",
		      "subject": "Re: I have a rice crispy treat watermelon farm.",
		      "message": "We&#39;re so glad you like it! Stay tuned for his next joke coming Monday.",
		      "read": true,
		      "timestamp": "2015-09-15 19:17:59",
			}
		   ]
		}
	}
}
```

<a name="getConversationMessage"/>
## MailChimp.getConversationMessage
Method description

| Field         | Type  | Description
|---------------|-------|----------
| apiKey        | credentials| The api key obtained from MailChimp.
| conversationId| String| The unique id for the campaign.
| messageId     | String| Whether a conversation message has been marked as read.

#### Request example
```json
{	"apiKey": "...",
	"conversationId": "...",
	"messageId ": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
				  "id": "d7cd9cd4b8",
				  "conversation_id": "fa8c387539",
				  "list_id": 790425,
				  "from_label": "Freddie Jokes (freddie@freddiesjokes.com)",
				  "from_email": "urist.mcvankab@freddiesjokes.com",
				  "subject": "",
				  "message": "I love Freddie's jokes!",
				  "read": false,
				  "timestamp": "2015-09-15 20:41:53"
			}
		}
	}
}
```

<a name="createList"/>
## MailChimp.createList
Method description

| Field                    | Type  | Description
|--------------------------|-------|----------
| apiKey                   | credentials| The api key obtained from MailChimp.
| name                     | String| The name of the list.
| contactCompany           | String| The company name for the list.
| contactAddress1          | String| The street address for the list contact.
| contactAddress2          | String| The street address for the list contact.
| contactCity              | String| The city for the list contact.
| contactState             | String| The state for the list contact.
| contactZip               | String| The postal or zip code for the list contact.
| contactCountry           | String| A two-character ISO3166 country code. Defaults to US if invalid.
| contactPhone             | String| The phone number for the list contact.
| permissionReminder       | String| The permission reminder for the list.
| useArchiveBar            | String| Whether campaigns for this list use the Archive Bar in archives by default.
| campaignDefaultsFromName | String| The default from name for campaigns sent to this list.
| campaignDefaultsFromEmail| String| The default from email for campaigns sent to this list.
| campaignDefaultsSubject  | String| The default subject line for campaigns sent to this list.
| campaignDefaultsLanguage | String| The default language for this lists’s forms.
| notifyOnSubscribe        | String| The email address to send subscribe notifications to.
| notifyOnUnsubscribe      | String| The email address to send unsubscribe notifications to.
| emailTypeOption          | String| Whether the list supports multiple formats for emails. When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup.
| visibility               | String| Whether this list is public or private.

#### Request example
```json
{	"apiKey": "...",
	"name": "...",
	"contactCompany": "...",
	"contactAddress1": "...",
	"contactAddress2": "...",
	"contactCity": "...",
	"contactState": "...",
	"contactZip": "...",
	"contactCountry": "...",
	"contactPhone": "...",
	"permissionReminder": "...",
	"useArchiveBar": "...",
	"campaignDefaultsFromName": "...",
	"campaignDefaultsFromEmail": "...",
	"campaignDefaultsSubject": "...",
	"campaignDefaultsLanguage": "...",
	"notifyOnSubscribe": "...",
	"notifyOnUnsubscribe": "...",
	"emailTypeOption": "...",
	"visibility": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "1510500e0b",
			  "name": "Freddie's Favorite Hats",
			  "contact": {
			    "company": "MailChimp",
			    "address1": "675 Ponce De Leon Ave NE",
			    "address2": "Suite 5000",
			    "city": "Atlanta",
			    "state": "GA",
			    "zip": "30308",
			    "country": "US",
			    "phone": ""
			  },
			  "permission_reminder": "",
			  "use_archive_bar": true,
			  "campaign_defaults": {
			    "from_name": "Freddie",
			    "from_email": "freddie@freddiehats.com",
			    "subject": "",
			    "language": "en"
			  },
			  "notify_on_subscribe": "",
			  "notify_on_unsubscribe": "",
			  "date_created": "2015-09-16T14:55:51+00:00",
			  "list_rating": 0,
			  "email_type_option": true,
			  "subscribe_url_short": "http://eepurl.com/xxxx",
			  "subscribe_url_long": "http://freddieshats.usX.list-manage.com/subscribe?u=8d3a3db4d97663a9074efcc16&id=1510500e0b",
			  "beamer_address": "usX-xxxx-xxxx@inbound.mailchimp.com",
			  "visibility": "pub",
			  "modules": [],
			  "stats": {
			    "member_count": 0,
			    "unsubscribe_count": 0,
			    "cleaned_count": 0,
			    "member_count_since_send": 0,
			    "unsubscribe_count_since_send": 0,
			    "cleaned_count_since_send": 0,
			    "campaign_count": 0,
			    "campaign_last_sent": "",
			    "merge_field_count": 2,
			    "avg_sub_rate": 0,
			    "avg_unsub_rate": 0,
			    "target_sub_rate": 0,
			    "open_rate": 0,
			    "click_rate": 0,
			    "last_sub_date": "",
			    "last_unsub_date": ""
			  },
			  ...
			}
		}
	}
}
```

<a name="batchAddMembersToList"/>
## MailChimp.batchAddMembersToList
Method description

| Field  | Type  | Description
|--------|-------|----------
| apiKey | credentials| The api key obtained from MailChimp.
| listId | String| The unique id for the list.
| members| JSON  | 

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"members": "[{"email_address": "urist.mcvankab@freddiesjokes.com", "status": "subscribed"}, {"email_address": "urist.mcvankab+1@freddiesjokes.com", "status": "subscribed"}]"
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": 
			  "new_members": [
			    {
			      "id": "62eeb292278cc15f5817cb78f7790b08",
			      "email_address": "urist.mcvankab@freddiesjokes.com",
			      "unique_email_id": "88310588a3",
			      "email_type": "html",
			      "status": "subscribed",
			      "merge_fields": {
			        "FNAME": "",
			        ...
			      },
			      "interests": {
			        "b6eedaaa61": false,
			        ...
			      },
			      "stats": {
			        "avg_open_rate": 0,
			        "avg_click_rate": 0
			      },
			      "ip_signup": "",
			      "timestamp_signup": "",
			      "ip_opt": "199.33.145.48",
			      "timestamp_opt": "2016-08-30T14:43:13+00:00",
			      "member_rating": 2,
			      "last_changed": "2016-08-30T14:43:13+00:00",
			      "language": "",
			      "vip": false,
			      "email_client": "",
			      "location": {
			        ...
			      },
			      "list_id": "205d96e6b4"
			    },
			    {
			      "id": "f777bbffab8d1ceca8b757df63c47cb8",
			      "email_address": "urist.mcvankab+1@freddiesjokes.com",
			      "unique_email_id": "dac0d532c4",
			      "email_type": "html",
			      "status": "subscribed",
			      "merge_fields": {
			        "FNAME": "",
			        ...
			      },
			      "interests": {
			        "b6eedaaa61": false,
			       	...
			      },
			      "stats": {
			        "avg_open_rate": 0,
			        "avg_click_rate": 0
			      },
			      "ip_signup": "",
			      "timestamp_signup": "",
			      "ip_opt": "199.33.145.48",
			      "timestamp_opt": "2016-08-30T14:43:13+00:00",
			      "member_rating": 2,
			      "last_changed": "2016-08-30T14:43:13+00:00",
			      "language": "",
			      "vip": false,
			      "email_client": "",
			      "location": {
			        "latitude": 0,
			        "longitude": 0,
			        ...
			      },
			      "list_id": "205d96e6b4"
			    },
			  ],
			  "updated_members": [],
			  "errors": [],
			  "total_created": 2,
			  "total_updated": 0,
			  "error_count": 0
			}
		}
	}
}
```

<a name="getList"/>
## MailChimp.getList
Method description

| Field | Type  | Description
|-------|-------|----------
| apiKey| credentials| The api key obtained from MailChimp.
| listId| String| The unique id for the list.

#### Request example
```json
{	"apiKey": "...",
	"listId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": 
				{
				  "id": "57afe96172",
				  "name": "Freddie's Jokes",
				  "contact": {
				    "company": "MailChimp",
				    "address1": "675 Ponce De Leon Ave NE",
				    "address2": "Suite 5000",
				    ...
				  },
				  "permission_reminder": "",
				  "use_archive_bar": false,
				  "campaign_defaults": {
				    "from_name": "Freddie",
				    ...
				  },
				  "notify_on_subscribe": "",
				  "notify_on_unsubscribe": "",
				  "date_created": "2015-09-15T14:38:16+00:00",
				  "list_rating": 3,
				  "email_type_option": false,
				  "subscribe_url_short": "http://eepurl.com/xxxx",
				  "subscribe_url_long": "http://freddiesjokes.usX.list-manage1.com/subscribe?u=8d3a3db4d97663a9074efcc16&id=57afe96172",
				  "beamer_address": "usX-xxxx-xxxx@inbound.mailchimp.com",
				  "visibility": "prv",
				  "modules": [],
				  "stats": {
				    "member_count": 203,
				    "unsubscribe_count": 0,
				    ...
				  },
				  ...
			}
		}
	}
}
```

<a name="getLists"/>
## MailChimp.getList
Method description

| Field | Type  | Description
|-------|-------|----------
| apiKey| credentials| The api key obtained from MailChimp.
| listId| String| The unique id for the list.

#### Request example
```json
{	"apiKey": "...",
	"listId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": 
				{
				  "lists": [
				    {
				      "id": "57afe96172",
				      "name": "Freddie's Jokes",
				      "contact": {
				        "company": "MailChimp",
				        ...
				      },
				      ,,,
				    }
				  ]
				  ...
				  "total_items": 1
			}
		}
	}
}
```

<a name="deleteList"/>
## MailChimp.deleteList
Method description

| Field | Type  | Description
|-------|-------|----------
| apiKey| credentials| The api key obtained from MailChimp.
| listId| String| The unique id for the list.

#### Request example
```json
{	"apiKey": "...",
	"listId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Success"
		}
	}
}
```

<a name="updateList"/>
## MailChimp.updateList
Method description

| Field                    | Type  | Description
|--------------------------|-------|----------
| apiKey                   | credentials| The api key obtained from MailChimp.
| listId                   | String| 
| name                     | String| The name of the list.
| contactCompany           | String| The company name for the list.
| contactAddress1          | String| The street address for the list contact.
| contactAddress2          | String| The street address for the list contact.
| contactCity              | String| The city for the list contact.
| contactState             | String| The state for the list contact.
| contactZip               | String| The postal or zip code for the list contact.
| contactCountry           | String| A two-character ISO3166 country code. Defaults to US if invalid.
| contactPhone             | String| The phone number for the list contact.
| permissionReminder       | String| The permission reminder for the list.
| useArchiveBar            | String| Whether campaigns for this list use the Archive Bar in archives by default.
| campaignDefaultsFromName | String| The default from name for campaigns sent to this list.
| campaignDefaultsFromEmail| String| The default from email for campaigns sent to this list.
| campaignDefaultsSubject  | String| The default subject line for campaigns sent to this list.
| campaignDefaultsLanguage | String| The default language for this lists’s forms.
| notifyOnSubscribe        | String| The email address to send subscribe notifications to.
| notifyOnUnsubscribe      | String| The email address to send unsubscribe notifications to.
| emailTypeOption          | String| Whether the list supports multiple formats for emails. When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup.
| visibility               | String| Whether this list is public or private.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"name": "...",
	"contactCompany": "...",
	"contactAddress1": "...",
	"contactAddress2": "...",
	"contactCity": "...",
	"contactState": "...",
	"contactZip": "...",
	"contactCountry": "...",
	"contactPhone": "...",
	"permissionReminder": "...",
	"useArchiveBar": "...",
	"campaignDefaultsFromName": "...",
	"campaignDefaultsFromEmail": "...",
	"campaignDefaultsSubject": "...",
	"campaignDefaultsLanguage": "...",
	"notifyOnSubscribe": "...",
	"notifyOnUnsubscribe": "...",
	"emailTypeOption": "...",
	"visibility": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": "1510500e0b",
			  "name": "Freddie's Favorite Hats",
			  "contact": {
			    "company": "MailChimp",
			    "address1": "675 Ponce De Leon Ave NE",
			    "address2": "Suite 5000",
			    "city": "Atlanta",
			    "state": "GA",
			    "zip": "30308",
			    "country": "US",
			    "phone": ""
			  },
			  "permission_reminder": "",
			  "use_archive_bar": true,
			  "campaign_defaults": {
			    "from_name": "Freddie",
			    "from_email": "freddie@freddiehats.com",
			    "subject": "",
			    "language": "en"
			  },
			  "notify_on_subscribe": "",
			  "notify_on_unsubscribe": "",
			  "date_created": "2015-09-16T14:55:51+00:00",
			  "list_rating": 0,
			  "email_type_option": true,
			  "subscribe_url_short": "http://eepurl.com/xxxx",
			  "subscribe_url_long": "http://freddieshats.usX.list-manage.com/subscribe?u=8d3a3db4d97663a9074efcc16&id=1510500e0b",
			  "beamer_address": "usX-xxxx-xxxx@inbound.mailchimp.com",
			  "visibility": "pub",
			  "modules": [],
			  "stats": {
			    "member_count": 0,
			    "unsubscribe_count": 0,
			    "cleaned_count": 0,
			    "member_count_since_send": 0,
			    "unsubscribe_count_since_send": 0,
			    "cleaned_count_since_send": 0,
			    "campaign_count": 0,
			    "campaign_last_sent": "",
			    "merge_field_count": 2,
			    "avg_sub_rate": 0,
			    "avg_unsub_rate": 0,
			    "target_sub_rate": 0,
			    "open_rate": 0,
			    "click_rate": 0,
			    "last_sub_date": "",
			    "last_unsub_date": ""
			  },
			  ...
			}
		}
	}
}
```

<a name="getAbuseReportsList"/>
## MailChimp.getAbuseReportsList
Method description

| Field | Type  | Description
|-------|-------|----------
| apiKey| credentials| The api key obtained from MailChimp.
| listId| String| The unique id for the list.

#### Request example
```json
{	"apiKey": "...",
	"listId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": 
			{
			  "abuse_reports": [
			    {
			      "id": 42,
			      "campaign_id": "839488a60b",
			      "list_id": "1a2df69511",
			      "email_id": "62eeb292278cc15f5817cb78f7790b08",
			      "email_address": "urist.mcvankab@freddiesjokes.com",
			      "date": "string"
			    }
			  ],
			  "list_id": "1a2df69511",
			  "total_items": 1,
			  ...
			}
		}
	}
}
```

<a name="getAbuseReport"/>
## MailChimp.getAbuseReport
Method description

| Field   | Type  | Description
|---------|-------|----------
| apiKey  | credentials| The api key obtained from MailChimp.
| listId  | String| The unique id for the list.
| reportId| String| The unique id for the report.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"reportId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "id": 42,
			  "campaign_id": "839488a60b",
			  "list_id": "1a2df69511",
			  "email_id": "62eeb292278cc15f5817cb78f7790b08",
			  "email_address": "urist.mcvankab@freddiesjokes.com",
			  "date": "2015-07-15T19:19:31+00:00",
			  ...
			}
		}
	}
}
```

<a name="getListActivity"/>
## MailChimp.getListActivity
Method description

| Field | Type  | Description
|-------|-------|----------
| apiKey| credentials| The api key obtained from MailChimp.
| listId| String| The unique id for the list.

#### Request example
```json
{	"apiKey": "...",
	"listId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
			  "activity": [
			    {
			      "day": "2015-09-16",
			      "emails_sent": 23,
			      "unique_opens": 20,
			      "recipient_clicks": 36,
			      "hard_bounce": 0,
			      "soft_bounce": 0,
			      "subs": 12,
			      "unsubs": 0,
			      "other_adds": 2,
			      "other_removes": 0
			    },
			    {
			      "day": "2015-09-15",
			      "emails_sent": 0,
			      "unique_opens": 0,
			      "recipient_clicks": 0,
			      "hard_bounce": 0,
			      "soft_bounce": 0,
			      "subs": 1,
			      "unsubs": 0,
			      "other_adds": 202,
			      "other_removes": 0
			    }
			  ],
			  "list_id": "57afe96172",
			  "total_items": 13517,
			  ...
			}    
		}
	}
}
```

<a name="createInterestCategory"/>
## MailChimp.createInterestCategory
Method description

| Field       | Type  | Description
|-------------|-------|----------
| apiKey      | credentials| The api key obtained from MailChimp.
| listId      | String| The unique id for the list.
| title       | String| The text description of this category. This field appears on signup forms and is often phrased as a question.
| displayOrder| String| The order that the categories are displayed in the list. Lower numbers display first.
| type        | String| Determines how this category’s interests are displayed on signup forms.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"title": "...",
	"displayOrder": "...",
	"type": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":""
		}
	}
}
```

<a name="getInterestCategories"/>
## MailChimp.getInterestCategories
Method description

| Field        | Type  | Description
|--------------|-------|----------
| apiKey       | credentials| The api key obtained from MailChimp.
| listId       | String| The unique id for the list.
| fields       | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields| String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
| count        | String| The number of records to return.
| offset       | String| The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.
| type         | String| Restrict results a type of interest group

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"fields": "...",
	"excludeFields": "...",
	"count": "...",
	"offset": "...",
	"type": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getInterestCategory"/>
## MailChimp.getInterestCategory
Method description

| Field             | Type  | Description
|-------------------|-------|----------
| apiKey            | credentials| The api key obtained from MailChimp.
| listId            | String| The unique id for the list.
| interestCategoryId| String| The unique id for the interest category.
| fields            | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields     | String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"interestCategoryId": "...",
	"fields": "...",
	"excludeFields": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getTopEmailClients"/>
## MailChimp.getTopEmailClients
Method description

| Field | Type  | Description
|-------|-------|----------
| apiKey| credentials| The api key obtained from MailChimp.
| listId| String| The unique id for the list.

#### Request example
```json
{	"apiKey": "...",
	"listId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":{
			  "clients": [
			    {
			      "client": "Gmail",
			      "members": 50,
			      "list_id": "57afe96172"
			    }
			  ],
			  "list_id": "57afe96172",
			  "total_items": 1,
			  "_links": [
			    {
			      "rel": "self",
			      "href": "https://usX.api.mailchimp.com/3.0/lists/57afe96172/clients",
			      "method": "GET",
			      "targetSchema": "https://api.mailchimp.com/schema/3.0/Lists/Clients/Collection.json"
			    },
			    {
			      "rel": "parent",
			      "href": "https://usX.api.mailchimp.com/3.0/lists/57afe96172/",
			      "method": "GET",
			      "targetSchema": "https://api.mailchimp.com/schema/3.0/Lists/Instance.json"
			    }
			  ]
			}
		}
	}
}
```

<a name="getListGrowthHistory"/>
## MailChimp.getListGrowthHistory
Method description

| Field        | Type  | Description
|--------------|-------|----------
| apiKey       | credentials| The api key obtained from MailChimp.
| listId       | String| The unique id for the list.
| fields       | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields| String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
| count        | String| The number of records to return.
| offset       | String| The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"fields": "...",
	"excludeFields": "...",
	"count": "...",
	"offset": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getMonthListGrowth"/>
## MailChimp.getMonthListGrowth
Method description

| Field        | Type  | Description
|--------------|-------|----------
| apiKey       | credentials| The api key obtained from MailChimp.
| listId       | String| The unique id for the list.
| month        | String| The unique id for the list.
| fields       | String| The unique id for the list.
| excludeFields| String| The unique id for the list.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"month": "...",
	"fields": "...",
	"excludeFields": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateInterestCategory"/>
## MailChimp.updateInterestCategory
Method description

| Field             | Type  | Description
|-------------------|-------|----------
| apiKey            | credentials| The api key obtained from MailChimp.
| listId            | String| The unique id for the list.
| interestCategoryId| String| The unique id for the interest category.
| title             | String| The text description of this category. This field appears on signup forms and is often phrased as a question.
| displayOrder      | String| The order that the categories are displayed in the list. Lower numbers display first.
| type              | String| Determines how this category’s interests are displayed on signup forms.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"interestCategoryId": "...",
	"title": "...",
	"displayOrder": "...",
	"type": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createInterest"/>
## MailChimp.createInterest
Method description

| Field             | Type  | Description
|-------------------|-------|----------
| apiKey            | credentials| The api key obtained from MailChimp.
| listId            | String| The unique id for the list.
| interestCategoryId| String| The unique id for the interest category.
| name              | String| The name of the interest. This can be shown publicly on a subscription form.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"interestCategoryId": "...",
	"name": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getAllInterests"/>
## MailChimp.getAllInterests
Method description

| Field             | Type  | Description
|-------------------|-------|----------
| apiKey            | credentials| The api key obtained from MailChimp.
| listId            | String| The unique id for the list.
| interestCategoryId| String| The unique id for the interest category.
| fields            | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields     | String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
| count             | String| The number of records to return.
| offset            | String| The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"interestCategoryId": "...",
	"fields": "...",
	"excludeFields": "...",
	"count": "...",
	"offset": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getInterests"/>
## MailChimp.getInterests
Method description

| Field             | Type  | Description
|-------------------|-------|----------
| apiKey            | credentials| The api key obtained from MailChimp.
| listId            | String| The unique id for the list.
| interestCategoryId| String| The unique id for the interest category.
| interestId        | String| The specific interest or group name.
| fields            | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields     | String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"interestCategoryId": "...",
	"interestId": "...",
	"fields": "...",
	"excludeFields": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateInterests"/>
## MailChimp.updateInterests
Method description

| Field             | Type  | Description
|-------------------|-------|----------
| apiKey            | credentials| The api key obtained from MailChimp.
| listId            | String| The unique id for the list.
| interestCategoryId| String| The unique id for the interest category.
| interestId        | String| The specific interest or group name.
| newListId         | String| The ID for the list that this interest belongs to.
| name              | String| The name of the interest. This can be shown publicly on a subscription form.
| subscriberCount   | String| The number of subscribers associated with this interest.
| displayOrder      | String| The display order for interests.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"interestCategoryId": "...",
	"interestId": "...",
	"newListId": "...",
	"name": "...",
	"subscriberCount": "...",
	"displayOrder": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteInterests"/>
## MailChimp.deleteInterests
Method description

| Field             | Type  | Description
|-------------------|-------|----------
| apiKey            | credentials| The api key obtained from MailChimp.
| listId            | String| The unique id for the list.
| interestCategoryId| String| The unique id for the interest category.
| interestId        | String| The specific interest or group name.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"interestCategoryId": "...",
	"interestId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="setCampaignContentHTML"/>
## MailChimp.setCampaignContentHTML
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| campaignId| String| The unique id for the campaign.
| plainText | String| The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.
| html      | String| The raw HTML for the campaign.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "...",
	"plainText": "...",
	"html": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
				"plain_text": "...",
				"html": "..."
			}
		}
	}
}
```

<a name="setCampaignContentFromURL"/>
## MailChimp.setCampaignContentFromURL
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| campaignId| String| The unique id for the campaign.
| plainText | String| The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.
| url       | String| When importing a campaign, the URL where the HTML lives.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "...",
	"plainText": "...",
	"url": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
				"plain_text": "...",
				"html": "..."
			}
		}
	}
}
```

<a name="setCampaignContentFromTemplate"/>
## MailChimp.setCampaignContentFromTemplate
Method description

| Field           | Type  | Description
|-----------------|-------|----------
| apiKey          | credentials| The api key obtained from MailChimp.
| campaignId      | String| The unique id for the campaign.
| templateId      | String| The id of the template to use.
| templateSections| String| Content for the sections of the template. Each key should be the unique mc:edit area name from the template.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "...",
	"templateId": "...",
	"templateSections": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to": {
				"plain_text": "...",
				"html": "..."
			}
		}
	}
}
```

<a name="addMember"/>
## MailChimp.addMember
Method description

| Field             | Type  | Description
|-------------------|-------|----------
| apiKey            | credentials| The api key obtained from MailChimp.
| listId            | String|  The unique id for the list.
| emailType         | String| Type of email this member asked to get (‘html’ or ‘text’).
| status            | String| Subscriber’s current status.
| mergeFields       | String| An individual merge var and value for a member.
| interests         | String| The key of this object’s properties is the ID of the interest in question.
| language          | String| If set/detected, the subscriber’s language.
| vip               | String| VIP status for subscriber.
| locationLatitude  | String| The location latitude.
| locationLongtitude| String| The location longitude.
| ipSignup          | String| IP address the subscriber signed up from.
| timestampSignup   | String| The date and time the subscriber signed up for the list.
| ipOpt             | String| The IP address the subscriber used to confirm their opt-in status.
| timestampOpt      | String| The date and time the subscribe confirmed their opt-in status.
| emailAddress      | String| Email address for a subscriber.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"emailType": "...",
	"status": "...",
	"mergeFields": "...",
	"interests": "...",
	"language": "...",
	"vip": "...",
	"locationLatitude": "...",
	"locationLongtitude": "...",
	"ipSignup": "...",
	"timestampSignup": "...",
	"ipOpt": "...",
	"timestampOpt": "...",
	"emailAddress": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getMembers"/>
## MailChimp.getMembers
Method description

| Field             | Type  | Description
|-------------------|-------|----------
| apiKey            | credentials| The api key obtained from MailChimp.
| listId            | String|  The unique id for the list.
| fields            | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields     | String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
| count             | String| The number of records to return.
| offset            | String| The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.
| emailType         | String| The email type.
| status            | String| The subscriber’s status.
| sinceTimestampOpt | String| Restrict results to subscribers who opted-in after the set timeframe.
| beforeTimestampOpt| String| Restrict results to subscribers who opted-in before the set timeframe.
| sinceLastChanged  | String| Restrict results to subscribers whose information changed after the set timeframe.
| beforeLastChanged | String| Restrict results to subscribers whose information changed before the set timeframe.
| uniqueEmailId     | String| A unique identifier for the email address across all MailChimp lists. This parameter can be found in any links with Ecommerce Tracking enabled.
| vipOnly           | String| A filter to return only the list’s VIP members. Passing true will restrict results to VIP list members, passing false will return all list members.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"fields": "...",
	"excludeFields": "...",
	"count": "...",
	"offset": "...",
	"emailType": "...",
	"status": "...",
	"sinceTimestampOpt": "...",
	"beforeTimestampOpt": "...",
	"sinceLastChanged": "...",
	"beforeLastChanged": "...",
	"uniqueEmailId": "...",
	"vipOnly": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getMembers"/>
## MailChimp.getMembers
Method description

| Field         | Type  | Description
|---------------|-------|----------
| apiKey        | credentials| The api key obtained from MailChimp.
| listId        | String|  The unique id for the list.
| subscriberHash| String| The MD5 hash of the lowercase version of the list member’s email address.
| fields        | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields | String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"subscriberHash": "...",
	"fields": "...",
	"excludeFields": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateMember"/>
## MailChimp.updateMember
Method description

| Field             | Type  | Description
|-------------------|-------|----------
| apiKey            | credentials| The api key obtained from MailChimp.
| listId            | String|  The unique id for the list.
| subscriberHash    | String| The MD5 hash of the lowercase version of the list member’s email address.
| emailType         | String| Type of email this member asked to get (‘html’ or ‘text’).
| status            | String| Subscriber’s current status.
| mergeFields       | String| An individual merge var and value for a member.
| interests         | String| The key of this object’s properties is the ID of the interest in question.
| language          | String| If set/detected, the subscriber’s language.
| vip               | String| VIP status for subscriber.
| locationLatitude  | String| The location latitude.
| locationLongtitude| String| The location longitude.
| ipSignup          | String| IP address the subscriber signed up from.
| timestampSignup   | String| The date and time the subscriber signed up for the list.
| ipOpt             | String| The IP address the subscriber used to confirm their opt-in status.
| timestamp         | String| The date and time the subscribe confirmed their opt-in status.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"subscriberHash": "...",
	"emailType": "...",
	"status": "...",
	"mergeFields": "...",
	"interests": "...",
	"language": "...",
	"vip": "...",
	"locationLatitude": "...",
	"locationLongtitude": "...",
	"ipSignup": "...",
	"timestampSignup": "...",
	"ipOpt": "...",
	"timestamp": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteMember"/>
## MailChimp.deleteMember
Method description

| Field         | Type  | Description
|---------------|-------|----------
| apiKey        | credentials| The api key obtained from MailChimp.
| listId        | String|  The unique id for the list.
| subscriberHash| String| The MD5 hash of the lowercase version of the list member’s email address.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"subscriberHash": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getMemberActivity"/>
## MailChimp.getMemberActivity
Method description

| Field         | Type  | Description
|---------------|-------|----------
| apiKey        | credentials| The api key obtained from MailChimp.
| listId        | String|  The unique id for the list.
| subscriberHash| String| The MD5 hash of the lowercase version of the list member’s email address.
| fields        | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields | String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"subscriberHash": "...",
	"fields": "...",
	"excludeFields": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getMemberGoals"/>
## MailChimp.getMemberGoals
Method description

| Field         | Type  | Description
|---------------|-------|----------
| apiKey        | credentials| The api key obtained from MailChimp.
| listId        | String|  The unique id for the list.
| subscriberHash| String| The MD5 hash of the lowercase version of the list member’s email address.
| fields        | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields | String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"subscriberHash": "...",
	"fields": "...",
	"excludeFields": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="addNote"/>
## MailChimp.addNote
Method description

| Field         | Type  | Description
|---------------|-------|----------
| apiKey        | credentials| The api key obtained from MailChimp.
| listId        | String|  The unique id for the list.
| subscriberHash| String| The MD5 hash of the lowercase version of the list member’s email address.
| note          | String| The content of the note.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"subscriberHash": "...",
	"note": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getNote"/>
## MailChimp.getNote
Method description

| Field         | Type  | Description
|---------------|-------|----------
| apiKey        | credentials| The api key obtained from MailChimp.
| listId        | String|  The unique id for the list.
| subscriberHash| String| The MD5 hash of the lowercase version of the list member’s email address.
| noteId        | String| The content of the note.
| fields        | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields | String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"subscriberHash": "...",
	"noteId": "...",
	"fields": "...",
	"excludeFields": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateNote"/>
## MailChimp.updateNote
Method description

| Field         | Type  | Description
|---------------|-------|----------
| apiKey        | credentials| The api key obtained from MailChimp.
| listId        | String|  The unique id for the list.
| subscriberHash| String| The MD5 hash of the lowercase version of the list member’s email address.
| noteId        | String| The content of the note.
| note          | String| The content of the note.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"subscriberHash": "...",
	"noteId": "...",
	"note": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteNote"/>
## MailChimp.deleteNote
Method description

| Field         | Type  | Description
|---------------|-------|----------
| apiKey        | credentials| The api key obtained from MailChimp.
| listId        | String|  The unique id for the list.
| subscriberHash| String| The MD5 hash of the lowercase version of the list member’s email address.
| noteId        | String| The content of the note.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"subscriberHash": "...",
	"noteId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="addMergeField"/>
## MailChimp.addMergeField
Method description

| Field                | Type  | Description
|----------------------|-------|----------
| apiKey               | credentials| The api key obtained from MailChimp.
| listId               | String|  The unique id for the list.
| tag                  | String| The tag used in MailChimp campaigns and for the /members endpoint.
| name                 | String| The name of the merge field.
| required             | String| The boolean value if the merge field is required.
| defaultValue         | String| The default value for the merge field if null.
| public               | String| Whether the merge field is displayed on the signup form.
| displayOrder         | String| The order that the merge field displays on the list signup form.
| optionsDefaultCountry| String| In an address field, the default country code if none supplied.
| optionsPhoneFormat   | String| In a phone field, the phone number type: US or International.
| optionsDateFormat    | String| In a date or birthday field, the format of the date.
| optionsChoices       | String| In a radio or dropdown non-group field, the available options for members to pick from.
| optionsSize          | String| In a text field, the default length of the text field.
| helpText             | String| Extra text to help the subscriber fill out the form.
| type                 | String| The type for the merge field.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"tag": "...",
	"name": "...",
	"required": "...",
	"defaultValue": "...",
	"public": "...",
	"displayOrder": "...",
	"optionsDefaultCountry": "...",
	"optionsPhoneFormat": "...",
	"optionsDateFormat": "...",
	"optionsChoices": "...",
	"optionsSize": "...",
	"helpText": "...",
	"type": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="addSegment"/>
## MailChimp.addSegment
Method description

| Field                         | Type  | Description
|-------------------------------|-------|----------
| apiKey                        | credentials| The api key obtained from MailChimp.
| listId                        | String|  The unique id for the list.
| name                          | String| The name of the segment.
| staticSegment                 | String| An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. Passing an empty array will create a static segment without any subscribers. This field cannot be provided with the options field.
| optionsMatch                  | String| Match type.
| optionsConditionsConditionType| String| The type of segment, for example: date, language, Mandrill, static, and more.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"name": "...",
	"staticSegment": "...",
	"optionsMatch": "...",
	"optionsConditionsConditionType": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getAllSegments"/>
## MailChimp.getAllSegments
Method description

| Field          | Type  | Description
|----------------|-------|----------
| apiKey         | credentials| The api key obtained from MailChimp.
| listId         | String|  The unique id for the list.
| fields         | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields  | String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
| count          | String| The number of records to return.
| offset         | String| The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.
| type           | String| Limit results based on segment type.
| sinceCreatedAt | String| Restrict results to segments created after the set time.
| beforeCreatedAt| String| Restrict results to segments created before the set time.
| sinceUpdatedAt | String| Restrict results to segments update after the set time.
| beforeUpdatedAt| String| Restrict results to segments update before the set time.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"fields": "...",
	"excludeFields": "...",
	"count": "...",
	"offset": "...",
	"type": "...",
	"sinceCreatedAt": "...",
	"beforeCreatedAt": "...",
	"sinceUpdatedAt": "...",
	"beforeUpdatedAt": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getSegment"/>
## MailChimp.getSegment
Method description

| Field        | Type  | Description
|--------------|-------|----------
| apiKey       | credentials| The api key obtained from MailChimp.
| listId       | String|  The unique id for the list.
| segmentId    | String| The unique id for the segment.
| fields       | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields| String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"segmentId": "...",
	"fields": "...",
	"excludeFields": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateSegment"/>
## MailChimp.updateSegment
Method description

| Field                         | Type  | Description
|-------------------------------|-------|----------
| apiKey                        | credentials| The api key obtained from MailChimp.
| listId                        | String|  The unique id for the list.
| segmentId                     | String| The unique id for the segment.
| name                          | String| The name of the segment.
| staticSegment                 | String| An array of emails to be used for a static segment. Any emails provided that are not present on the list will be ignored. Passing an empty array will create a static segment without any subscribers. This field cannot be provided with the options field.
| optionsMatch                  | String| Match type.
| optionsConditionsConditionType| String| An array of segment conditions.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"segmentId": "...",
	"name": "...",
	"staticSegment": "...",
	"optionsMatch": "...",
	"optionsConditionsConditionType": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteSegment"/>
## MailChimp.deleteSegment
Method description

| Field    | Type  | Description
|----------|-------|----------
| apiKey   | credentials| The api key obtained from MailChimp.
| listId   | String|  The unique id for the list.
| segmentId| String| The unique id for the segment.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"segmentId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="addStaticSegmentMember"/>
## MailChimp.addStaticSegmentMember
Method description

| Field       | Type  | Description
|-------------|-------|----------
| apiKey      | credentials| The api key obtained from MailChimp.
| listId      | String|  The unique id for the list.
| segmentId   | String| The unique id for the segment.
| emailAddress| String| Email address for a subscriber.
| status      | String| Subscriber’s current status.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"segmentId": "...",
	"emailAddress": "...",
	"status": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getAllMembers"/>
## MailChimp.getAllMembers
Method description

| Field        | Type  | Description
|--------------|-------|----------
| apiKey       | credentials| The api key obtained from MailChimp.
| listId       | String|  The unique id for the list.
| segmentId    | String| The unique id for the segment.
| fields       | String| A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields| String| A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
| count        | String| The number of records to return.
| offset       | String| The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"segmentId": "...",
	"fields": "...",
	"excludeFields": "...",
	"count": "...",
	"offset": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteStaticSegmentMember"/>
## MailChimp.deleteStaticSegmentMember
Method description

| Field         | Type  | Description
|---------------|-------|----------
| apiKey        | credentials| The api key obtained from MailChimp.
| listId        | String|  The unique id for the list.
| segmentId     | String| The unique id for the segment.
| subscriberHash| String| The MD5 hash of the lowercase version of the list member’s email address.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"segmentId": "...",
	"subscriberHash": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="addSignupForm"/>
## MailChimp.addSignupForm
Method description

| Field                 | Type  | Description
|-----------------------|-------|----------
| apiKey                | credentials| The api key obtained from MailChimp.
| listId                | String|  The unique id for the list.
| headerImageUrl        | String| Header image URL.
| headerText            | String| Header text.
| headerImageWidth      | String| Image width, in pixels.
| headerImageHeight     | String| Image height, in pixels.
| headerImageAlt        | String| Alt text for the image.
| headerImageLink       | String| The URL that the header image will link to.
| headerImageAlign      | String| Image alignment.
| headerImageBorderWidth| String| Image border width.
| headerImageBorderStyle| String| Image border style.
| headerImageBorderColor| String| Image border color.
| headerImageTarget     | String| Image link target.
| contentsSection       | String| The content section name.
| contentsValue         | String| The content section text.
| styleSelector         | String| A string that identifies the element selector.
| styleOptionsProperty  | String| A string that identifies the property.
| styleOptionsValue     | String| A string that identifies value of the property.
| signupFormUrl         | String| Signup form URL.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"headerImageUrl": "...",
	"headerText": "...",
	"headerImageWidth": "...",
	"headerImageHeight": "...",
	"headerImageAlt": "...",
	"headerImageLink": "...",
	"headerImageAlign": "...",
	"headerImageBorderWidth": "...",
	"headerImageBorderStyle": "...",
	"headerImageBorderColor": "...",
	"headerImageTarget": "...",
	"contentsSection": "...",
	"contentsValue": "...",
	"styleSelector": "...",
	"styleOptionsProperty": "...",
	"styleOptionsValue": "...",
	"signupFormUrl": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getSignupForm"/>
## MailChimp.getSignupForm
Method description

| Field | Type  | Description
|-------|-------|----------
| apiKey| credentials| The api key obtained from MailChimp.
| listId| String|  The unique id for the list.

#### Request example
```json
{	"apiKey": "...",
	"listId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createTwitterLeadGenerationCard"/>
## MailChimp.createTwitterLeadGenerationCard
Method description

| Field           | Type  | Description
|-----------------|-------|----------
| apiKey          | credentials| The api key obtained from MailChimp.
| listId          | String|  The unique id for the list.
| id              | String|  The unique id for the list.
| name            | String|  The unique id for the list.
| title           | String|  The unique id for the list.
| ctaText         | String|  The unique id for the list.
| privacyPolicyUrl| String|  The unique id for the list.
| customKeyName   | String|  The unique id for the list.
| imageUrl        | String|  The unique id for the list.
| twitterCardId   | String|  The unique id for the list.
| twitterAccountId| String|  The unique id for the list.
| listIdOpt       | String|  The unique id for the list.
| previewUrl      | String|  The unique id for the list.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"id": "...",
	"name": "...",
	"title": "...",
	"ctaText": "...",
	"privacyPolicyUrl": "...",
	"customKeyName": "...",
	"imageUrl": "...",
	"twitterCardId": "...",
	"twitterAccountId": "...",
	"listIdOpt": "...",
	"previewUrl": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getAllTwitterLeadGenerationCards"/>
## MailChimp.getAllTwitterLeadGenerationCards
Method description

| Field | Type  | Description
|-------|-------|----------
| apiKey| credentials| The api key obtained from MailChimp.
| listId| String|  The unique id for the list.

#### Request example
```json
{	"apiKey": "...",
	"listId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getTwitterLeadGenerationCard"/>
## MailChimp.getTwitterLeadGenerationCard
Method description

| Field        | Type  | Description
|--------------|-------|----------
| apiKey       | credentials| The api key obtained from MailChimp.
| listId       | String|  The unique id for the list.
| twitterCardId| String|  The unique ID for the Twitter Lead Generation Card.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"twitterCardId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createWebhook"/>
## MailChimp.createWebhook
Method description

| Field            | Type  | Description
|------------------|-------|----------
| apiKey           | credentials| The api key obtained from MailChimp.
| listId           | String|  The unique id for the list.
| url              | String| A valid URL for the Webhook.
| eventsSubscribe  | String| Optional: Whether the webhook is triggered when a list subscriber is added.
| eventsUnsubscribe| String| Optional: Whether the webhook is triggered when a list member unsubscribes.
| eventsProfile    | String| Optional: Whether the webhook is triggered when a subscriber’s profile is updated.
| eventsCleaned    | String| Optional: Whether the webhook is triggered when a subscriber’s email address is cleaned from the list.
| eventsUpemail    | String| Optional: Whether the webhook is triggered when a subscriber’s email address is changed.
| eventsCampaign   | String| Optional: Whether the webhook is triggered when a campaign is sent or cancelled.
| sourcesUser      | String| Optional: Whether the webhook is triggered by subscriber-initiated actions.
| sourcesAdmin     | String| Optional: Whether the webhook is triggered by admin-initiated actions in the web interface.
| sourcesApi       | String| Optional: Whether the webhook is triggered by actions initiated via the API.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"url": "...",
	"eventsSubscribe": "...",
	"eventsUnsubscribe": "...",
	"eventsProfile": "...",
	"eventsCleaned": "...",
	"eventsUpemail": "...",
	"eventsCampaign": "...",
	"sourcesUser": "...",
	"sourcesAdmin": "...",
	"sourcesApi": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getAllWebhooks"/>
## MailChimp.getAllWebhooks
Method description

| Field | Type  | Description
|-------|-------|----------
| apiKey| credentials| The api key obtained from MailChimp.
| listId| String|  The unique id for the list.

#### Request example
```json
{	"apiKey": "...",
	"listId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getWebhook"/>
## MailChimp.getWebhook
Method description

| Field    | Type  | Description
|----------|-------|----------
| apiKey   | credentials| The api key obtained from MailChimp.
| listId   | String|  The unique id for the list.
| webhookId| String|  The unique id for the webhook.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"webhookId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteWebhook"/>
## MailChimp.deleteWebhook
Method description

| Field    | Type  | Description
|----------|-------|----------
| apiKey   | credentials| The api key obtained from MailChimp.
| listId   | String|  The unique id for the list.
| webhookId| String|  The unique id for the webhook.

#### Request example
```json
{	"apiKey": "...",
	"listId": "...",
	"webhookId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createTemplateFolder"/>
## MailChimp.createTemplateFolder
Method description

| Field | Type  | Description
|-------|-------|----------
| apiKey| credentials| The api key obtained from MailChimp.
| name  | String|  The name of the folder.

#### Request example
```json
{	"apiKey": "...",
	"name": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getAllTemplateFolders"/>
## MailChimp.getAllTemplateFolders
Method description

| Field        | Type  | Description
|--------------|-------|----------
| apiKey       | credentials| The api key obtained from MailChimp.
| fields       | String| Optional: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields| String| Optional: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
| count        | String| Optional: The number of records to return.
| offset       | String| Optional: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.

#### Request example
```json
{	"apiKey": "...",
	"fields": "...",
	"excludeFields": "...",
	"count": "...",
	"offset": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getTemplateFolder"/>
## MailChimp.getTemplateFolder
Method description

| Field        | Type  | Description
|--------------|-------|----------
| apiKey       | credentials| The api key obtained from MailChimp.
| folderId     | String| The unique id for the template folder.
| fields       | String| Optional: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields| String| Optional: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### Request example
```json
{	"apiKey": "...",
	"folderId": "...",
	"fields": "...",
	"excludeFields": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateTemplateFolder"/>
## MailChimp.updateTemplateFolder
Method description

| Field   | Type  | Description
|---------|-------|----------
| apiKey  | credentials| The api key obtained from MailChimp.
| folderId| String| The unique id for the template folder.
| name    | String| The name of the folder.

#### Request example
```json
{	"apiKey": "...",
	"folderId": "...",
	"name": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteTemplateFolder"/>
## MailChimp.deleteTemplateFolder
Method description

| Field   | Type  | Description
|---------|-------|----------
| apiKey  | credentials| The api key obtained from MailChimp.
| folderId| String| The unique id for the template folder.

#### Request example
```json
{	"apiKey": "...",
	"folderId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createTemplate"/>
## MailChimp.createTemplate
Method description

| Field   | Type  | Description
|---------|-------|----------
| apiKey  | credentials| The api key obtained from MailChimp.
| name    | String| The name of the template.
| folderId| String| Optional: The id of the folder the template is currently in.
| html    | String| The raw HTML for the template. Supported the MailChimp Template Language

#### Request example
```json
{	"apiKey": "...",
	"name": "...",
	"folderId": "...",
	"html": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getTemplates"/>
## MailChimp.getTemplates
Method description

| Field          | Type  | Description
|----------------|-------|----------
| apiKey         | credentials| The api key obtained from MailChimp.
| fields         | String| Optional: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields  | String| Optional: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
| count          | String| Optional: The number of records to return.
| offset         | String| Optional: The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.
| createdBy      | String| Optional: The MailChimp account user who created the template.
| sinceCreatedAt | String| Optional: Restrict the response to templates created after the set date.
| beforeCreatedAt| String| Optional: Restrict the response to templates created before the set date.
| type           | String| Optional: Limit results based on template type.
| folderId       | String| Optional: The unique folder id.

#### Request example
```json
{	"apiKey": "...",
	"fields": "...",
	"excludeFields": "...",
	"count": "...",
	"offset": "...",
	"createdBy": "...",
	"sinceCreatedAt": "...",
	"beforeCreatedAt": "...",
	"type": "...",
	"folderId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getTemplate"/>
## MailChimp.getTemplate
Method description

| Field        | Type  | Description
|--------------|-------|----------
| apiKey       | credentials| The api key obtained from MailChimp.
| templateId   | String| The unique id for the template.
| fields       | String| Optional: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields| String| Optional: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### Request example
```json
{	"apiKey": "...",
	"templateId": "...",
	"fields": "...",
	"excludeFields": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateTemplate"/>
## MailChimp.updateTemplate
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| templateId| String| The unique id for the template.
| name      | String| The name of the template.
| folderId  | String| Optional: The id of the folder the template is currently in.
| html      | String| The raw HTML for the template. Supported the MailChimp Template Language

#### Request example
```json
{	"apiKey": "...",
	"templateId": "...",
	"name": "...",
	"folderId": "...",
	"html": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteTemplate"/>
## MailChimp.deleteTemplate
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| templateId| String| The unique id for the template.

#### Request example
```json
{	"apiKey": "...",
	"templateId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getTemplateDefaultContent"/>
## MailChimp.getTemplateDefaultContent
Method description

| Field        | Type  | Description
|--------------|-------|----------
| apiKey       | credentials| The api key obtained from MailChimp.
| templateId   | String| The unique id for the template.
| fields       | String| Optional: A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields| String| Optional: A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

#### Request example
```json
{	"apiKey": "...",
	"templateId": "...",
	"fields": "...",
	"excludeFields": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="setCampaignContentFromURL"/>
## MailChimp.setCampaignContentFromURL
Method description

| Field     | Type  | Description
|-----------|-------|----------
| apiKey    | credentials| The api key obtained from MailChimp.
| campaignId| String| The unique id for the campaign.
| plainText | String| Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.
| url       | String| When importing a campaign, the URL where the HTML lives.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "...",
	"plainText": "...",
	"url": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="setCampaignContentFromTemplate"/>
## MailChimp.setCampaignContentFromTemplate
Method description

| Field           | Type  | Description
|-----------------|-------|----------
| apiKey          | credentials| The api key obtained from MailChimp.
| campaignId      | String| The unique id for the campaign.
| plainText       | String| Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.
| templateId      | String| The id of the template to use.
| templateSections| String| Content for the sections of the template. Each key should be the unique mc:edit area name from the template.

#### Request example
```json
{	"apiKey": "...",
	"campaignId": "...",
	"plainText": "...",
	"templateId": "...",
	"templateSections": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

