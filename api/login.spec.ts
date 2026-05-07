import { test, expect } from '@playwright/test';
import { endpoints } from '@utils/endpoints';
import { apiLoginFailureMessage, apiLoginSuccessMessage, invalidCredentials, } from '@utils/constants';

test.describe('Login API Tests', () => {
  test('Login via API', async ({ request }) => {
    const response = await request.post(`${process.env.API_URL}${endpoints.auth.verifyLogin}`, {
      form: {
        email: process.env.USERNAME!,
        password: process.env.PASSWORD!
      }
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.text();
    expect(responseBody).toContain(apiLoginSuccessMessage);  
  });

  test('Login with invalid credentials via API', async ({ request }) => {
    const response = await request.post(`${process.env.API_URL}${endpoints.auth.verifyLogin}`, {
      form: {
        email: invalidCredentials.email,
        password: invalidCredentials.password
      }
    });

    const responseBody = await response.text();
    expect(responseBody).toContain(apiLoginFailureMessage);
  });
});