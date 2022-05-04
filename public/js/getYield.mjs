// Test

function getYield(stock1_count, stock2_count) {
  let stock1 = {
    stock_name: "대한에너지솔루션",
    price: 31260,
    stock_count: stock1_count,
  };

  let stock2 = {
    stock_name: "케이배터리솔루션",
    price: 30010,
    stock_count: stock2_count,
  };

  let firmIssue = Math.floor(Math.random() * (3000 - -3000 + 1)) + -3000;
  let marketCondition = Math.floor(Math.random() * (3000 - -3000 + 1)) + -3000;
  let winnerStock;
  let loserStock;
  let winnerStockRatio;
  let loserStockRatio;

  console.log(firmIssue);
  console.log(marketCondition);

  let getWinnerStock = (stock1, stock2) => {
    if (stock1.stock_count > stock2.stock_count) {
      winnerStock = stock1;
      loserStock = stock2;
    } else {
      winnerStock = stock2;
      loserStock = stock1;
    }
  };

  getWinnerStock(stock1, stock2);

  console.log(winnerStock.stock_count);

  if (winnerStock.stock_count >= 38 && winnerStock.stock_count <= 49) {
    winnerStockRatio = 1.05;
    loserStockRatio = -1.05;
  } else if (winnerStock.stock_count >= 49 && winnerStock.stock_count <= 59) {
    winnerStockRatio = 1.07;
    loserStockRatio = -1.07;
  } else if (winnerStock.stock_count >= 59 && winnerStock.stock_count <= 69) {
    winnerStockRatio = 1.09;
    loserStockRatio = -1.09;
  } else if (winnerStock.stock_count >= 69 && winnerStock.stock_count <= 79) {
    winnerStockRatio = 1.1;
    loserStockRatio = -1.1;
  } else {
    winnerStockRatio = 1.1;
    loserStockRatio = -1.1;
  }

  console.log(winnerStockRatio);
  console.log(loserStockRatio);
  console.log(winnerStock);
  console.log(loserStock);

  let winnerStockPrice =
    0.3 * firmIssue +
    0.2 * marketCondition +
    0.5 * (winnerStockRatio * winnerStock.price);
  let loserStockPrice =
    0.3 * firmIssue +
    0.2 * marketCondition +
    0.5 * (loserStockRatio * loserStock.price);

  let resultWinnerStock = winnerStockPrice + stock1.price;
  let resultLoserStock = loserStockPrice + stock2.price;
  return resultWinnerStock, resultLoserStock;
}

export default getYield;