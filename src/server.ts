import { createApp } from "./app";

const app = createApp()
const port = process.env.PORT


app.listen(port, () => {
    console.log(`🔥 servidor rodando na porta http://localhost:${port}`);
    
})