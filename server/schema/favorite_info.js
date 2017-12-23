/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('favorite_info', {
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
    }
  }, {
    tableName: 'favorite_info'
  });
};
