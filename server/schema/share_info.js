/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('share_info', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    age: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    marriage: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    scholar: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    working_place: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    birth_place: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    height: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    nationation: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    animal: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    constellation: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    blood_type: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    occupation: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    incoming_pre_year: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    house: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    car: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    smoke: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    alcohol: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    kitchen: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    when_to_marriage: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    live_with_self_parent: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    live_with_another_parent: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    most_cost: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    most_investion: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    debt: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    exercise: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    diet: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    timetable: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    favorite_sport: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    favorite_music: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    favorite_movie: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    favorite_food: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    favorite_place: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    favorite_pet: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    another_gender: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    another_age: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    another_height: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    another_scholar: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    another_incoming_pre_year: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    another_marriage: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    another_working_place: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    another_weight: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    another_occupation: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    another_smoking: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    another_alcohol: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    another_has_baby: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    another_want_baby: {
      type: DataTypes.STRING(8),
      allowNull: false
    }
  }, {
    tableName: 'share_info'
  });
};
