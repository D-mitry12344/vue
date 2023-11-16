const btnsLists = document.querySelectorAll('#btn-lists');
const colorsLists = document.querySelectorAll('#color-lists');
btnsLists.forEach((item,i)=>{
	item.addEventListener('click',()=>{
		if(item.classList[1] !== 'active'){
			item.classList.add('active');
			colorsLists[i].classList.add('active');
		}else{
			item.classList.remove('active');
			colorsLists[i].classList.remove('active');
		}

	})
})
