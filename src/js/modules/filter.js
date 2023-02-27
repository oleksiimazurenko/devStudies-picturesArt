const filter = () =>{

    const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    btnAll = menu.querySelector('.all'),
    btnLovers = menu.querySelector('.lovers'),
    btnChef = menu.querySelector('.chef'),
    btnGirl = menu.querySelector('.girl'),
    btnGuy = menu.querySelector('.guy'),
    btnGrandmother = menu.querySelector('.grandmother'),
    btnGranddad = menu.querySelector('.granddad'),

    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    markGirl = wrapper.querySelectorAll('.girl'),
    markLovers = wrapper.querySelectorAll('.lovers'),
    markChef = wrapper.querySelectorAll('.chef'),
    markGuy = wrapper.querySelectorAll('.guy'),
    no = document.querySelector('.portfolio-no');

    const funcFilter = (markSelector, markPicture) =>{

        menu.addEventListener('click', (e)=>{
            const target = e.target;
            if(target.nodeName === 'LI' && target == markSelector){
                markAll.forEach(item => item.style.display = 'none');
                if(markPicture === no){
                    markPicture.style.display = 'block';
                }else{
                    no.style.display = 'none';
                    markPicture.forEach(item => item.style.display = 'block'); 
                }
            }
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');   

        });

    };

    funcFilter(btnAll, markAll);
    funcFilter(btnLovers, markLovers);
    funcFilter(btnChef, markChef);
    funcFilter(btnGirl, markGirl);
    funcFilter(btnGuy, markGuy);
    funcFilter(btnGrandmother, no);
    funcFilter(btnGranddad, no);

};

export default filter;