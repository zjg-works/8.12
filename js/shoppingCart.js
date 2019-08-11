function idName(id) {
    return document.getElementById(id);
}
function className(name) {
    return document.getElementsByClassName(name);
}













// 全选按钮
var check_all = idName("allcheck");

// 单个选中按钮
var checks = className("check");

// 单价
var new_prices = className("price");

// 加的按钮
var plus = className("plus");

// 减的按钮
var cut = className("cut");

// 单个商品数量的框
var nums = className("num");

// 商品总数的框
var sum = className("sum")[0];

// 商品总数的变量
var sums = 0;

// 合计总价
var total = className("total")[0];

// 页面内容
var content_c = idName('content-c');







//渲染页面
function xuanran() {
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += `<div class="commodity">
    <div class="del">X</div>
    <div class="check">
        <i class="icon iconfont icon-dui"></i>
    </div>
    <dl>
        <dt>
            <img src="./images/bike.png" alt="">
        </dt>
        <dd>
            <span class="name">${data[i].name}</span>
            <span class="referral">${data[i].referral} M</span>
            <div>
                <span class="price">&yen${data[i].price}</span>
                <div>
                    <button class="cut">-</button>
                    <span class="num">${data[i].num}</span>
                    <button class="plus">+</button>
                </div>
            </div>

        </dd>
    </dl>
</div>`
    };
    content_c.innerHTML = html;

}
xuanran();
// 加加减减
for (var i = 0; i < data.length; i++) {
    //初始化数量
    nums[i].innerHTML = data[i].num;
    //加加
    (function (ind) {
        plus[ind].addEventListener("click", function () {
            num = data[ind].num;
            num++;
            data[ind].num = num;
            nums[ind].innerHTML = num;
            count();
        })
    })(i);

    //减减
    (function (ind) {
        cut[ind].addEventListener("click", function () {
            num = data[ind].num;
            num--;
            if (num <= 1) {
                num = 1;
            }
            data[ind].num = num;
            nums[ind].innerHTML = num;
            count();
        })
    })(i);

    //单个选中状态
    (function (ind) {
        // 初始化选中状态
        if (data[ind].isChecked) {
            checks[ind].classList.add("checked");
        } else {
            checks[ind].classList.remove("checked");
        };

        // 点击选中按钮更改状态
        checks[ind].addEventListener('click', function () {
            checks[ind].classList.toggle('checked');
            if (checks[ind].classList.contains('checked')) {
                data[ind].isChecked = true;
            } else {
                data[ind].isChecked = false;
            };
            var bool = data.every(function (item) {
                return item.isChecked == true;
            });
            if (bool) {
                check_all.classList.add("checked");
            } else {
                check_all.classList.remove("checked");
            };
            count();
        });
    })(i);
};
//点击全选按钮
check_all.addEventListener('click', function () {
    check_all.classList.toggle('checked');
    for (var i = 0; i < checks.length; i++) {
        if (check_all.classList.contains('checked')) {
            checks[i].classList.add('checked');
            data[i].isChecked = true;
        } else {
            checks[i].classList.remove('checked');
            data[i].isChecked = false;
        };
    };
    count();
});

//计算总价
function count() {
    //单个商品数量的变量
    var num = 0;
    //声明总价的变量
    var totalPrice = 0;
    for (var i = 0; i < data.length; i++) {


        if (data[i].isChecked) {
            totalPrice += data[i].price * data[i].num;
            sums += data[i].num;
        }
    }
    total.innerHTML = `&yen${totalPrice}`
    sum.innerHTML = `(${sums})`;

};
count();

