// Login
export const loginSignUpLink = ' Signup / Login';
export const logoutLink = ' Logout';
export const invalidCredentials = {
  email: 'invalid@example.com',
  password: 'invalidpassword',
}
export const loginErrorMessage = 'Your email or password is incorrect!';
export const newUserData = {
  name: `TestUser${generateRamdomDigits(4)}`,
  email: `testuser${Date.now()}@example.com`,
  password: 'Test@1234',
  dayOfBirth: '1',
  monthOfBirth: 'January',
  yearOfBirth: '1990',
  newsletter: true,
  offers: true,
  firstName: 'Test',
  lastName: 'User',
  companyName: 'Test Company',
  address1: '123 Test St',
  address2: '',
  country: 'United States',
  state: 'California',
  city: 'Los Angeles',
  zipcode: '90001',
  mobileNumber: '1234567890'
};

export function generateRamdomDigits(length: number): string {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//API
export const apiLoginSuccessMessage = 'User exists!';
export const apiLoginFailureMessage = 'User not found';