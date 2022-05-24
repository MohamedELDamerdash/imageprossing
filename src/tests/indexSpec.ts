import supertest from 'supertest';
import app from '../index';
import resize from '../routes/api/size';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('check endpoint', async () => {
        await request.get('/');
        expect(200);
      });
      it('check number parameters', async () => {
        await request.get('/image?width=800&height=1000');
        expect(200);
      });
      it('check string parameters', async () => {
        await request.get('/image?width=b&height=a');
        expect(400);
      });
    });
    let q: null , n: null;
    describe('test the image', () => {
      it('check null paramaters', async () => {
        expect(async () => {
          await resize('assetts/test.jpg', q , n, 'resized/test_100_700.jpg');
        }).not.toThrow();
      });
    });
    