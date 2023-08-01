
// ● Debe tener al menos 16 caracteres.
// ● Debe tener letras minúsculas y mayúsculas.
// ● No puede tener 2 letras iguales consecutivas.
// ● Debe contener al menos 4 números.
// ● No puede tener 2 números iguales consecutivos.
// ● Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de
// ellos puede repetirse en ninguna posición y además los caracteres no pueden
// estar juntos.
// ● No se puede usar el número 0.
// ● No se puede colocar espacios.

export const strongValidator = (value = "") => {
    let arrMsgs = [];

    let maxCounter = 0, minCounter = 0;
    let min4LimitDigit = 0;
    let maxCounterEmpty = 0;
    let maxCounterZero = 0;
    let maxCounterCharSpecial = 0;
    let maxCounterCharSpecialRepeat = 0;

    let alphabetMAY = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let alphabetMIN = "abcdefghijklmnñopqrstuvwxyz";
    let digitNumber = "0123456789";
    let charspecial = "!@#$%ˆ&*-_+=?";
    let empty = " ";
    let zero = "0";

    let counterRepeatWord = 0, counterRepeatDigit = 0;
    let equalWord = 0, equalDigit = 0;
    let iterationCounter = 0;


    // ITEMS (others)
    for (let i = 0; i < value.length; i++) {

        // ITEM (2) Debe tener letras minúsculas y mayúsculas.
        if (alphabetMAY.indexOf(value.charAt(i)) !== -1) {
            maxCounter++;
        }
        if (alphabetMIN.indexOf(value.charAt(i)) !== -1) {
            minCounter++;
        }

        // ITEM (3) No puede tener 2 letras iguales consecutivas.
        // ITEM (5)  No puede tener 2 números iguales consecutivos.
        if (value.charAt(i) === value.charAt(iterationCounter)) {
            if (digitNumber.indexOf(value.charAt(i)) !== -1) {
                equalDigit++;
            } else {
                equalWord++;
            }
        } else {

            if (digitNumber.indexOf(value.charAt(i)) !== -1) {
                if (equalDigit > counterRepeatDigit) {
                    counterRepeatDigit = equalDigit;
                }
                equalDigit = 1;
            } else {
                if (equalWord > counterRepeatWord) {
                    counterRepeatWord = equalWord;
                }
                equalWord = 1;
            }
        }

        // ITEM (4) Debe contener al menos 4 números.
        if (digitNumber.indexOf(value.charAt(i)) !== -1) {
            min4LimitDigit++;
        }

        // ITEM (6)  Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de ellos puede repetirse en ninguna posición y además los caracteres no pueden estar juntos.
        if (charspecial.indexOf(value.charAt(i)) !== -1) {

            if (maxCounterCharSpecial > 0) {
                if (value.charAt(i) === value.charAt(iterationCounter)) {
                    maxCounterCharSpecialRepeat++;
                }
            }
            maxCounterCharSpecial++;
        }

        // ITEM (7)  No se puede usar el número 0.
        if (zero.indexOf(value.charAt(i)) !== -1) {
            maxCounterZero++;
        }

        // ITEM (8)  No se puede colocar espacios
        if (empty.indexOf(value.charAt(i)) !== -1) {
            maxCounterEmpty++;
        }

        iterationCounter = i;

    }

    // ITEM (1)
    if (value.length < 16) {
        arrMsgs.push({ message: "Debe tener al menos 16 caracteres", error: true });

    } else {
        arrMsgs.push({ message: "(OK) tiene más de 16 caracteres", error: false });
    }

    // ITEM (2)  Debe tener letras minúsculas y mayúsculas.
    let boolMayAndMin = (maxCounter > 0) && (minCounter > 0);
    if (!boolMayAndMin) {
        arrMsgs.push({ message: "Debe tener letras minúsculas y mayúsculas", error: true });
    } else {
        arrMsgs.push({ message: "(OK) tiene letras mayúsculas y minúsculas", error: false });
    }
    // ITEM (3) No puede tener 2 letras iguales consecutivas.
    let boolNoConsecutive2Word = counterRepeatWord > 1;
    if (boolNoConsecutive2Word) {
        arrMsgs.push({ message: "No puede tener 2 letras iguales consecutivas", error: true });
    } else {
        arrMsgs.push({ message: "(OK) No se repiten letras consecutivas", error: false });
    }

    // ITEM (4) Debe contener al menos 4 números.
    if (min4LimitDigit < 4) {
        arrMsgs.push({ message: "Debe contener al menos 4 dígitos", error: true });
    } else {
        arrMsgs.push({ message: !value || min4LimitDigit < 4 ? "Debe contener al menos 4 números" : "(OK) tiene 4 o más dígitos", error: !value || min4LimitDigit < 4 ? true : false });
    }

    // ITEM (5)  No puede tener 2 números iguales consecutivos.
    let boolNoConsecutive2Digit = counterRepeatDigit > 1;
    if (boolNoConsecutive2Digit) {
        arrMsgs.push({ message: "No puede tener 2 números iguales consecutivos", error: true });
    } else {
        arrMsgs.push({ message: "(OK) No se repiten números consecutivos", error: false });
    }

    // ITEM (6)  Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de ellos puede repetirse en ninguna posición y además los caracteres no pueden estar juntos.
    if (maxCounterCharSpecialRepeat > 1) {
        arrMsgs.push({ message: "Los caracteres especiales se repiten", error: true });
    } else {
        arrMsgs.push({ message: "(OK) No se repiten los caracteres especiales", error: false });
    }
    if (maxCounterCharSpecial > 2) {
        arrMsgs.push({ message: "Solo se permiten 2 caracteres especiales", error: true });
    } else {
        arrMsgs.push({ message: "(OK) Caracteres especiales agregados", error: false });
    }

    // ITEM (7)  No se puede usar el número 0.
    if (maxCounterZero > 0) {
        arrMsgs.push({ message: "No se puede usar el número 0", error: true });
    } else {
        arrMsgs.push({ message: "(OK) No se ha insertado el número 0", error: false });
    }

    // ITEM (8)  No se puede colocar espacios
    if (maxCounterEmpty > 0) {
        arrMsgs.push({ message: "No se puede colocar espacios", error: true });
    } else {
        arrMsgs.push({ message: "(OK) No se ha insertado espacio", error: false });
    }


    return arrMsgs;
}
