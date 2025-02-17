import { test, expect } from '@playwright/test';
import { obterCodigo2FA } from '../support/db';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('Deve acessar a conta do usuário', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    const usuario = {
      cpf: '00000014141',
      senha: '147258'
    }
  
    await loginPage.acessaPagina();
    await loginPage.informaCpf(usuario.cpf);
    await loginPage.informaSenha(usuario.senha);

    await page.waitForTimeout(3000);

    const codigo = await obterCodigo2FA();
    await loginPage.informa2FA(codigo);

    await page.waitForTimeout(1000);

    await expect(dashboardPage.obterSaldo()).toHaveText('R$ 5.000,00');
});

test('Não deve logar quando a senha é inválida', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const usuario = {
      cpf: '00000014141',
      senha: '123456'
    }   

    await loginPage.acessaPagina();
    await loginPage.informaCpf(usuario.cpf);
    await loginPage.informaSenha(usuario.senha);  

    await expect(loginPage.obterMsgErro()).toContainText('Acesso negado. Por favor, tente novamente.');
});

test('Não deve logar quando o código de autenticação é inválido', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const usuario = {
      cpf: '00000014141',
      senha: '147258'
    }   
    await loginPage.acessaPagina();
    await loginPage.informaCpf(usuario.cpf);
    await loginPage.informaSenha(usuario.senha);
    await loginPage.informa2FA('000000');

    await expect(loginPage.obterMsgErro()).toContainText('Código inválido. Por favor, tente novamente.');
});
