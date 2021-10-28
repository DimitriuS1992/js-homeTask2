  /**
     * Функция складывает два вводимых пользователем числа.
     * @param {*} a  первое вводимое число пользователем.
     * @param {*} b  второе вводимое число пользователем.
     * @returns  результат словения вводимых чисел a и b.
     */
    function getPlusOperation(a, b) {
      return a + b;
    }

    /**
     * Функция вычитает из вводимого числа a число b.
     * @param {*} a первое вводимое число пользователем.
     * @param {*} b второе вводимое число пользователем.
     * @returns выводит результат вычитания a-b.
     */
    function getMinusOperation(a, b) {
      return a - b;
    }

    /**
     * Функция умножает два вводимых пользователем числа a и b.
     * @param {*} a первое вводимое число пользователем.
     * @param {*} b второе вводимое число пользователем.
     * @returns выводит результат умножения a*b.
     */
    function getMultiplicationOperation(a, b) {
      return a * b;
    }

    /**
     * Функция делит вводимые пользователем числа a на b.
     * @param {*} a первое вводимое число пользователем.
     * @param {*} b второе вводимое число пользователем.
     * @returns выводит результат деления a/b.
     */
    function getDivisionOperation(a, b) {
      return a / b;
    }
  
  /**
   * Функция в зависимости от вводимого символа арифметической операции вызывает результат выполнения функции с этим знаком.
   * @param {*} a первое вводимое число пользователем.
   * @param {*} b второе вводимое число пользователем.
   * @param {*} operation знак арифметической операции. 
   * @returns вывод результата функции арифметической опералии.
   */  
function mathOperation(a, b, operation) {
      if (operation === "+") {
        return getPlusOperation(a, b);
      } else if (operation === "-") {
        return getMinusOperation(a, b);
      } else if (operation === "*") {
        return getMultiplicationOperation(a, b);
      } else if (operation === "/") {
        return getDivisionOperation(a, b);
      } else
        console.log("Выбрана некорректная операция");
    }
