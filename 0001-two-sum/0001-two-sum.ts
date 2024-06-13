function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        if (a >= target) continue;
        for (let j = i + 1; j < nums.length; j++) {
            const b = nums[j]
            if (a + b === target) return [i, j]
        }
    }
};