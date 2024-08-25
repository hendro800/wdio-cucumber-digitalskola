import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import HomePage from '../pageobjects/home.page.js';
import LoginPage from '../pageobjects/login.page.js';

const pages = {
    login: LoginPage
}
Given('user is on Login page', async () => {
    await LoginPage.open()
})


When('user login using {string} as username and {string} as password', async (username, password) => {
    await LoginPage.inputUsername(username)
    await LoginPage.inputPassword(password)
    await LoginPage.clickLoginButton()
})

Then('user should be redirected to homepage', async () => {
    await HomePage.validateOnHomePage()
})

Then('user should see error message {string}', async(errorMessage) => {
  await LoginPage.ValidateWrongPasswordDisplayed(errorMessage)
})

When('user click login button', async () => {
    await LoginPage.clickLoginButton()
})

Given('user input {string} as password', async (password) => {
    await LoginPage.inputPassword(password)
})

Given('user input {string} as username', async (username) => {
    await LoginPage.inputUsername(username)
})

