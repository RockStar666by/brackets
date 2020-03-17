module.exports = function check(str, bracketsConfig) {
    let strTemp = '';
    let strTemp2 = '';
    let strJ = '';
    for (let i = 0; i < str.length + 3; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            strJ = (bracketsConfig[j][0] + bracketsConfig[j][1]);
            while (str.includes(strJ)) {
                strTemp = str.replace(strJ, '');
                strTemp2 = strTemp;
                str = strTemp2;
            }

        }
    }
    if (str.length == 0) { return true } else { return false };
}