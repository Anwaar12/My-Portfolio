var viw = document.createElement('div');
viw.className = 'mob_mnu_viw';
var clsBtn = document.createElement('img');
clsBtn.className='close_icon';
clsBtn.src='images/Icon.png';
var mnuLst = document.createElement('ul');
mnuLst.className='mnu_lst';
for(let i=0;i<3;i++) {
    var mnu_itm = document.createElement('li');
    mnuLst.appendChild(mnu_itm);
    var anch = document.createElement('a')
    mnu_itm.appendChild(anch);

    if(i===0) {
        anch=document.createTextNode('Portfolio');
    }
    else if(i===1) {
        anch=document.createTextNode('About')
    } 
    else {
        anch=document.createTextNode('Contact')
    }
    mnu_itm.appendChild(anch);
}

function hmbrgr_mnu() {
    document.body.appendChild(viw);
    document.body.appendChild(clsBtn);
    document.body.appendChild(mnuLst)
}

var hmbrg_btn = document.querySelector('.bars-mob');
hmbrg_btn.addEventListener('click',hmbrgr_mnu);