/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detail_info', {
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
    }
  }, {
    tableName: 'detail_info'
  });
};
