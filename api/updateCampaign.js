const _       = require('../lib/functions')
const request = require('request');

module.exports = (req, res) => {

    // rpt bug
    req.body.args = _.clearArgs(req.body.args, false);

    let { 
        apiKey,
        recipientsListId,
        campaignId,
        subjectLine,
        title,
        fromName,
        replyTo,
        useConversation, 
        toName, 
        folderId, 
        authenticate, 
        autoFooter, 
        inlineCss, 
        autoTweet, 
        autoFbPost, 
        fbComments, 
        variateSettingsWinnerCriteria,
        variateSettingsWaitTime, 
        variateSettingsTestSize, 
        variateSettingssubjectLines, 
        variateSettingsSendTimes, 
        variateSettingsFromNames, 
        variateSettingsReplyToAddresses, 
        trackingOpens, 
        trackingHtmlClicks, 
        trackingTextClicks, 
        trackingGoalTracking, 
        trackingEcomm360, 
        trackingGoogleAnalytics, 
        trackingClicktale, 
        trackingSalesforceCampaign, 
        trackingSalesforceNotes, 
        trackingHighriseCampaign, 
        trackingHighriseNotes, 
        trackingCapsuleNotes, 
        rssOptsFeedUrl,
        rssOptsFrequency,
        rssOptsScheduleHour, 
        rssOptsScheduleDailySendSunday, 
        rssOptsScheduleDailySendMonday, 
        rssOptsScheduleDailySendTuesday, 
        rssOptsScheduleDailySendWednesday, 
        rssOptsScheduleDailySendThursday, 
        rssOptsScheduleDailySendFriday, 
        rssOptsScheduleDailySendSaturday, 
        rssOptsScheduleWeeklySendDay, 
        rssOptsScheduleMonthlySendDate, 
        rssOptsConstrainRssImg, 
        socialCardImageUrl, 
        socialCardDescription, 
        socialCardTitle, 
        type,
        to="to" } = req.body.args;

    let r  = {
        callback     : "",
        contextWrites: {}
    };

    if(    !apiKey 
        || !recipientsListId 
        || !campaignId
        || !subjectLine
        || !fromName 
        || !replyTo) 
    {
        _.echoBadEnd(r, to, res, 'apiKey, recipientsListId, campaignId, subjectLine, fromName, replyTo');
        return;
    }

    //get datacenter
    let dcarr = apiKey.split('-'),
        dc    = dcarr[dcarr.length-1] + '.';


    autoFbPost                      = _.array(autoFbPost);
    variateSettingssubjectLines     = _.array(variateSettingsSendTimes);
    variateSettingsSendTimes        = _.array(variateSettingsSendTimes);
    variateSettingsFromNames        = _.array(variateSettingsFromNames);
    variateSettingsReplyToAddresses = _.array(variateSettingsReplyToAddresses);

    let bodyOptions = {
        recipients: {
            list_id: recipientsListId,
        },
        settings: {
            subject_line: subjectLine,
            title: title,
            from_name: fromName,
            replyTo: replyTo,
            use_conversation: useConversation,
            to_name: toName,
            folder_id: folderId,
            authenticate: authenticate,
            auto_footer: autoFooter,
            inline_css: inlineCss,
            auto_tweet: autoTweet,
            auto_fb_post: autoFbPost,
            fb_comments: fbComments,
        },
        tracking: {
            opens: trackingOpens,
            html_clicks: trackingHtmlClicks,
            text_clicks: trackingTextClicks,
            goal_tracking: trackingGoalTracking,
            ecomm360: trackingEcomm360,
            google_analytics: trackingGoogleAnalytics,
            clicktale: trackingClicktale,
            salesforce: {
                campaign: trackingSalesforceCampaign,
                notes: trackingSalesforceNotes,
            },
            highrise: {
                notes: trackingHighriseNotes,
                campaign:trackingHighriseCampaign,
            } ,
            capsule: {
                notes: trackingCapsuleNotes,
            }
        },
        social_card: {
            image_url: socialCardImageUrl,
            description: socialCardDescription,
            title: socialCardTitle,
        },
        type: type,
    };

    if(rssOptsFrequency || rssOptsFeedUrl) {
        bodyOptions.rss_opts = {
            feed_url: rssOptsFeedUrl,
            frequency: rssOptsFrequency,
            hour: rssOptsScheduleHour,
            schedule: {
                daily_send: {
                    sunday: rssOptsScheduleDailySendSunday,
                    monday:rssOptsScheduleDailySendMonday,
                    tuesday: rssOptsScheduleDailySendTuesday,
                    wednesday: rssOptsScheduleDailySendWednesday,
                    thursday: rssOptsScheduleDailySendThursday,
                    friday: rssOptsScheduleDailySendFriday,
                    saturday: rssOptsScheduleDailySendSaturday,
                },
                weekly_send_day: rssOptsScheduleWeeklySendDay,
                monthly_send_date: rssOptsScheduleMonthlySendDate,
            },
            constrain_img: rssOptsConstrainRssImg,
        }
    }
    
    // Todo
    bodyOptions = _.clearArgs(_.clearArgs(bodyOptions, true), true);

    let options = {
        method: 'PATCH',
        url: `https://${dc}api.mailchimp.com/3.0/campaigns/${campaignId}`, 
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