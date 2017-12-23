/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('another_info', {
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
    tableName: 'another_info'
  });
};
