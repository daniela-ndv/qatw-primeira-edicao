
export class DashboardPage{

    constructor(page){
        this.page = page;
    }

    obterSaldo(){
        return this.page.locator('#account-balance');
    }

}