function funcCssGenerator() {
    //Переменные для ползунков
    var rangeTopLeft = document.getElementById('rangeTopLeft').value;
    var rangeTopRight = document.getElementById('rangeTopRight').value;
    var rangeBottomRight = document.getElementById('rangeBottomRight').value;
    var rangeBottomLeft = document.getElementById('rangeBottomLeft').value;
    //Переменные для текстового поля
    var textTopLeft = document.getElementById('textTopLeft');
    var textTopRight = document.getElementById('textTopRight');
    var textBottomRight = document.getElementById('textBottomRight');
    var textBottomLeft = document.getElementById('textBottomLeft');
    //Переменная для блока генератора
    var blockCssGenerator = document.querySelector('.block-css-generator');
    //Передаем значения из ползунков в текстовые поля
    textTopLeft.value = rangeTopLeft;
    textTopRight.value = rangeTopRight;
    textBottomRight.value = rangeBottomRight;
    textBottomLeft.value = rangeBottomLeft;
    //Скругляем углы прямоугольника
    blockCssGenerator.style.borderRadius = rangeTopLeft  + 'px ' + rangeTopRight + 'px ' + 
    rangeBottomRight + 'px ' + rangeBottomLeft + 'px ';
}