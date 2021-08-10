// const mageToggle = document.getElementById('MageHover');
// console.log(mageToggle);
// // mageToggle.addEventListener('click', () => {
// //     mageToggle.style.backgroundColor = "green";
// // });

function showSubMenu(subMenu, bigBtn){
    document.getElementById(subMenu).classList.toggle('active');
    document.getElementById(bigBtn).classList.toggle('active');
    // const Mage = document.getElementsByClassName('Mage-options')[0];
    // Mage.classList.toggle('active');
}
function hideAllBut(e){
    for(let k = 0; k < ListofMancys.length; k++){
		document.getElementById(ListofMancys[k]).style.display = "none";
	}
	document.getElementById(e).style.display = "inline-block";
    for(let h=0; h<ListofCtypes.length; h++){
      if(e == ListofCtypes[h]){
        document.getElementById(e).style.display = "flex";
      }
    }
	// document.getElementById('MancyTitle').innerHTML = e;


    // document.getElementById('Exploration').style.display = 'none';
    // document.getElementById(e).style.display = 'inline-block';
}


let settingBtn;
let settingText;
/*window.addEventListener('load', (event) =>{
    console.log('fully loaded eventListeners are added');
    let Cool = document.getElementsByClassName('Skill');
    let attrNum = 1;
    let attrString;
    let index = 0;
    let count = 0;
    // console.log(Cool);
    for(let i=0; i<Cool.length; i++){
        if(attrNum === 10) { index++; attrNum = 1; }
        attrString = 'Attr'+ parseInt(attrNum);
        // console.log(attrString + 'with an index of: ' + index);
        attrNum++;
        count++;
        Cool[i].addEventListener('click', (event) =>{
            newPower(attrString, index);
        });
    }
    console.log('the count is: ' + count);
    // console.log(document.getElementsByClassName('aAttr1'));
    // document.getElementById('ilAttr1').addEventListener('click', (event) =>{
    //     newPower(`Attr1`, 0);
    // });
}); */
window.addEventListener('load', (event) =>{
    document.getElementById('ilAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 0);
    });
    document.getElementById('ilAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 0);
    });
    document.getElementById('ilAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 0);
    });
    document.getElementById('ilAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 0);
    });
    document.getElementById('ilAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 0);
    });
    document.getElementById('ilAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 0);
    });
    document.getElementById('ilAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 0);
    });
    document.getElementById('ilAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 0);
    });
    document.getElementById('ilAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 0);
    });
    document.getElementById('elAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 1);
    });
    document.getElementById('elAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 1);
    });
    document.getElementById('elAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 1);
    });
    document.getElementById('elAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 1);
    });
    document.getElementById('elAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 1);
    });
    document.getElementById('elAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 1);
    });
    document.getElementById('elAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 1);
    });
    document.getElementById('elAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 1);
    });
    document.getElementById('elAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 1);
    });
    document.getElementById('mtAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 2);
    });
    document.getElementById('mtAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 2);
    });
    document.getElementById('mtAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 2);
    });
    document.getElementById('mtAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 2);
    });
    document.getElementById('mtAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 2);
    });
    document.getElementById('mtAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 2);
    });
    document.getElementById('mtAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 2);
    });
    document.getElementById('mtAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 2);
    });
    document.getElementById('mtAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 2);
    });
    document.getElementById('aoAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 3);
    });
    document.getElementById('aoAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 3);
    });
    document.getElementById('aoAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 3);
    });
    document.getElementById('aoAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 3);
    });
    document.getElementById('aoAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 3);
    });
    document.getElementById('aoAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 3);
    });
    document.getElementById('aoAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 3);
    });
    document.getElementById('aoAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 3);
    });
    document.getElementById('aoAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 3);
    });
    document.getElementById('prAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 4);
    });
    document.getElementById('prAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 4);
    });
    document.getElementById('prAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 4);
    });
    document.getElementById('prAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 4);
    });
    document.getElementById('prAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 4);
    });
    document.getElementById('prAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 4);
    });
    document.getElementById('prAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 4);
    });
    document.getElementById('prAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 4);
    });
    document.getElementById('prAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 4);
    });
    document.getElementById('evAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 5);
    });
    document.getElementById('evAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 5);
    });
    document.getElementById('evAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 5);
    });
    document.getElementById('evAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 5);
    });
    document.getElementById('evAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 5);
    });
    document.getElementById('evAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 5);
    });
    document.getElementById('evAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 5);
    });
    document.getElementById('evAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 5);
    });
    document.getElementById('evAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 5);
    });
    document.getElementById('nmAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 6);
    });
    document.getElementById('nmAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 6);
    });
    document.getElementById('nmAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 6);
    });
    document.getElementById('nmAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 6);
    });
    document.getElementById('nmAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 6);
    });
    document.getElementById('nmAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 6);
    });
    document.getElementById('nmAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 6);
    });
    document.getElementById('nmAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 6);
    });
    document.getElementById('nmAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 6);
    });
    document.getElementById('ioAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 7);
    });
    document.getElementById('ioAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 7);
    });
    document.getElementById('ioAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 7);
    });
    document.getElementById('ioAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 7);
    });
    document.getElementById('ioAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 7);
    });
    document.getElementById('ioAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 7);
    });
    document.getElementById('ioAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 7);
    });
    document.getElementById('ioAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 7);
    });
    document.getElementById('ioAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 7);
    });
    document.getElementById('poAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 8);
    });
    document.getElementById('poAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 8);
    });
    document.getElementById('poAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 8);
    });
    document.getElementById('poAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 8);
    });
    document.getElementById('poAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 8);
    });
    document.getElementById('poAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 8);
    });
    document.getElementById('poAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 8);
    });
    document.getElementById('poAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 8);
    });
    document.getElementById('poAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 8);
    });
    document.getElementById('mhAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 9);
    });
    document.getElementById('mhAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 9);
    });
    document.getElementById('mhAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 9);
    });
    document.getElementById('mhAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 9);
    });
    document.getElementById('mhAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 9);
    });
    document.getElementById('mhAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 9);
    });
    document.getElementById('mhAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 9);
    });
    document.getElementById('mhAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 9);
    });
    document.getElementById('mhAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 9);
    });
    document.getElementById('ruAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 10);
    });
    document.getElementById('ruAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 10);
    });
    document.getElementById('ruAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 10);
    });
    document.getElementById('ruAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 10);
    });
    document.getElementById('ruAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 10);
    });
    document.getElementById('ruAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 10);
    });
    document.getElementById('ruAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 10);
    });
    document.getElementById('ruAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 10);
    });
    document.getElementById('ruAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 10);
    });
    document.getElementById('ssAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 11);
    });
    document.getElementById('ssAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 11);
    });
    document.getElementById('ssAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 11);
    });
    document.getElementById('ssAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 11);
    });
    document.getElementById('ssAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 11);
    });
    document.getElementById('ssAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 11);
    });
    document.getElementById('ssAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 11);
    });
    document.getElementById('ssAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 11);
    });
    document.getElementById('ssAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 11);
    });
    document.getElementById('guAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 12);
    });
    document.getElementById('guAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 12);
    });
    document.getElementById('guAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 12);
    });
    document.getElementById('guAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 12);
    });
    document.getElementById('guAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 12);
    });
    document.getElementById('guAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 12);
    });
    document.getElementById('guAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 12);
    });
    document.getElementById('guAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 12);
    });
    document.getElementById('guAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 12);
    });
    document.getElementById('juAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 13);
    });
    document.getElementById('juAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 13);
    });
    document.getElementById('juAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 13);
    });
    document.getElementById('juAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 13);
    });
    document.getElementById('juAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 13);
    });
    document.getElementById('juAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 13);
    });
    document.getElementById('juAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 13);
    });
    document.getElementById('juAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 13);
    });
    document.getElementById('juAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 13);
    });
    document.getElementById('auAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 14);
    });
    document.getElementById('auAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 14);
    });
    document.getElementById('auAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 14);
    });
    document.getElementById('auAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 14);
    });
    document.getElementById('auAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 14);
    });
    document.getElementById('auAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 14);
    });
    document.getElementById('auAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 14);
    });
    document.getElementById('auAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 14);
    });
    document.getElementById('auAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 14);
    });
    document.getElementById('acAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 15);
    });
    document.getElementById('acAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 15);
    });
    document.getElementById('acAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 15);
    });
    document.getElementById('acAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 15);
    });
    document.getElementById('acAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 15);
    });
    document.getElementById('acAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 15);
    });
    document.getElementById('acAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 15);
    });
    document.getElementById('acAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 15);
    });
    document.getElementById('acAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 15);
    });
    document.getElementById('duAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 16);
    });
    document.getElementById('duAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 16);
    });
    document.getElementById('duAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 16);
    });
    document.getElementById('duAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 16);
    });
    document.getElementById('duAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 16);
    });
    document.getElementById('duAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 16);
    });
    document.getElementById('duAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 16);
    });
    document.getElementById('duAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 16);
    });
    document.getElementById('duAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 16);
    });
    document.getElementById('taAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 17);
    });
    document.getElementById('taAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 17);
    });
    document.getElementById('taAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 17);
    });
    document.getElementById('taAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 17);
    });
    document.getElementById('taAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 17);
    });
    document.getElementById('taAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 17);
    });
    document.getElementById('taAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 17);
    });
    document.getElementById('taAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 17);
    });
    document.getElementById('taAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 17);
    });
    document.getElementById('heAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 18);
    });
    document.getElementById('heAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 18);
    });
    document.getElementById('heAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 18);
    });
    document.getElementById('heAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 18);
    });
    document.getElementById('heAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 18);
    });
    document.getElementById('heAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 18);
    });
    document.getElementById('heAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 18);
    });
    document.getElementById('heAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 18);
    });
    document.getElementById('heAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 18);
    });
    document.getElementById('alAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 19);
    });
    document.getElementById('alAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 19);
    });
    document.getElementById('alAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 19);
    });
    document.getElementById('alAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 19);
    });
    document.getElementById('alAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 19);
    });
    document.getElementById('alAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 19);
    });
    document.getElementById('alAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 19);
    });
    document.getElementById('alAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 19);
    });
    document.getElementById('alAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 19);
    });
    document.getElementById('exAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 20);
    });
    document.getElementById('exAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 20);
    });
    document.getElementById('exAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 20);
    });
    document.getElementById('exAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 20);
    });
    document.getElementById('exAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 20);
    });
    document.getElementById('exAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 20);
    });
    document.getElementById('exAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 20);
    });
    document.getElementById('exAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 20);
    });
    document.getElementById('exAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 20);
    });
    document.getElementById('orAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 21);
    });
    document.getElementById('orAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 21);
    });
    document.getElementById('orAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 21);
    });
    document.getElementById('orAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 21);
    });
    document.getElementById('orAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 21);
    });
    document.getElementById('orAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 21);
    });
    document.getElementById('orAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 21);
    });
    document.getElementById('orAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 21);
    });
    document.getElementById('orAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 21);
    });
    document.getElementById('peAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 22);
    });
    document.getElementById('peAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 22);
    });
    document.getElementById('peAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 22);
    });
    document.getElementById('peAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 22);
    });
    document.getElementById('peAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 22);
    });
    document.getElementById('peAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 22);
    });
    document.getElementById('peAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 22);
    });
    document.getElementById('peAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 22);
    });
    document.getElementById('peAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 22);
    });
    document.getElementById('arAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 23);
    });
    document.getElementById('arAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 23);
    });
    document.getElementById('arAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 23);
    });
    document.getElementById('arAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 23);
    });
    document.getElementById('arAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 23);
    });
    document.getElementById('arAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 23);
    });
    document.getElementById('arAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 23);
    });
    document.getElementById('arAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 23);
    });
    document.getElementById('arAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 23);
    });
    document.getElementById('coAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 24);
    });
    document.getElementById('coAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 24);
    });
    document.getElementById('coAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 24);
    });
    document.getElementById('coAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 24);
    });
    document.getElementById('coAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 24);
    });
    document.getElementById('coAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 24);
    });
    document.getElementById('coAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 24);
    });
    document.getElementById('coAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 24);
    });
    document.getElementById('coAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 25);
    });
    document.getElementById('stAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 25);
    });
    document.getElementById('stAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 25);
    });
    document.getElementById('stAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 25);
    });
    document.getElementById('stAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 25);
    });
    document.getElementById('stAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 25);
    });
    document.getElementById('stAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 25);
    });
    document.getElementById('stAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 25);
    });
    document.getElementById('stAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 25);
    });
    document.getElementById('stAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 25);
    });
    document.getElementById('psAttr1').addEventListener('click', (event) =>{
        newPower(`Attr1`, 26);
    });
    document.getElementById('psAttr2').addEventListener('click', (event) =>{
        newPower(`Attr2`, 26);
    });
    document.getElementById('psAttr3').addEventListener('click', (event) =>{
        newPower(`Attr3`, 26);
    });
    document.getElementById('psAttr4').addEventListener('click', (event) =>{
        newPower(`Attr4`, 26);
    });
    document.getElementById('psAttr5').addEventListener('click', (event) =>{
        newPower(`Attr5`, 26);
    });
    document.getElementById('psAttr6').addEventListener('click', (event) =>{
        newPower(`Attr6`, 26);
    });
    document.getElementById('psAttr7').addEventListener('click', (event) =>{
        newPower(`Attr7`, 26);
    });
    document.getElementById('psAttr8').addEventListener('click', (event) =>{
        newPower(`Attr8`, 26);
    });
    document.getElementById('psAttr9').addEventListener('click', (event) =>{
        newPower(`Attr9`, 26);
    });
    /*
    let prefix;
    let count = 0;
    let myID = '';
    let attrString = '';
    for(let i=0; i<ListofMancys.length; i++){
        prefix = getmyID(i);
        for(let h=1; h<10; h++){
            myID = prefix + 'Attr' + parseInt(h);
            attrString = 'Attr' + parseInt(h);
            //console.log(myID);
            // console.log(prefix + 'Attr' + parseInt(h));
            count++;
            console.log('attrString: ' + attrString);
            console.log('myID: ' + myID + ' and i: '+ i);
            // document.getElementById(myID).addEventListener('click', function(){
            //     newPower(attrString, i);
            // });
        }
    }
    console.log('the count is: '+ count); */
});