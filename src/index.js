import readlineSync from 'readline-sync';

const sayYourName = (str) => {
  const userName = readlineSync.question(`${str} `);
  console.log(`Hi, ${userName}!`);
};

export default sayYourName;
