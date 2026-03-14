const TOTAL_ROWS = 5;

/**
 * Calculate nCr (binomial coefficient)
 */
function calculateCombination(n, r) {
    let result = 1;

    for (let index = 0; index < r; index++) {
        result = (result * (n - index)) / (index + 1);
    }

    return Math.round(result);
}

/**
 * Print the Pascal-style decreasing pattern
 */
function printPattern(totalRows) {

    for (let row = 0; row < totalRows; row++) {

        let currentRow = "";

        // Add leading spaces
        for (let space = 0; space < row; space++) {
            currentRow += " ";
        }

        const currentLevel = totalRows - 1 - row;

        // Generate Pascal values
        for (let column = 0; column <= currentLevel; column++) {
            const value = calculateCombination(currentLevel, column);
            currentRow += value + " ";
        }

        // Remove only the last space
        console.log(currentRow.slice(0, -1));
    }
}

printPattern(TOTAL_ROWS);