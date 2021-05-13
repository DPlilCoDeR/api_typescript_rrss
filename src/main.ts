import { App } from './app';

async function main() {
    const PORT = 3000;
    const app = new App(PORT)
    await app.listen()

}

main()