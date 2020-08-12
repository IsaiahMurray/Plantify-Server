module.exports = (sequelize, DataTypes) => {
    const Plant = sequelize.define("plant", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
      },
      commonName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      family: {
        type: DataTypes.STRING,
        allowNull: true
      },
      familyCommonName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      scientificName: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      genus: {
        type: DataTypes.STRING,
        allowNull: true
      },
      image: {
          type: DataTypes.STRING,
        allowNull: true
      },
      description: {
          type: DataTypes.STRING,
          allowNull: true
      },
      notes: {
          type: DataTypes.STRING,
          allowNull: true
      },
      owner: {
        type: DataTypes.INTEGER
      }
    });
    return Plant;
  };