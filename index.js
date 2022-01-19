const puppeteer = require("puppeteer");
const email = "";
const senha = "";
const quantidadeComentarios = 50;
const tempoEspera = 2;
const tempoPausa = 30;
const comentario = "VOU GANHAR !! 🚀";
const linkSorteio = "";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto("https://instagram.com");
  await page.waitForSelector('input[name="username"]');
  await page.type('[name="username"]', email, { delay: 100 });
  await page.type('[name="password"]', senha, { delay: 100 });
  await page.click('[type="submit"]');
  await page.waitForNavigation();
  await page.goto(linkSorteio);

  for (let quantComentarios = 1; quantComentarios <= quantidadeComentarios; ++quantComentarios) {
    if (quantComentarios == quantidadeComentarios) {
      quantComentarios = 0;
      console.log("Pausando...");
      await page.waitForTimeout(60000 * tempoPausa);
      console.log("Iniciando...");
    } else {
      await page.waitForSelector('[data-testid="post-comment-text-area"');
      await page.type('[data-testid="post-comment-text-area"]', comentario, {
        delay: 100,
      });
      await page.click('[ type="submit"]');
      console.log("Quantidade de comentatios: " + quantComentarios);
      await page.waitForTimeout(60000 * tempoEspera);
    }
  }
})();
