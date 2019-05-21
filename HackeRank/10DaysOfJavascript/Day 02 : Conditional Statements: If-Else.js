function getGrade(score) {
    let grade;
    // Write your code here
    grade = score <= 5 ? 'F'
        : score <= 10 ? 'E'
            : score <= 15 ? 'D'
                : score <= 20 ? 'C'
                    : score <= 25 ? 'B'
                        : score <= 30 ? 'A' : '';

    return grade;
}
