var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let right = 1;
    let preLength = 0;
    while (right <= s.length) {
        let str = s.slice(left, right);
        preLength = Math.max(str.length, preLength);
        if (str.includes(s[right])) {
            left = str.indexOf(s[right]) + left;
            left += 1;
        } else {
            right += 1;
        }
    }
    return preLength;
};

lengthOfLongestSubstring("abcabcbb")