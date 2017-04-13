"use strict";
const router = require('koa-router')();

router.get('/', async (ctx, next) => {

  const count = await function() {
    return 'hello world'
  }

  ctx.body = {
    msg: 'hello world',
  };
});


module.exports = router;
