const ftoc = function(userTempF) {
  return Math.round(((userTempF - 32) * 0.5556) * 10) / 10;



};

const ctof = function(userTempC) {
  return Math.round(((userTempC * 1.8) + 32) * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
