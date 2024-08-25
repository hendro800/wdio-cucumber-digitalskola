import Page from "./page";
import {$, expect, browser} from "@wdio/globals"

class HomePage extends Page {

    get cartIcon() {
        return $('#shopping_cart_container')
    }
    get item1() {
        return $('#add-to-cart-sauce-labs-backpack')
    }
    get item2() {
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }

    get cartIcon() {
        return $('.shopping_cart_link')
    }
    get productImage() {
        return $("#item_0_img_link")
    }
    async clickItem() {
        await this.item1.click()
        await this.item2.click()
    }
    async clickCartIcon() {
        await this.cartIcon.click()
    }

    async validateOnHomePage() {
        await expect(this.productImage).toBeExisting();
        await expect(this.cartIcon).toBeExisting();
        await expect(this.item1).toBeExisting();
    }

    


    // async isOnHomePage() {
    //     await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html'); 
    // }

    open() {
        return super.open('inventory.html')
    }
}

export default new HomePage();