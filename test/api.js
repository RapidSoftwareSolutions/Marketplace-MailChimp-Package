const app     = require('../index');
const assert  = require('chai').assert;
const request = require('supertest-as-promised');

const apiKey = 'e496f5e1e6276e9b85aa22a914a719af-us14',
      recipientsListId = 'd196963f42',
      subjectLine = 'yoyoyoy',
      title = 'sadasd',
      fromName = '121412',
      replyTo = 'dima.shirokoff@rapida2pi.com',
      trackingOpens = true,
      variateSettingsWinnerCriteria = 'opens',
      rssOptsFeedUrl = 'yo',
      rssOptsFrequency = 'daily',
      type = 'regular'
      name = 'test',
      folderId = 'd559fd8e64',
      campaignId = '9aefe5abbf',
      contactCompany = 'test',
      contactAddress1 = 'addr1',
      contactCity = 'kiev',
      contactState = 'teststat',
      contactZip = '03211',
      contactCountry = 'ukraine',
      contactPhone = '1234 4321 12',
      permissionReminder = 'test',
      useArchiveBar = 'true',
      campaignDefaultsFromName = 'dima',
      campaignDefaultsFromEmail = 'emddas@ukr.net',
      campaignDefaultsSubject = 'test subject',
      campaignDefaultsLanguage = 'eng',
      emailTypeOption = 'true',
      visibility = 'pub',
      listId = 'd196963f42'


describe('MailChimp API', () => {
    it('/getAutomationsList', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getAutomationsList`)
        .send({args:{apiKey}})
        .expect(200)
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/createCampaignFolder', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/createCampaignFolder`)
        .send({args:{apiKey, name}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/getCampaignFolders', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getCampaignFolders`)
        .send({args:{apiKey, folderId}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/getCampaignFolders', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getCampaignFolders`)
        .send({args:{apiKey}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/updateCampaignFolder', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getCampaignFolders`)
        .send({args:{apiKey, folderId, name}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/createCampaign', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getCampaignFolders`)
        .send({args:{apiKey, type, recipientsListId, subjectLine, title, fromName, replyTo}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/getCampaigns', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getCampaignFolders`)
        .send({args:{apiKey}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/getCampaign', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getCampaignFolders`)
        .send({args:{apiKey, campaignId}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/updateCampaign', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/updateCampaign`)
        .send({args:{apiKey, campaignId, type, recipientsListId, subjectLine, title, fromName, replyTo}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });


    it('/replicateCampaign', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/replicateCampaign`)
        .send({args:{apiKey, campaignId}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/getCampaignContent', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getCampaignContent`)
        .send({args:{apiKey, campaignId}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/getSendChecklist', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getSendChecklist`)
        .send({args:{apiKey, campaignId}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/getConversationsList', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getConversationsList`)
        .send({args:{apiKey, campaignId}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/createList', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/createList`)
        .send({args:{
          apiKey, 
          name, 
          contactPhone, 
          contactCompany,
          contactCity,
          contactCountry, 
          contactZip, 
          contactAddress1, 
          contactState, 
          contactPhone, 
          permissionReminder, 
          useArchiveBar, 
          campaignDefaultsLanguage, 
          campaignDefaultsSubject, 
          campaignDefaultsFromEmail, 
          campaignDefaultsFromName,
          emailTypeOption,
          visibility
        }})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/getLists', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getLists`)
        .send({args:{apiKey}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/getList', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getList`)
        .send({args:{apiKey, listId}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/updateList', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/updateList`)
        .send({args:{
          listId,
          apiKey, 
          name, 
          contactPhone, 
          contactCompany,
          contactCity,
          contactCountry, 
          contactZip, 
          contactAddress1, 
          contactState, 
          contactPhone, 
          permissionReminder, 
          useArchiveBar, 
          campaignDefaultsLanguage, 
          campaignDefaultsSubject, 
          campaignDefaultsFromEmail, 
          campaignDefaultsFromName,
          emailTypeOption,
          visibility
        }})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/getConversationsList', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getConversationsList`)
        .send({args:{apiKey}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });


    it('/getAbuseReportsList', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getAbuseReportsList`)
        .send({args:{apiKey, listId}})
        .then((res) => {
            console.log(res.body)
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/getListActivity', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getListActivity`)
        .send({args:{apiKey, listId}})
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });
});
