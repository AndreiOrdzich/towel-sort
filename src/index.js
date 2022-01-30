// You should implement your task here.

module.exports = function towelSort(matrix) {
    matrix = typeof matrix !== 'undefined' ? matrix : [];
    return (matrix.reduce((acc, cur, i) => {
        return acc.concat((!(i % 2) ? cur : cur.reverse()));
    }, []))

}