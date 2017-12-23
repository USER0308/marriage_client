// controllers/user.js

const user = require('../models/user.js')

const authorize = async function (ctx) {
  const data = ctx.request.body
  // console.log('ctx is', ctx)
  // console.log('data is:', data)
  // console.log('account is:', data.account)
  // console.log('password is:', data.password)
  const getUser = await user.getUserByAccount(data.account)
  // console.log(getUser)
  if (getUser !== null) {
    if (getUser.dataValues.password === data.password) {
      let shareInfo = await user.getShareInfo(getUser.dataValues.id)
      console.log('shareinfo is:', shareInfo)
      ctx.body = {
        success: true,
        info: '登录成功',
        shareInfo: shareInfo
      }
    } else {
      ctx.body = {
        success: false,
        info: '登录失败,密码错误'
      }
    }
  } else {
    ctx.body = {
      success: false,
      info: '帐号不存在'
    }
  }
  console.log('in authorize', getUser)
  // ctx.body = getUser
}

const passwordReset = async function (ctx) {
  const data = ctx.request.body
  console.log(data)
  const getUser = await user.getUserByAccount(data.account)
  if (getUser !== null) {
    let status = await user.resetPassword(getUser.dataValues.id, getUser.dataValues.account, data.password)
    console.log('in password reset, status is', status)
    if (status) {
      ctx.body = {
        success: status,
        info: '更改成功'
      }
    } else {
      ctx.body = {
        success: status,
        info: '更改失败'
      }
    }
  } else {
    ctx.body = {
      success: false,
      info: '帐号不存在'
    }
  }
}

const updateInfo = async function (ctx) {
  const data = ctx.request.body
  console.log(data)
  const getUser = await user.getUserByAccount(data.account)
  if (getUser !== null) {
    //
    let status = await user.update(getUser.dataValues.id, data.info)
    console.log('in update, status is', status)
    if (status) {
      ctx.body = {
        success: status,
        info: '更新成功'
      }
    } else {
      ctx.body = {
        success: status,
        info: '更新失败'
      }
    }
  } else {
    ctx.body = {
      success: false,
      info: '帐号不存在'
    }
  }
}

const validate = async function (ctx) {
  const data = ctx.request.body
  if ('info' in data) {
    await user.createUser(data.token, data.info)
    ctx.body = {
      success: true,
      info: '获得授权'
    }
  } else {
    if (user.correct(data.token)) {
      ctx.body = {
        success: true,
        info: 'token 正确'
      }
    } else {
      ctx.body = {
        success: false,
        info: 'token 不正确'
      }
    }
  }
}

const operation = async function (ctx) {
  const data = ctx.body
  if (data.type === '1') {
    // add
  } else if (data.type === '2') {
    // remove
  } else if (data.type === '0') {
    // update
    // data = {
    // account
    // key
    // value
    const u = await user.getUserByAccount(data.account)
    if (u === null) {
      ctx.body = {
        success: false,
        info: '帐号不存在'
      }
      return
    }
    if (data.key === 'detail_info') {
      await user.updateDetailInfo(u.dataValues.id, data.value)
      ctx.body = {
        success: true,
        info: '更新成功'
      }
    } else if (data.key === 'living_info') {
      await user.updateLivingInfo(u.dataValues.id, data.value)
      ctx.body = {
        success: true,
        info: '更新成功'
      }
    } else if (data.key === 'favorite_info') {
      await user.updateFavoriteInfo(u.dataValues.id, data.value)
      ctx.body = {
        success: true,
        info: '更新成功'
      }
    } else if (data.key === 'another_info') {
      await user.updateAnotherInfo(u.dataValues.id, data.value)
      ctx.body = {
        success: true,
        info: '更新成功'
      }
    }
  }
}

module.exports = {
  authorize,
  passwordReset,
  updateInfo,
  validate,
  operation
}
