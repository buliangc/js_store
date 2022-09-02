var combinationSum = function (candidates, target) {
    let res = [];
    const sum = (arr) => {
        if (arr.length == 0) {
            return 0;
        }
        return arr.reduce((a, b) => a + b)
    }
    const backtracking = (path, startIndex) => {
        if (sum(path) === target) {
            res.push([...path]);
            return;
        }
        if (sum(path) > target) {
            return;
        }
        for (let i = startIndex; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtracking(path, i);
            path.pop();
        }
    }
    backtracking([], 0);
    return res;
};

combinationSum([2, 3, 6, 7], 7)