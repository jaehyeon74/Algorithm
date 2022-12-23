// 9934
// 트리 탐색 결과를 가지고 역으로 트리 구조 도출
//  3(2^(k-1)-1) 1 3

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const totalStage = +input[0];
const searchResultArr = input[1].split(" ");

const treeObj = {};
function getStageArr(arr) {
  const currentStage =
    totalStage - (Math.log(arr.length + 1) / Math.log(2) - 1);
  const stageValueIndex = (arr.length - 1) / 2;
  const stageValue = arr[stageValueIndex];
  if (treeObj[currentStage]) {
    treeObj[currentStage].push(stageValue);
  } else {
    treeObj[currentStage] = [stageValue];
  }
  if (currentStage === totalStage) return;
  getStageArr(arr.slice(0, stageValueIndex));
  getStageArr(arr.slice(stageValueIndex + 1));
}

getStageArr(searchResultArr);
Object.values(treeObj).forEach((val) => {
  const result = val.join(" ");
  console.log(result);
});
