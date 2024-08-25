import Page from "./page";
import {$, expect, browser} from "@wdio/globals"

class CartPage extends Page {

    get CheckoutButton() {
        return $('#checkout')
    }
    get ContinueButton() {
        return $('#continue-shopping')
    }

    get itemOnCartPage() {
        return $('.cart_item .inventory_item_name')
    }

    async validateOnCartPage() {
        await expect(this.CheckoutButton).toBeExisting();
        await expect(this.ContinueButton).toBeExisting();
    }

    async validateItemOnCartPage() {
        await expect(this.itemOnCartPage).toBeExisting();
    }
    
    open() {
        return super.open('cart.html')
    }
}

export default new CartPage();