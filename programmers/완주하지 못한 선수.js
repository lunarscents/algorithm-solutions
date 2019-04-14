function solution(participant, completion) {
    let answer = completion.reduce((target, item) => (
        target[item] = target[item] ? target[item] + 1 : 1;

        return target
    ) ,{});

    return participant.find(item => {
        answer[item]
        ? (answer[item] = answer[item] - 1)
        : return true;
    });
}
