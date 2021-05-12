import express from 'express';

function main(express: any) {
    const app = express();
    const PORT = 3000;

    app.listen(PORT, () => {
        console.log(`Server run in port ${PORT}`)
    })

}

main(express)