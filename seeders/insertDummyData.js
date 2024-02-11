// seeders/insertDummyData.js

const sequelize = require("../config/config");
const { Profile } = require("../models/Profile");

async function insertDummyData() {
  try {
    await sequelize.sync();

    // Insert dummy data into the Profile table
    await Profile.create({
      firstName: "John",
      lastName: "Doe",
    });

    // Insert additional dummy records
    await Profile.bulkCreate([
      {
        firstName: "Jane",
        lastName: "Doe",
      },
      {
        firstName: "Bob",
        lastName: "Smith",
      },
    ]);

    console.log("Dummy data inserted successfully!");
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  } finally {
    // Close the Sequelize connection (if needed)
    // await sequelize.close();
  }
}

// Call the function to insert dummy data
insertDummyData();
