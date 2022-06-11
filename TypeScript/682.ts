// https://leetcode.com/problems/baseball-game/
// Runtime: 117 ms, faster than 5.88% of TypeScript online submissions for Baseball Game.
// Memory Usage: 44.9 MB, less than 35.29% of TypeScript online submissions for Baseball Game.
// 04/10/2022 20:35
function calPoints(ops: string[]): number {
    const scores = [];
    for (const op of ops) {
        switch(op) {
            case "C":
                scores.pop();
                break;
            case "D":
                scores.push(scores[scores.length - 1] * 2);
                break;
            case "+":
                scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
                break;
            default:
                scores.push(Number(op));
                break;
        }
    }
    return scores.reduce((a, b) => a + b);
};
