const app     = require('../index');
const assert  = require('chai').assert;
const request = require('supertest-as-promised');

const apiKey = 'e496f5e1e6276e9b85aa22a914a719af-us14'


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
});
