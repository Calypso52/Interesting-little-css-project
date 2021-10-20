window.onload = function(){
    // 找到switch元素
    var swch = document.getElementById('switch');
    // 找到container元素
    var container = document.querySelector('.container');

    // 为switch绑定一个单击响应函数
    swch.onclick = function(){
        // 使用toggle方法
        // swch.classList.toggle('switched');
        // 但是为了给后期预留操作空间所以使用下面的方式
        if(swch.classList.contains('switched')){
            // 移除样式
            swch.classList.remove('switched');
            // 不选中时为慢
            container.classList.remove('slow');
        }else{
            // 增加样式
            swch.classList.add('switched');
            // 选中时为慢
            container.classList.add('slow');
        }   
    };
};