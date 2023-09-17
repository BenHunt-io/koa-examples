

let lastId = 0;
const users = [];

async function createUser(ctx, next){
    let user = ctx.request.body;
    user.id = ++lastId;
    users.push[user];
    ctx.response.body = user;
    next();
}

export {createUser}