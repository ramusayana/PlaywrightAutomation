import test , {page , expect } from "@playwright/test"


test ( 'assertion demo' , async({page}) => {

await page.goto("https://www.saucedemo.com")
await page.pause()
//Assertions
// check element present
await expect(page.locator('[data-test="username"]')).toHaveCount(1);
if (await page.$('[data-test="username"]')){

    await page.locator('[data-test="username"]').click()

}
// check the element hidden or visible

await expect(page.locator('[data-test="username"]')).toBeVisible()
// await expect.soft(page.locator('[data-test="username"]')).toBeHidden()

//check element enable or disable

await expect(page.locator('[data-test="username"]')).toBeEnabled();
// await expect.soft(page.locator('[data-test="username"]')).toBeDisabled();
//check text present
// await expect(page.locator('[data-test="username"]')).toHaveText('username')
await expect(page.locator('[data-test="username"]')).not.toHaveText('username')


//check attribute value
await expect(page.locator('[data-test="username"]')).toHaveAttribute('class','input_error form_input')
await expect(page.locator('[data-test="username"]')).toHaveClass(/.*input_error/)

//check page url and title

await expect(page).toHaveURL('https://www.saucedemo.com/')
await expect(page).toHaveTitle(/.*Swag Labs/)
await page.pause()
await expect(page).toHaveScreenshot()



})

