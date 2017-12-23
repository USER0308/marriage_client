/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('living_info', {
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
    }
  }, {
    tableName: 'living_info'
  });
};
