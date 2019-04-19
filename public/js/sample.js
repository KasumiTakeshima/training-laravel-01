
window.addEventListener('DOMContentLoaded',function(){
var button = document.getElementById('goBack');  　//ボタンがどこなのか
var goBackAction = () => {
    window.scrollTo(0,50);
};
button.addEventListener('click',goBackAction, false);
});