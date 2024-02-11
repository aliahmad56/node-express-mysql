// insertFakeData.js
const faker = require("faker");
const { Profile } = require("./models/Profile");

const createFakeUsers = async (count) => {
  try {
    const fakeUsers = [];

    for (let i = 0; i < count; i++) {
      fakeUsers.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
      });
    }

    await Profile.bulkCreate(fakeUsers);
    console.log(`${count} fake users created successfully`);
  } catch (error) {
    console.error("Error creating fake users:", error);
  }
};

// Call the function to create 3 fake users
createFakeUsers(3);
