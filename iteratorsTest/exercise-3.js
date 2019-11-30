const axios = require("axios");

const ipAddressesList = ["1.1.1.1", "2.2.2.2", "3.3.3.3", "4.4.4.4"];

async function getIP(endpoint) {
  try {
    return await axios.get(`http://ip-api.com/json/${endpoint}`);
  } catch (err) {
    console.error(err);
  }
}

const getAddress = ipAddressesList.map(address => {
  getIP(address).then(res => console.log(res.data));
});

console.log(getAddress);
