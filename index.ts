function dups(nums: number[]): number[] {
    let output: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            output.push(Math.abs(nums[i]));
        }
        nums[i] = -nums[i];
    }

    return output;
}

let arr: number[] = [4, 3, 2, 7, 8, 2, 3, 1];
let res: number[] = dups(arr);

console.log(res); // ! Should print [2, 3]
