let lastId = 0;
let users = [];

async function createUser(ctx, next){

    let user = ctx.request.body;
    user.id = ++lastId;
    users.push(user)
    ctx.response.body = user;
    next();
}

async function getUser(ctx, next){

    let user = users.find(user => user.id == ctx.params.id);

    if(!user){
        ctx.throw(404, `User with id: ${ctx.params.id} not found`)
    }

    ctx.response.body = user;

    next();
}

export {createUser, getUser}