// 다크모드 기능 구현


var Body = {
    setColor:function (color){           // color
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){ // backgroundcolor
        document.querySelector('body').style.backgroundColor = color;
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');

    // 일반모드일 때 
    if(self.value === 'night') 
    {
        Body.setBackgroundColor('black');
        Body.setColor('antiquewhite');
        self.value = 'day';
    } 

    // 다크모드일 때
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        }
}