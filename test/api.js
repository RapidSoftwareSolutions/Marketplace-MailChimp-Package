const app     = require('../index');
const assert  = require('chai').assert;
const request = require('supertest-as-promised');

const apiKey = 'e496f5e1e6276e9b85aa22a914a719af-us14',
      recipientsListId = '6c75b419ee',
      subjectLine = 'yoyoyoy',
      title = 'sadasd',
      fromName = '121412',
      replyTo = 'dima.shirokoff@rapida2pi.com',
      trackingOpens = true,
      variateSettingsWinnerCriteria = 'opens',
      rssOptsFeedUrl = 'yo',
      rssOptsFrequency = 'daily',
      type = 'regular';


describe('MailChimp API', () => {
    it('/publishMessage', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getAutomationsList`)
        .send({args:{apiKey}})
        .expect(200)
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/createCamping', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/createCampaign`)
        .send({args:{apiKey, recipientsListId, subjectLine, title, fromName, replyTo, trackingOpens, rssOptsFrequency, rssOptsFeedUrl, type}})
        .expect(200)
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });

    it('/getCampaigns', function() {
      this.timeout(5000);

      return request(app)
        .post(`/api/${global.PACKAGE_NAME}/getCampaigns`)
        .send({args:{apiKey}})
        .expect(200)
        .then((res) => {
           assert.equal(res.body.callback, 'success');
        });
    });
});
