import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import HomePage from '../pageobjects/home.page.js';
import LoginPage from '../pageobjects/login.page.js';
import CartPage from '../pageobjects/cart.page.js';

const pages = {
    login: LoginPage
}

Given('user login using {string} as username and using {string} as password', async (username, password) => {
    await LoginPage.inputUsername(username)
    await LoginPage.inputPassword(password)
    await LoginPage.clickLoginButton()
  })

Given('user is on Home page', async () => {
  await HomePage.open()
})

Then('user add {string} to cart', async (item) => {
  await $(item).click()
})


// Given('user in on Cart Page', async () => {
//   await CartPage.validateItemOnCartPage()
// })



Then('Validate item is on the Page', async () => {
    await CartPage.validateItemOnCartPage()
})

Given('user click Cart Icon', async () => {
  await HomePage.clickCartIcon()
})
