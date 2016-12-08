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
* [getTopEmailClients](#getTopEmailClients)
* [setCampaignContentHTML](#setCampaignContentHTML)
* [setCampaignContentFromURL](#setCampaignContentFromURL)
* [setCampaignContentFromTemplate](#setCampaignContentFromTemplate)
 
<a name="getAutomationsList"/>
## MailChimp.getAutomationsList
Method description

| Field        | Type       | Description
|--------------|------------|----------
| apiKey       | credentials| Required: The api key obtained from MailChimp.
| fields       | String     | A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
| excludeFields| String     | A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.

<a name="getAutomationInWorkflow"/>
## MailChimp.getAutomationInWorkflow
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| workflowId| String     | Required: The unique id for the Automation workflow.

<a name="pauseAllEmails"/>
## MailChimp.pauseAllEmails
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| workflowId| String     | Required: The unique id for the Automation workflow.

<a name="startAllEmails"/>
## MailChimp.startAllEmails
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| workflowId| String     | Required: The unique id for the Automation workflow.

<a name="getAutomatedEmailsList"/>
## MailChimp.getAutomatedEmailsList
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| workflowId| String     | Required: The unique id for the Automation workflow.

<a name="getWorkflowEmail"/>
## MailChimp.getWorkflowEmail
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| workflowId| String     | Required: Required: The unique id for the Automation workflow.
| emailId   | String     | Required: The unique id for the Automation workflow email.

<a name="pauseAutomatedEmail"/>
## MailChimp.pauseAutomatedEmail
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| workflowId| String     | Required: The unique id for the Automation workflow.
| emailId   | String     | Required: The unique id for the Automation workflow email.

<a name="startAutomatedEmail"/>
## MailChimp.startAutomatedEmail
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| workflowId| String     | Required: The unique id for the Automation workflow.
| emailId   | String     | Required: The unique id for the Automation workflow email.

<a name="addWorkflowEmailSubscriber"/>
## MailChimp.addWorkflowEmailSubscriber
Method description

| Field       | Type       | Description
|-------------|------------|----------
| apiKey      | credentials| Required: The api key obtained from MailChimp.
| workflowId  | String     | Required: The unique id for the Automation workflow.
| emailId     | String     | Required: The unique id for the Automation workflow email.
| emailAddress| String     | Required: The unique id for the Automation workflow email.

<a name="getEmailSubscriber"/>
## MailChimp.getEmailSubscriber
Method description

| Field       | Type       | Description
|-------------|------------|----------
| apiKey      | credentials| Required: The api key obtained from MailChimp.
| workflowId  | String     | The unique id for the Automation workflow.
| emailId     | String     | The unique id for the Automation workflow email.
| emailAddress| String     | Required: The unique id for the Automation workflow email.

<a name="removeWorkflowSubscriber"/>
## MailChimp.removeWorkflowSubscriber
Method description

| Field       | Type       | Description
|-------------|------------|----------
| apiKey      | credentials| Required: The api key obtained from MailChimp.
| workflowId  | String     | Required: The unique id for the Automation workflow.
| emailAddress| String     | Required: The list member’s email address.

<a name="createCampaignFolder"/>
## MailChimp.createCampaignFolder
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The api key obtained from MailChimp.
| name  | String     | Required: Name to associate with the folder.

<a name="getCampaignFolders"/>
## MailChimp.getCampaignFolders
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The api key obtained from MailChimp.

<a name="getCampaignFolder"/>
## MailChimp.getCampaignFolder
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| Required: The api key obtained from MailChimp.
| folderId| String     | Required: The api key obtained from MailChimp.

<a name="updateCampaignFolder"/>
## MailChimp.updateCampaignFolder
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| Required: The api key obtained from MailChimp.
| folderId| String     | Required: The api key obtained from MailChimp.
| name    | String     | Required: Name to associate with the folder.

<a name="deleteCampaignFolder"/>
## MailChimp.deleteCampaignFolder
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| Required: The api key obtained from MailChimp.
| folderId| String     | Required: The api key obtained from MailChimp.

<a name="createCampaign"/>
## MailChimp.createCampaign
Method description

| Field                            | Type       | Description
|----------------------------------|------------|----------
| apiKey                           | credentials| Required: The api key obtained from MailChimp.
| type                             | String     | Required: There are four types of campaigns you can create in MailChimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead.
| recipientsListId                 | String     | Required: The unique list id.
| subjectLine                      | String     | Required: The subject line for the campaign.
| title                            | String     | The title of the campaign.
| fromName                         | String     | Required: The ‘from’ name on the campaign (not an email address).
| replyTo                          | String     | Required: The reply-to email address for the campaign.
| useConversation                  | String     | The reply-to email address for the campaign.
| toName                           | String     | The campaign’s custom ‘To’ name.
| folderId                         | String     | If the campaign is listed in a folder, the id for that folder.
| authenticate                     | String     | Whether MailChimp authenticated the campaign. Defaults to true.
| autoFooter                       | String     | Automatically append MailChimp’s default footer to the campaign.
| inlineCss                        | String     | Automatically inline the CSS included with the campaign content.
| autoTweet                        | String     | Automatically tweet a link to the campaign archive page when the campaign is sent.
| autoFbPost                       | String     | An comma separated string of Facebook page ids to auto-post to.
| fbComments                       | String     | Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
| variateSettingsWinnerCriteria    | String     | The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_critera is ignored. For Multivariate Campaigns with ‘manual’ as the winner_citeria, the winner must be chosen in the MailChimp web application. Possible Values: `opens`, `clicks`, `manual`, `total_revenue`
| variateSettingsWaitTime          | Number     | The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
| variateSettingsTestSize          | Number     | The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
| variateSettingsSubjectLines      | String     | The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
| variateSettingsSendTimes         | String     | The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
| variateSettingsFromNames         | String     | The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
| replyToAddresses                 | String     | The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
| trackingOpens                    | String     | Whether to track opens. Defaults to true. Cannot be set to false for variate campaigns.
| trackingHtmlClicks               | String     | Whether to track clicks in the HTML version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.
| trackingTextClicks               | String     | Whether to track clicks in the plain-text version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.
| trackingGoalTracking             | String     | Whether to enable Goal tracking.
| trackingEcomm360                 | String     | Whether to enable eCommerce360 tracking.
| trackingGoogleAnalytics          | String     | The custom slug for Google Analytics tracking (max of 50 bytes).
| trackingClicktale                | String     | The custom slug for ClickTale tracking (max of 50 bytes).
| trackingSalesforceCampaign       | String     | Create a campaign in a connected Salesforce account.
| trackingSalesforceNotes          | String     | Update contact notes for a campaign based on subscriber email addresses.
| trackingHighriseCampaign         | String     | Create a campaign in a connected Highrise account.
| trackingHighriseNotes            | String     | Update contact notes for a campaign based on subscriber email addresses.
| trackingCapsuleNotes             | String     | Update contact notes for a campaign based on subscriber email addresses.
| rssOptsFeedUrl                   | String     | The URL for the RSS feed.
| rssOptsFrequency                 | String     | The frequency of the RSS Campaign.
| rssOptsScheduleHour              | String     | The hour to send the campaign in local time. Acceptable hours are 0-23. For example, ‘4’ would be 4am in your account’s default time zone.
| rssOptsScheduleDailySendSunday   | String     | Sends the daily RSS Campaign on Sundays.
| rssOptsScheduleDailySendMonday   | String     | TSends the daily RSS Campaign on Mondays.
| rssOptsScheduleDailySendTuesday  | String     | Sends the daily RSS Campaign on Tuesdays.
| rssOptsScheduleDailySendWednesday| String     | Sends the daily RSS Campaign on Wednesdays.
| rssOptsScheduleDailySendThursday | String     | Sends the daily RSS Campaign on Thursdays.
| rssOptsScheduleDailySendFriday   | String     | Sends the daily RSS Campaign on Fridays.
| rssOptsScheduleDailySendSaturday | String     | Sends the daily RSS Campaign on Saturdays.
| rssOptsScheduleWeeklySendDay     | String     | The day of the week to send a weekly RSS Campaign.
| rssOptsScheduleMonthlySendDate   | String     | The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where ‘0’ is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
| rssOptsLastSent                  | String     | The date the campaign was last sent.
| rssOptsConstrainRssImg           | String     | Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
| socialCardImageUrl               | String     | The url for the header image for the card.
| socialCardDescription            | String     | A short summary of the campaign to display.
| socialCardTitle                  | String     | The title for the card. Typically the subject line of the campaign.

<a name="getCampaigns"/>
## MailChimp.getCampaigns
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| apiKey          | credentials| Required: The api key obtained from MailChimp.
| type            | String     | The campaign type.
| status          | String     | The status of the campaign.
| beforeSendTime  | String     | Restrict the response to campaigns sent before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.
| sinceSendTime   | String     | Restrict the response to campaigns sent after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.
| beforeCreateTime| String     | Restrict the response to campaigns created before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.
| sinceCreateTime | String     | Restrict the response to campaigns created after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.
| listId          | String     | The unique id for the list.
| folderId        | String     | The unique folder id.

<a name="getCampaign"/>
## MailChimp.getCampaign
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| campaignId| String     | Required: The campaign id.

<a name="updateCampaign"/>
## MailChimp.updateCampaign
Method description

| Field                            | Type       | Description
|----------------------------------|------------|----------
| apiKey                           | credentials| Required: The api key obtained from MailChimp.
| campaignId                       | String     | Required: The api key obtained from MailChimp.
| recipientsListId                 | String     | Required: The unique list id.
| subjectLine                      | String     | Required: The subject line for the campaign.
| title                            | String     | The title of the campaign.
| fromName                         | String     | Required: The ‘from’ name on the campaign (not an email address).
| replyTo                          | String     | Required: The reply-to email address for the campaign.
| useConversation                  | String     | The reply-to email address for the campaign.
| toName                           | String     | The campaign’s custom ‘To’ name.
| folderId                         | String     | If the campaign is listed in a folder, the id for that folder.
| authenticate                     | String     | Whether MailChimp authenticated the campaign. Defaults to true.
| autoFooter                       | String     | Automatically append MailChimp’s default footer to the campaign.
| inlineCss                        | String     | Automatically inline the CSS included with the campaign content.
| autoTweet                        | String     | Automatically tweet a link to the campaign archive page when the campaign is sent.
| autoFbPost                       | String     | An String of Facebook page ids to auto-post to.
| fbComments                       | String     | Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to `true`.
| variateSettingsWinnerCriteria    | String     | The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_critera is ignored. For Multivariate Campaigns with ‘manual’ as the winner_citeria, the winner must be chosen in the MailChimp web application. Possible Values: `opens`, `clicks`, `manual`, `total_revenue`
| variateSettingsWaitTime          | Number     | The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes.
| variateSettingsTestSize          | Number     | The percentage of recipients to send the test combinations to, must be a value between 10 and 100.
| variateSettingsSubjectLines      | String     | The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used.
| variateSettingsSendTimes         | String     | The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored.
| variateSettingsFromNames         | String     | The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used.
| replyToAddresses                 | String     | The possible reply-to addresses. The number of reply_to_addresses provided must match the number of from_names. If no reply_to_addresses are provided, settings.reply_to will be used.
| trackingOpens                    | String     | Whether to track opens. Defaults to true. Cannot be set to false for variate campaigns.
| trackingHtmlClicks               | String     | Whether to track clicks in the HTML version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.
| trackingTextClicks               | String     | Whether to track clicks in the plain-text version of the campaign. Defaults to true. Cannot be set to false for variate campaigns.
| trackingGoalTracking             | String     | Whether to enable Goal tracking.
| trackingEcomm360                 | String     | Whether to enable eCommerce360 tracking.
| trackingGoogleAnalytics          | String     | The custom slug for Google Analytics tracking (max of 50 bytes).
| trackingClicktale                | String     | The custom slug for ClickTale tracking (max of 50 bytes).
| trackingSalesforceCampaign       | String     | Create a campaign in a connected Salesforce account.
| trackingSalesforceNotes          | String     | Update contact notes for a campaign based on subscriber email addresses.
| trackingHighriseCampaign         | String     | Create a campaign in a connected Highrise account.
| trackingHighriseNotes            | String     | Update contact notes for a campaign based on subscriber email addresses.
| trackingCapsuleNotes             | String     | Update contact notes for a campaign based on subscriber email addresses.
| rssOptsFeedUrl                   | String     | The URL for the RSS feed.
| rssOptsFrequency                 | String     | The frequency of the RSS Campaign.
| rssOptsScheduleHour              | String     | The hour to send the campaign in local time. Acceptable hours are 0-23. For example, ‘4’ would be 4am in your account’s default time zone.
| rssOptsScheduleDailySendSunday   | String     | Sends the daily RSS Campaign on Sundays.
| rssOptsScheduleDailySendMonday   | String     | TSends the daily RSS Campaign on Mondays.
| rssOptsScheduleDailySendTuesday  | String     | Sends the daily RSS Campaign on Tuesdays.
| rssOptsScheduleDailySendWednesday| String     | Sends the daily RSS Campaign on Wednesdays.
| rssOptsScheduleDailySendThursday | String     | Sends the daily RSS Campaign on Thursdays.
| rssOptsScheduleDailySendFriday   | String     | Sends the daily RSS Campaign on Fridays.
| rssOptsScheduleDailySendSaturday | String     | Sends the daily RSS Campaign on Saturdays.
| rssOptsScheduleWeeklySendDay     | String     | The day of the week to send a weekly RSS Campaign.
| rssOptsScheduleMonthlySendDate   | String     | The day of the month to send a monthly RSS Campaign. Acceptable days are 0-31, where ‘0’ is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February.
| rssOptsLastSent                  | String     | The date the campaign was last sent.
| rssOptsConstrainRssImg           | String     | Whether to add CSS to images in the RSS feed to constrain their width in campaigns.
| socialCardImageUrl               | String     | The url for the header image for the card.
| socialCardDescription            | String     | A short summary of the campaign to display.
| socialCardTitle                  | String     | The title for the card. Typically the subject line of the campaign.

<a name="deleteCampaign"/>
## MailChimp.deleteCampaign
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| campaignId| String     | Required: The unique id for the campaign.

<a name="cancelCampaign"/>
## MailChimp.cancelCampaign
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| campaignId| String     | Required: The unique id for the campaign.

<a name="replicateCampaign"/>
## MailChimp.replicateCampaign
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| campaignId| String     | Required: The unique id for the campaign.

<a name="resumeRSSCampaign"/>
## MailChimp.resumeRSSCampaign
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| campaignId| String     | Required: The unique id for the campaign.

<a name="scheduleCampaign"/>
## MailChimp.scheduleCampaign
Method description

| Field                  | Type       | Description
|------------------------|------------|----------
| apiKey                 | credentials| Required: The api key obtained from MailChimp.
| campaignId             | String     | Required: The unique id for the campaign.
| scheduleTime           | String     | Required: The date and time in UTC to schedule the campaign for delivery. Campaigns may only be scheduled to send on the quarter-hour (:00, :15, :30, :45).
| timewarp               | String     | Choose whether the campaign should use Timewarp when sending. Campaigns scheduled with Timewarp are localized based on the recipients’ time zones. For example, a Timewarp campaign with a schedule_time of 13:00 will be sent to each recipient at 1:00pm in their local time. Cannot be set to true for campaigns using Batch Delivery.
| batchDeliveryBatchDelay| String     | The delay, in minutes, between batches.
| batchDeliveryBatchCount| String     | The number of batches for the campaign send.

<a name="sendCampaign"/>
## MailChimp.sendCampaign
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| campaignId| String     | Required: The unique id for the campaign.

<a name="sendTestEmail"/>
## MailChimp.sendTestEmail
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| campaignId| String     | Required: The unique id for the campaign.
| testEmails| String     | Required: The unique id for the campaign.
| sendType  | String     | Required: The unique id for the campaign.

<a name="unscheduleCampaign"/>
## MailChimp.unscheduleCampaign
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| campaignId| String     | Required: The unique id for the campaign.

<a name="getCampaignContent"/>
## MailChimp.getCampaignContent
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| campaignId| String     | Required: The unique id for the campaign.

<a name="getSendChecklist"/>
## MailChimp.getSendChecklist
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| campaignId| String     | Required: The unique id for the campaign.

<a name="getConversationsList"/>
## MailChimp.getConversationsList
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The api key obtained from MailChimp.

<a name="getConversation"/>
## MailChimp.getConversation
Method description

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Required: The api key obtained from MailChimp.
| conversationId| String     | Required: The unique id for the campaign.

<a name="sendConversationMessage"/>
## MailChimp.sendConversationMessage
Method description

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Required: The api key obtained from MailChimp.
| conversationId| String     | Required: The unique id for the conversation.
| fromEmail     | String     | Required: A label representing the email of the sender of this message
| subject       | String     | The subject of this message
| message       | String     | The plain-text content of the message
| read          | String     | Required: Whether this message has been marked as read

<a name="getConversationMessages"/>
## MailChimp.getConversationMessages
Method description

| Field          | Type       | Description
|----------------|------------|----------
| apiKey         | credentials| Required: The api key obtained from MailChimp.
| conversationId | String     | Required: The unique id for the campaign.
| isRead         | String     | Whether a conversation message has been marked as read.
| beforeTimestamp| String     | Restrict the response to messages created before the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.
| sinceTimestamp | String     | Restrict the response to messages created after the set time. We recommend ISO 8601 time format: 2015-10-21T15:41:36+00:00.

<a name="getConversationMessage"/>
## MailChimp.getConversationMessage
Method description

| Field         | Type       | Description
|---------------|------------|----------
| apiKey        | credentials| Required: The api key obtained from MailChimp.
| conversationId| String     | Required: The unique id for the campaign.
| messageId     | String     | Required: Whether a conversation message has been marked as read.

<a name="createList"/>
## MailChimp.createList
Method description

| Field                    | Type       | Description
|--------------------------|------------|----------
| apiKey                   | credentials| Required: The api key obtained from MailChimp.
| name                     | String     | Required: The name of the list.
| contactCompany           | String     | Required: The company name for the list.
| contactAddress1          | String     | Required: The street address for the list contact.
| contactAddress2          | String     | The street address for the list contact.
| contactCity              | String     | Required: Required: The city for the list contact.
| contactState             | String     | Required: The state for the list contact.
| contactZip               | String     | The postal or zip code for the list contact.
| contactCountry           | String     | A two-character ISO3166 country code. Defaults to US if invalid.
| contactPhone             | String     | The phone number for the list contact.
| permissionReminder       | String     | Required: The permission reminder for the list.
| useArchiveBar            | String     | Whether campaigns for this list use the Archive Bar in archives by default.
| campaignDefaultsFromName | String     | Required: The default from name for campaigns sent to this list.
| campaignDefaultsFromEmail| String     | Required: The default from email for campaigns sent to this list.
| campaignDefaultsSubject  | String     | Required: The default subject line for campaigns sent to this list.
| campaignDefaultsLanguage | String     | Required: The default language for this lists’s forms.
| notifyOnSubscribe        | String     | The email address to send subscribe notifications to.
| notifyOnUnsubscribe      | String     | The email address to send unsubscribe notifications to.
| emailTypeOption          | String     | Required: Whether the list supports multiple formats for emails. When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup.
| visibility               | String     | Whether this list is public or private.

<a name="batchAddMembersToList"/>
## MailChimp.batchAddMembersToList
Method description

| Field  | Type       | Description
|--------|------------|----------
| apiKey | credentials| Required: The api key obtained from MailChimp.
| listId | String     | Required: The unique id for the list.
| members| JSON       | Required: An array of objects, each representing an email address and the subscription status for a specific list. Up to 500 members may be added or updated with each API call.

`members`:

| Field  | Type       | Description
|--------|------------|----------
| email_address | String| Email address for a subscriber.
| email_type | String| Type of email this member asked to get (‘html’ or ‘text’).
| status | String| Subscriber’s current status. Possible Values: subscribed, unsubscribed, cleaned, pending
| merge_fields | String| An individual merge var and value for a member.
| interests | String| The key of this object’s properties is the ID of the interest in question.
| language | String| If set/detected, the subscriber’s language.
| vip | Boolean | If set/detected, the subscriber’s language.
| location | Object | Subscriber location information. Example: {latitude: 50.2, longitude: -21.1 }
| ip_signup | String | IP address the subscriber signed up from.
| timestamp_signup | String | The date and time the subscriber signed up for the list.
| ip_opt | String | The IP address the subscriber used to confirm their opt-in status.
| timestamp_opt | String | The date and time the subscribe confirmed their opt-in status.

`members` format:
```JSON
 [{
	"email_address": "urist.mcvankab@freddiesjokes.com",
	"status": "subscribed"
}, {
	"email_address": "urist.mcvankab+1@freddiesjokes.com",
	"status": "subscribed"
}, {
	"email_address": "urist.mcvankab+2@freddiesjokes.com",
	"status_if_new": "subscribed"
}]
```

<a name="getLists"/>
## MailChimp.getLists
Method description

| Field                 | Type       | Description
|-----------------------|------------|----------
| apiKey                | credentials| Required: The api key obtained from MailChimp.
| beforeDateCreated     | String     | Restrict response to lists created before the set date.
| sinceDateCreated      | String     | Restrict results to lists created after the set date.
| beforeCampaignLastSent| String     | Restrict results to lists created before the last campaign send date.
| sinceCampaignLastSent | String     | Restrict results to lists created after the last campaign send date.
| email                 | String     | Restrict results to lists that include a specific subscriber’s email address.

<a name="getList"/>
## MailChimp.getList
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The api key obtained from MailChimp.
| listId| String     | Required: The unique id for the list.

<a name="deleteList"/>
## MailChimp.deleteList
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The api key obtained from MailChimp.
| listId| String     | Required: The unique id for the list.

<a name="updateList"/>
## MailChimp.updateList
Method description

| Field                    | Type       | Description
|--------------------------|------------|----------
| apiKey                   | credentials| Required: The api key obtained from MailChimp.
| listId                   | String     | Required: List id to update.
| name                     | String     | Required: The name of the list.
| contactCompany           | String     | Required: The company name for the list.
| contactAddress1          | String     | Required: The street address for the list contact.
| contactAddress2          | String     | The street address for the list contact.
| contactCity              | String     | The city for the list contact.
| contactState             | String     | Required: The state for the list contact.
| contactZip               | String     | The postal or zip code for the list contact.
| contactCountry           | String     | Required: A two-character ISO3166 country code. Defaults to US if invalid.
| contactPhone             | String     | The phone number for the list contact.
| permissionReminder       | String     | Required: The permission reminder for the list.
| useArchiveBar            | String     | Whether campaigns for this list use the Archive Bar in archives by default.
| campaignDefaultsFromName | String     | Required: The default from name for campaigns sent to this list.
| campaignDefaultsFromEmail| String     | Required: The default from email for campaigns sent to this list.
| campaignDefaultsSubject  | String     | Required: The default subject line for campaigns sent to this list.
| campaignDefaultsLanguage | String     | Required: The default language for this lists’s forms.
| notifyOnSubscribe        | String     | The email address to send subscribe notifications to.
| notifyOnUnsubscribe      | String     | The email address to send unsubscribe notifications to.
| emailTypeOption          | String     | Required: cat getWhether the list supports multiple formats for emails. When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup.
| visibility               | String     | Whether this list is public or private.

<a name="getAbuseReportsList"/>
## MailChimp.getAbuseReportsList
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The api key obtained from MailChimp.
| listId| String     | Required: The unique id for the list.

<a name="getAbuseReport"/>
## MailChimp.getAbuseReport
Method description

| Field   | Type       | Description
|---------|------------|----------
| apiKey  | credentials| Required: The api key obtained from MailChimp.
| listId  | String     | Required: The unique id for the list.
| reportId| String     | Required: The unique id for the report.

<a name="getListActivity"/>
## MailChimp.getListActivity
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The api key obtained from MailChimp.
| listId| String     | Required: The unique id for the list.

<a name="getTopEmailClients"/>
## MailChimp.getTopEmailClients
Method description

| Field | Type       | Description
|-------|------------|----------
| apiKey| credentials| Required: The api key obtained from MailChimp.
| listId| String     | Required: The unique id for the list.

<a name="setCampaignContentHTML"/>
## MailChimp.setCampaignContentHTML
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| campaignId| String     | Required: The unique id for the campaign.
| plainText | String     | Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.
| html      | String     | The raw HTML for the campaign.

<a name="setCampaignContentFromURL"/>
## MailChimp.setCampaignContentFromURL
Method description

| Field     | Type       | Description
|-----------|------------|----------
| apiKey    | credentials| Required: The api key obtained from MailChimp.
| campaignId| String     | Required: The unique id for the campaign.
| plainText | String     | Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.
| url       | String     | Required: When importing a campaign, the URL where the HTML lives.

<a name="setCampaignContentFromTemplate"/>
## MailChimp.setCampaignContentFromTemplate
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| apiKey          | credentials| Required: The api key obtained from MailChimp.
| campaignId      | String     | Required: The unique id for the campaign.
| plainText       | String     | Optional: The plain-text portion of the campaign. If left unspecified, we’ll generate this automatically.
| templateId      | String     | Required: The id of the template to use.
| templateSections| String     | Content for the sections of the template. Each key should be the unique mc:edit area name from the template.

