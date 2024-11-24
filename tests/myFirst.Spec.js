const {test, expect} = require('@playwright/test')

test('myFirstTest',async({page}) => {

 await  page.goto("https://www.google.co.uk/")
 await expect (page).toHaveTitle("Google")


})