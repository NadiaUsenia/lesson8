let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

let title = document.createElement('title');
title.innerHTML = 'New html document';

document.head.appendChild(metaUtf8);
document.head.appendChild(title);

let div_site = document.createElement('div');
div_site.innerHTML = '';
div_site.classList.add('site');
document.body.appendChild(div_site);
//header

let header = document.createElement('header');
header.innerHTML = '';
header.classList.add('header');
div_site.appendChild(header);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

header.appendChild(h1);
header.appendChild(p1);

//left_part
let section = document.createElement('section');
section.innerHTML = '';
div_site.appendChild(section);
let div1 = document.createElement('div');
div1.innerHTML = '';
div1.classList.add('container');
section.appendChild(div1);
let div2 = document.createElement('div');
div2.innerHTML = '';
div2.classList.add('left_part');
div1.appendChild(div2);

let left_h3 = document.createElement('h3');
left_h3.innerHTML = 'FREELANCER';
left_h3.classList.add('left_h3');

let left_h2 = document.createElement('h2');
left_h2.innerHTML = 'Initially<br> designed to';
left_h2.classList.add('left_h2');

let left_p = document.createElement('p');
left_p.innerHTML = 'But I must explain to you how all this<br> mistaken idea of denouncing';
left_p.classList.add('left_p');

let button_left = document.createElement('button');
button_left.innerHTML = 'START HERE';
button_left.classList.add('button_left');

div2.appendChild(left_h3);
div2.appendChild(left_h2);
div2.appendChild(left_p);
div2.appendChild(button_left);

//right_part

let div3 = document.createElement('div');
div3.innerHTML = '';
div3.classList.add('right_part');
div1.appendChild(div3);

let right_h3 = document.createElement('h3');
right_h3.innerHTML = 'STUDIO';
right_h3.classList.add('right_h3');

let right_h2 = document.createElement('h2');
right_h2.innerHTML = 'Initially<br> designed to';
right_h2.classList.add('right_h2');

let right_p = document.createElement('p');
right_p.innerHTML = 'But I must explain to you how all this<br> mistaken idea of denouncing';
right_p.classList.add('right_p');

let button_right = document.createElement('button');
button_right.innerHTML = 'START HERE';
button_right.classList.add('button_right');

div3.appendChild(right_h3);
div3.appendChild(right_h2);
div3.appendChild(right_p);
div3.appendChild(button_right);

let style = document.createElement('style');
style.innerHTML = `
    .site {
        max-width: 1280px;
        margin: 0 auto;
        background-color: #fff;
    }
    .header {
        align-items: center;
        text-align: center;
        padding-top: 125px;
        padding-bottom: 55px;

    }
    .header h1 {
        font-family: Arvo;
        font-size: 36px;
        line-height: 48px;
        align-items: center;
        color: #212121;
            }
    .header p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
            }

    .container {
        width: 60%;
        display: grid;
		grid-template-columns: 1fr 2fr;
        margin: 0 auto;
        align-items: center;
        text-align: center;
    }
    .left_part { 
        width: 400px;
        height: 480px;
        border: 1px solid #E8E9ED;
        
    }
    .left_part h3 {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;
        color: #9FA3A7;
        padding-top: 83px;
        padding-buttom: 19px;
    }
    .left_h2 {
        font-family: Arvo;
        font-weight: normal;
        font-size: 36px;
        line-height: 46px;
        align-items: center;
        text-align: center;
        color: #212121;
    }
    .left_p {
        font-family: Open Sans;
        font-size: 12px;
        line-height: 22px;
        align-items: center;
        text-align: center;
        color: #9FA3A7;
        padding-top: 15px;
        padding-buttom: 50px;

    }
    .button_left {
        width: 147px;
        height: 46px;
        border: 3px solid #FFC80A;
        border-radius: 40%;
        font-family: Montserrat;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;
        background: #fff;

    }

    .right_part { 
        width: 400px;
        height: 480px;
        background: #8F75BE;
        
    }
    .right_part h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;
        color: #FFC80A;
        padding-top: 83px;
        padding-buttom: 19px;
    }
    .right_h2 {
        ont-family: Arvo;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 46px;
        align-items: center;
        text-align: center;
        
        color: #FFFFFF;  
    }
    .right_p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;
        color: #FFFFFF;
        padding-top: 15px;
        padding-buttom: 50px;
    }
    .button_right {
        width: 147px;
        height: 46px;
        border: 3px solid #FFC80A;
        border-radius: 40%;
        font-family: Montserrat;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;
        background: #8F75BE;
        color: #FFFFFF;
    }
    
            
    `;

document.body.appendChild(style);
