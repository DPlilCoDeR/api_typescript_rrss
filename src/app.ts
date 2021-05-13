import express, {Application} from 'express';
import morgan from 'morgan';

export class App {
    private app: Application;
    private PORT?: number | string;


    constructor(port: number | string) {
        this.app = express();
        this.PORT = port;
        this.settings();
        this.middlewares();
    }

    settings(){
        this.app.set('port', this.PORT || process.env.PORT || 3000)
    }

    middlewares(){
        this.app.use(morgan('dev'));
    }

    async listen(){
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.PORT}`);
        })
    }
}