const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}
function changeone()
{
    document.getElementById("div_0").innerHTML='Rally Roads 1990';

    document.getElementById("div_1").innerHTML='<img src=img/montecarlo_1990.jpg>';
    document.getElementById("div_2").innerHTML='<img src=img/finland_1990.jpg>';
    document.getElementById("div_3").innerHTML='<img src=img/sweden_1990.jpg>';
    document.getElementById("div_4").innerHTML='<img src=img/estonia_1990.jpg>';
}

function changetwo()
{
    document.getElementById("div_0").innerHTML='Rally Roads 2020';

    document.getElementById("div_1").innerHTML='<img src=img/montecarlo_2020.jpg>';
    document.getElementById("div_2").innerHTML='<img src=img/finland_2020.jpg>';
    document.getElementById("div_3").innerHTML='<img src=img/sweden_2020.jpg>';
    document.getElementById("div_4").innerHTML='<img src=img/estonia_2020.jpg>';
}
