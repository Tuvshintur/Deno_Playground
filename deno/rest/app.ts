import { Application } from 'https://deno.land/x/oak/mod.ts';

//always include file extension
import todosRoutes from './routes/todos.ts';

const app = new Application();

//middleware always must be async
app.use(async (ctx, next) => {
    console.log('Middleware!');
    await next();
});

app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 3000 });
