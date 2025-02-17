import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/DashboardPage';

import { obterCodigo2FA } from '../support/db';
//import { cleanJobs, getJob } from '../support/redis';

test('Deve acessar a conta do usuário', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    const usuario = {
      cpf: '00000014141',
      senha: '147258'
    }

    //await cleanJobs();
  
    await loginPage.acessaPagina();
    await loginPage.informaCpf(usuario.cpf);
    await loginPage.informaSenha(usuario.senha);

    await page.getByRole('heading', {name: 'Verificação em duas etapas' }).waitFor({timeout: 3000});

    // Consulta do código de autenticação no banco de dados
    const codigo = await obterCodigo2FA(usuario.cpf);

    // Consulta do código de autenticação pelo redis
    // const codigo = await getJob();

    await loginPage.informa2FA(codigo);

    await dashboardPage.obterSaldo().waitFor({timeout: 1000});
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
