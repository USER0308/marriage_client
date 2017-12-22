const db = require('../config/db.js')

const userModel = '../schema/user.js' // 引入user的表结构
const shareInfoModel = '../schema/share_info.js'

const hospitalClient = db.MarriageClient // 引入数据库

const User = hospitalClient.import(userModel)
const ShareInfo = hospitalClient.import(shareInfoModel)

const getUserByAccount = async function (account) {
  const getUser = await User.findOne({
    where: {
      account: account
    }
  })
  // console.log('in model', getUser)
  return getUser
}

const getShareInfo = async function (id) {
  const shareInfo = await ShareInfo.findOne({
    where: {
      user_id: id
    }
  })
  // console.log(shareInfo)
  return shareInfo
}

const resetPassword = async function (id, account, password) {
  const result = await User.update({
    password
  }, {
    where: {
      id,
      account: account
    }
  })
  console.log('in reset password', result)
  return result[0] === 1
}

const update = async function (id, info) {
  console.log(typeof info)
  console.log('info is', info)
  const result = await ShareInfo.update(info, {
    where: {
      user_id: id
    }
  })
  console.log('in update, result is', result)
  return true
}

const createUser = async function (token, info) {
  await User.create({
    account: token,
    password: Math.random().toString(36).substr(2)
  })
  const u = await getUserByAccount(token)
  await ShareInfo.create({
    user_id: u.dataValues.id,
    age: info.age,
    marriage: info.marriage,
    scholar: info.scholar,
    working_place: info.working_place,
    gender: info.gender,
    birth_place: info.birth_place,
    height: info.height,
    weight: info.weight,
    nationation: info.nationation,
    animal: info.animal,
    constellation: info.constellation,
    blood_type: info.blood_type,
    occupation: info.occupation,
    incoming_pre_year: info.incoming_pre_year,
    house: info.house,
    car: info.car,
    smoke: info.smoke,
    alcohol: info.alcohol,
    kitchen: info.kitchen,
    when_to_marriage: info.when_to_marriage,
    live_with_self_parent: info.live_with_self_parent,
    live_with_another_parent: info.live_with_another_parent,
    most_cost: info.most_cost,
    most_investion: info.most_investion,
    debt: info.debt,
    exercise: info.exercise,
    diet: info.diet,
    timetable: info.timetable,
    favorite_sport: info.favorite_sport,
    favorite_music: info.favorite_music,
    favorite_movie: info.favorite_movie,
    favorite_food: info.favorite_food,
    favorite_place: info.favorite_place,
    favorite_pet: info.favorite_pet,
    another_gender: info.another_gender,
    another_age: info.another_age,
    another_height: info.another_height,
    another_scholar: info.another_scholar,
    another_incoming_pre_year: info.another_incoming_pre_year,
    another_marriage: info.another_marriage,
    another_working_place: info.another_working_place,
    another_weight: info.another_weight,
    another_occupation: info.another_occupation,
    another_smoking: info.another_smoking,
    another_alcohol: info.another_alcohol,
    another_has_baby: info.another_has_baby,
    another_want_baby: info.another_want_baby,
  })



}


const correct = async function (token) {
  const result = await User.findOne({
    where: {account: token}
  })
  console.log(result)
  return result === null
}

module.exports = {
  // getUserById,  // 导出getUserById的方法，将会在controller里调用
  getUserByAccount,
  getShareInfo,
  resetPassword,
  update,
  createUser,
  correct
}