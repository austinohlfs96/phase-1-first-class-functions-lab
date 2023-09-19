// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (driversArray) => {
  return driversArray.slice(0,2);
};

const returnLastTwoDrivers = (driversArray) => {
  return driversArray.slice(-2);
};

const selectingDrivers =
  [returnFirstTwoDrivers, returnLastTwoDrivers];

  
  const createFareMultiplier =(multiply) => {
    return (value) => {
      return value * multiply
    }
  }

const fareDoubler = (value) => {
  return value * 2
  } 


  const fareTripler = (value) => {
   return value * 3;
    }
  


    const selectDifferentDrivers =(arrayOfDrivers, driverSelectorFunction) => {
      return driverSelectorFunction(arrayOfDrivers);
    }