// body 태그 안의 색상 객체 
let Body = {
        setBodyColor (color) {
            document.querySelector('body').style.backgroundColor = color
        },
        setColor (color) {
            document.querySelector('body').style.color = color
        },
    }
// a 태그 리스트 색상 개체 List
    let List = {

        setListColor (color) {
            let list = document.querySelectorAll('a');
            for (i=0; i<list.length; i++){
                list[i].style.color = color
            }
        },

        jsListColor (color) {
            let list = document.querySelectorAll('.jslist')
            console.log(list);
            // for (i = 0; i<list.length;i++){
            //     list[i].style.color=color;
            // }
            list.forEach(element=>element.style.color=color);
            list.forEach(element=>element.style.fontWeight='bold');
            list.forEach(element=>console.log(element.style));
        }
    }