/** The one of ways of creation code with .reduce(), switch ~case **/
class Student extends Person {
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id, scores);

        this.scores = scores;
    }

    calculate() {
        const average = this.scores.reduce((target, score) => { return target + score }) / this.scores.length;

        const range = (average < 70)
            ? Math.ceil((100 - average) / 15)
            : Math.floor((100 - average - 1) / 10);
        let letter = '';

        switch (range) {
            case -1:
            case 0:
                letter = 'O';
                break;

            case 1:
                letter = 'E';
                break;

            case 2:
                letter = 'A';
                break;

            case 3:
                letter = 'P';
                break;

            case 4:
                letter = 'D';
                break;

            default:
                letter = 'T';
                break;
        }

        return letter;
    }
}


/** The one of ways of creation code with if~ else if ~ else **/
class Student extends Person {
    constructor(firstName, lastName, idNumber, testScores) {
        super(firstName, lastName, idNumber);
        this.testScores = testScores;
    }
    calculate() {
        let average = 0;
        let sum = 0;
        let grade = '';
        for (let i = 0, length = this.testScores.length; i < length; i++) {
            sum += this.testScores[i];
        }
        average = sum / this.testScores.length;
        if (90 <= average && average <= 100) {
            grade = 'O';
        } else if (80 <= average && average < 90) {
            grade = 'E';
        } else if (70 <= average && average < 80) {
            grade = 'A';
        } else if (55 <= average && average < 70) {
            grade = 'P';
        } else if (40 <= average && average < 55) {
            grade = 'D';
        } else {
            grade = 'T';
        }
        return grade;
    }
}
