var findSubsequences = function (nums) {
    let result = []
    function backtracing(path, startIndex) {
        if (path.length > 1) {
            result.push(path.slice())
        }
        let use = []
        for (let i = startIndex; i < nums.length; i++) {
            if ((nums[i] < path[path.length - 1]) || use[nums[i] + 100]) {
                continue
            }
            use[nums[i] + 100] = true
            path.push(nums[i])
            backtracing(path, i + 1)
            path.pop()
        }
    }
    backtracing([], 0)
    return result
};
findSubsequences([1, 2, 1, 1, 1, 1, 1]);