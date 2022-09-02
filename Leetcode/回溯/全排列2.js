var permuteUnique = function (nums) {
    const res = [];
    const used = new Array(nums.length);
    nums.sort((a, b) => a - b);     // 将数组升序排列
    const backtrace = (path) => {
        if (path.length == nums.length) {
            res.push([...path]);
            return;
        };
        for (let i = 0; i < nums.length; i++) {
            // 如果use[i] 是true，表示重复出现，保证不重复自身，因为是从0开始循环的
            if (used[i]) {
                continue;
            }
            // nums[i] == nums[i - 1]  1 === 1 && !false 前一个没用过
            if (nums[i - 1] == nums[i] && !used[i - 1]) {
                continue;
            }
            used[i] = true;
            path.push(nums[i]);
            backtrace(path);
            path.pop();
            used[i] = false;
        }
    }
    backtrace([]);
    return res;
};

permuteUnique([1, 1, 2]);