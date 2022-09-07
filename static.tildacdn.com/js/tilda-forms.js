
function t762_init(t){setTimeout(function(){t_prod__init(t)},500)}
function t_prod__init(t){$("#rec"+t).find(".js-product").each(function(){$(this).find(".js-product-option").length&&t_prod__initProduct(t,$(this))})}
function t_prod__initProduct(t,r){t_prod__initPrice(t,r),t_prod__addEvents__options(t,r),t_prod__updatePrice(t,r)}
function t_prod__initPrice(t,r){if((i=r.find(".js-product-price")).length);else{r.append("<div style='display:none;' class='js-product-price'></div>");var i=r.find(".js-product-price")}var d=i.html();if(void 0!==d&&""!=d){var e=t_prod__cleanPrice(d);i.attr("data-product-price-def",e),d=d.replace(/"/g,""),i.attr("data-product-price-def-str",d)}else i.attr("data-product-price-def","0")}
function t_prod__updatePrice(t,r){var i=0,d=0,e=(c=r.find(".js-product-price")).attr("data-product-price-def");if(e*=1,r.find(".js-product-option-variants").each(function(){var t=$(this).find("option:selected").attr("data-product-variant-price");if(void 0!==t&&""!=t){var r=t_prod__cleanPrice(t);-1<t.indexOf("+")?d+=r:e=r}}),0<(i+=e+d))c.html(t_prod__showPrice(t_prod__roundPrice(i)));else{var o=c.attr("data-product-price-def-str");c.html(o)}var i=0,d=0,e=(c=r.find(".js-product-price-old")).attr("data-product-price-def");if(e*=1,r.find(".js-product-option-variants").each(function(){var t=$(this).find("option:selected").attr("data-product-price-old");if(void 0!==t&&""!=t){var r=t_prod__cleanPrice(t);-1<t.indexOf("+")?d+=r:e=r}}),0<(i+=e+d))c.html(t_prod__showPrice(t_prod__roundPrice(i)));else{o=c.attr("data-product-price-def-str");c.html(o)}var i=0,d=0,e=(c=r.find(".js-product-id")).attr("data-product-price-def");if(e*=1,r.find(".js-product-option-variants").each(function(){var t=$(this).find("option:selected").attr("data-product-id");if(void 0!==t&&""!=t){var r=t_prod__cleanPrice(t);-1<t.indexOf("+")?d+=r:e=r}}),0<(i+=e+d))c.html(t_prod__showPrice(t_prod__roundPrice(i)));else{o=c.attr("data-product-price-def-str");c.html(o)}}

function t_prod__addEvents__options(t,r){var i=r.find(".js-product-option-variants");i.length&&i.change(function(){var r=$(this).closest(".js-product");t_prod__updatePrice(t,r)})}
function t_prod__cleanPrice(t){return void 0===t||""==t||0==t?t=0:(t=(t=t.replace(",",".")).replace(/[^0-9\.]/g,""),t=parseFloat(t).toFixed(2),isNaN(t)&&(t=0),t=parseFloat(t),(t*=1)<0&&(t=0)),t}
function t_prod__roundPrice(t){return void 0===t||""==t||0==t?t=0:(t=parseFloat(t).toFixed(2),t=parseFloat(t),(t*=1)<0&&(t=0)),t}
function t_prod__showPrice(t){return void 0===t||0==t||""==t?t="":(t=t.toString(),void 0!==window.tcart&&void 0!==window.tcart.currency_dec&&"00"==window.tcart.currency_dec&&(-1===t.indexOf(".")&&-1===t.indexOf(",")?t+=".00":1===t.substr(t.indexOf(".")+1).length&&(t+="0")),t=t.replace(/\B(?=(\d{3})+(?!\d))/g," "),t=void 0!==window.tcart&&void 0!==window.tcart.currency_sep&&"."==window.tcart.currency_sep?t.replace(",","."):t.replace(".",",")),t}

function t706_onSuccessCallback(t706_form){$(".t706__cartwin-products").slideUp(10,function(){});$(".t706__cartwin-bottom").slideUp(10,function(){});$(".t706 .t-form__inputsbox").slideUp(700,function(){});try{tcart__unlockScroll()}catch(e){}}

//******************** cart****************
function tcart__init(t,r){window.tcart__ymapApiKey=r;var o=$(".t706");if(void 0!==window.tcart_initted&&"yes"==window.tcart_initted&&o.length>1){return $(".t706__previewmode-infobox center").append('<div style="color:red;">Error: Two cart widgets on the page</div>'),void console.error("Error: Two cart widgets (block ST100) on the page. Remove a duplicate.")}var a=o.attr("data-cart-dontstore");void 0!==a&&"y"==a&&(window.tcart_dontstore="y"),void 0!==(a=o.attr("data-cart-oneproduct"))&&"y"==a&&(window.tcart_oneproduct="y"),void 0!==(a=o.attr("data-cart-maxstoredays"))&&""!=a&&a>=0&&(window.tcart_maxstoredays=a),void 0!==(a=o.attr("data-cart-sendevent-onadd"))&&"y"==a&&(window.tcart_sendevent_onadd="y"),window.tcart_initted="yes",tcart__drawBottomTotalAmount(),tcart__loadLocalObj(),tcart__reDrawCartIcon(),setTimeout(function(){tcart__addEvent__links()},500),setTimeout(function(){tcart__addEvent__links()},3e3),tcart__addEvents(),setTimeout(function(){tcart__addEvent__selectpayment()}),$("#rec"+t).attr("data-animationappear","off"),$("#rec"+t).css("opacity","1"),o.find(".t-input-group_dl").length?($(".t706__cartwin-prodamount-label").html(tcart__dict(2,"Subtotal")+":&nbsp;"),$(".t706__cartwin-totalamount-label").html(tcart__dict(3,"Total")+":&nbsp;")):($(".t706__cartwin-prodamount-label").html(tcart__dict(1,"Total")+":&nbsp;"),$(".t706__cartwin-totalamount-label").html(tcart__dict(1,"Total")+":&nbsp;")),""==$(".t706__cartwin-heading").html()&&$(".t706__cartwin-heading").html(tcart__dict(4,"Your order")+":"),"Submit"==$(".t706 .t-form__submit .t-submit").html()&&$(".t706 .t-form__submit .t-submit").html(tcart__dict(5,"Submit order")),o.find(".t-input-group_pm").length&&o.find(".t-input-group_pm").find(".t-input-title").html(tcart__dict(6,"Payment method")),$(".t-form__submit").on({mouseenter:function(){$(".t706__minimal").addClass("active")},mouseleave:function(){$(".t706__minimal").removeClass("active")}})}
function tcart__dict(t){var r=[];r[1]={EN:"Total",UK:"Сумма",FR:"Total",DE:"Gesamtsumme",ES:"Total",PT:"Total",RU:"Сума",JA:"合計",ZH:"总额。"},r[2]={EN:"Subtotal",UK:"Сумма",FR:"Sous-total",DE:"Zwischensumme",ES:"Subtotal",PT:"Subtotal",RU:"Сума",JA:"小計",ZH:"小计。"},r[3]={EN:"Total",UK:"Итоговая сумма",FR:"Total",DE:"Gesamtsumme",ES:"Total",PT:"Total",RU:"Підсумкова сума",JA:"合計",ZH:"总额。"},r[4]={EN:"Your order",UK:"Ваш заказ",FR:"Votre commande",DE:"Ihre Bestellung",ES:"Su pedido",PT:"Seu pedido",RU:"Ваше замовлення",JA:"注文済",ZH:"你的订货。"},r[5]={EN:"Submit order",UK:"Оформить заказ",FR:"Commander",DE:"Bestellung abschicken",ES:"Enviar pedido",PT:"Enviar pedido",RU:"Оформити замовлення",JA:"注文を確定",ZH:"办妥订货。"},r[6]={EN:"Payment method",UK:"Способ оплаты",FR:"Mode de paiement",DE:"Zahlungsmethode",ES:"Método de pago",PT:"Método de pagamento",RU:"Спосіб оплати",JA:"支払方法",ZH:"付款方式。"},r[7]={EN:"Click to order\t",UK:"Оформить заказать",FR:"Commander",DE:"Bestellung abschicken",ES:"Enviar pedido",PT:"Enviar pedido",RU:"Оформити замовлення",JA:"注文を確定",ZH:"提交订单。"},r[8]={EN:"Subtotal with discount",UK:"Сумма со скидкой",FR:"Sous-total avec remise",DE:"Zwischensumme mit Rabatt",ES:"Subtotal con descuento",PT:"Subtotal com desconto",RU:"Сума зі знижкою",JA:"割引後小計",ZH:"减价同小计。"},r[9]={EN:"Promo code",UK:"Промокод",FR:"Code promo",DE:"Aktionscode",ES:"Código promocional",PT:"Código promocional",RU:"Промокод",JA:"プロモコード",ZH:"促销代码。"},r[10]={EN:"Discount",UK:"Скидка",FR:"Remise",DE:"Rabatt",ES:"Descuento",PT:"Desconto",RU:"Знижка",JA:"割引",ZH:"减价。"},r[11]={EN:"Minimum order",UK:"Минимальный заказ",FR:"Commande minimale",DE:"Minimale Bestellung",ES:"Pedido mínimo",PT:"Pedido mínimo",RU:"Мінімальне замовлення",JA:"最小注文価格",ZH:"最小的订货。"},r[12]={EN:"Minimum order quantity",UK:"Минимальное количество в заказе",FR:"Quantité de commande minimale",DE:"Mindestbestellmenge",ES:"Cantidad mínima del pedido",PT:"Quantidade mínima por pedido",RU:"Мінімальна кількість у замовленні",JA:"最小注文数",ZH:"最小的总数。"},r[13]={EN:"Sorry, limit has been reached. This is the maximum quantity of goods in stock",UK:"Извините, достигнут лимит. Это максимально возможное количество товаров в наличии"},r[14]={EN:"free",UK:"бесплатно",FR:"gratuit",DE:"kostenlos",ES:"gratis",PT:"livre",RU:"безкоштовно",JA:"無料で",ZH:"免费"},r[15]={EN:"Street",UK:"Улица",RU:"Вулиця"},r[16]={EN:"House",UK:"Дом",RU:"Будинок"},r[17]={EN:"Entrance",UK:"Подъезд",RU:"Під’їзд"},r[18]={EN:"Floor",UK:"Этаж",RU:"Поверх"},r[19]={EN:"Apt/Office",UK:"Квартира/офис",RU:"Квартира/офіс"},r[20]={EN:"Phone",UK:"Телефон",RU:"Телефон"},r[21]={EN:"Entrance code",UK:"Домофон",RU:"Домофон"},r[22]={EN:"Comment",UK:"Комментарий",RU:"Коментар"},r[23]={EN:"City",UK:"Город",RU:"Місто"},r[24]={EN:"Select pickup location",UK:"Выберите пункт получения",RU:"Виберіть пункт отримання"},r[25]={EN:"day",UK:"дня",RU:"дні"},r[26]={EN:"days",UK:"дней",RU:"днів"},r[27]={EN:"from",UK:"от",RU:"від"},r[28]={EN:"rubles",UK:"рублей",RU:"рублів"},r[29]={EN:"Unfortunately, delivery to your chosen city is not possible",UK:"К сожалению, в выбранный вами город доставка не осуществляется",RU:"На жаль, в обране місто доставка не здійснюється"},r[30]={EN:"Delivery",UK:"Доставка",RU:"Доставка"},r[31]={EN:"Address",UK:"Адрес",RU:"Адреса"},r[32]={EN:"Cannot find address in database",UK:"Не удается найти адрес в базе",RU:"Неможливо знайти адресу в базі"},r[33]={EN:"Pickup location",UK:"Пункт получения",RU:"Пункт отримання"},r[34]={EN:"Please select an address from the options provided",UK:"Пожалуйста, выберите адрес из предложенных вариантов",RU:"Будь ласка, виберіть адресу із запропонованих варіантів"},r[35]={EN:"Please select an city from the options provided",UK:"Пожалуйста, выберите город из предложенных вариантов",RU:"Будь ласка, виберіть місто із запропонованих варіантів"},r[36]={EN:"Order comment",UK:"Комментарий к заказу",RU:"Коментар до замовлення"},r[37]={EN:"Select",UK:"Выбрать",RU:"Вибрати"},r[38]={EN:"Phones",UK:"Телефоны",RU:"Телефони"},r[39]={EN:"Phone",UK:"Телефон",RU:"Телефон"},r[40]={EN:"Working hours",UK:"Время работы",RU:"Час роботи"},r[41]={EN:"Delivery data for manager",UK:"Данные о доставке для менеджера",RU:"Деталі доставки для менеджера"},r[42]={EN:"Delivery service temporarily unavailable. Please, leave the delivery address in comments, the manager will contact you to confirm the order as soon as possible.",UK:'К сожалению, в данный момент сервис доставки недоступен. Пожалуйста, укажите адрес доставки в свободной форме в поле "Комментарий", менеджер магазина свяжется с Вами для оформления заказа в ближайшее время по предоставленным контактным данным.',RU:"Служба доставки тимчасово не працює. Будь ласка, залиште адресу доставки в коментарях, менеджер зв’яжеться з вами, щоб підтвердити замовлення якнайшвидше."},r[43]={EN:"Receiving delivery services",UK:"Получение сервисов доставки",RU:"Отримання сервісів доставки"},r[44]={EN:"Getting a list of points of issue of orders",UK:"Получение списка пунктов выдачи заказов",RU:"Отримання списку пунктів видачі замовлень"},r[45]={EN:"No results were found for your request",UK:"По Вашему запросу ничего не найдено",RU:"За вашим запитом нічого не знайдено"},r[46]={EN:"Change",UK:"Изменить",RU:"Змінити"},r[47]={EN:"Full name",UK:"Получатель (ФИО полностью)",RU:"Одержувач (ПІБ повністю)"},r[48]={EN:"Ivanov Ivan Ivanovich",UK:"Иванов Иван Иванович",RU:"Іванов Іван Іванович"};var o=window.browserLang;return void 0!==r[t]?void 0!==r[t][o]&&""!=r[t][o]?r[t][o]:r[t].EN:"Text not found #"+t}
function tcart__nullObj(){return{products:[],prodamount:0,amount:0,system:""}}
function tcart__loadLocalObj(){var t=null;if("object"==typeof localStorage)try{t=localStorage.getItem("tcart")}catch(t){console.error("Your web browser does not support storing a Cart data locally.")}if(window.tcart=null===t?tcart__nullObj():JSON.parse(t),void 0!==window.tcart_maxstoredays&&""!=window.tcart_maxstoredays){var r=window.tcart_maxstoredays;r>0?void 0!==window.tcart.updated&&window.tcart.updated>0&&(1*Math.floor(Date.now()/1e3)-1*window.tcart.updated>86400*r&&(window.tcart=tcart__nullObj())):"0"==r&&(window.tcart=tcart__nullObj())}else void 0!==window.tcart.updated&&window.tcart.updated>0&&(1*Math.floor(Date.now()/1e3)-1*window.tcart.updated>2592e3&&(window.tcart=tcart__nullObj()));void 0!==window.tcart_dontstore&&"y"==window.tcart_dontstore&&(window.tcart=tcart__nullObj()),delete window.tcart.currency,delete window.tcart.currency_txt,delete window.tcart.currency_txt_l,delete window.tcart.currency_txt_r,delete window.tcart.currency_side,delete window.tcart.currency_sep,delete window.tcart.currency_dec,window.tcart.currency="$",window.tcart.currency_side="l",window.tcart.currency_sep=".",window.tcart.currency_dec="",void 0!==window.tcart.delivery&&delete window.tcart.delivery,void 0!==window.tcart.promocode&&delete window.tcart.promocode;var o=$(".t706").attr("data-project-currency");void 0!==o&&""!=o&&(window.tcart.currency=o),window.tcart.currency_txt=window.tcart.currency,void 0!==(o=$(".t706").attr("data-project-currency-side"))&&"r"==o&&(window.tcart.currency_side="r"),"l"==window.tcart.currency_side?(window.tcart.currency_txt_l=window.tcart.currency_txt+"",window.tcart.currency_txt_r=""):(window.tcart.currency_txt_r="&nbsp;"+window.tcart.currency_txt,window.tcart.currency_txt_l=""),void 0===(o=$(".t706").attr("data-project-currency-sep"))||"."!=o&&","!=o?"$"==window.tcart.currency||"€"==window.tcart.currency||"USD"==window.tcart.currency||"EUR"==window.tcart.currency?window.tcart.currency_sep=".":window.tcart.currency_sep=",":window.tcart.currency_sep=o,o=$(".t706").attr("data-project-currency-dec"),window.tcart.currency_dec=void 0!==o&&"00"==o?o:"",delete window.tcart.system;var a=$(".t706").attr("data-payment-system");window.tcart.system=void 0!==a&&""!=a?a:"none";var i=$(".t706").attr("data-cart-minorder");void 0!==i&&""!=i&&i>0&&void 0===window.tcart_minorder&&(i*=1,window.tcart_minorder=i,$(".t706__cartwin-prodamount-wrap").prepend('<div class="t706__cartwin-prodamount-minorder t706__minimal"><span>'+tcart__dict(11,"Minimum order")+": "+tcart__showPrice(i)+"</span></div>"),$(".t706__cartwin-totalamount-wrap").prepend('<div class="t706__cartwin-prodamount-minorder t706__minimal"><span>'+tcart__dict(11,"Minimum order")+": "+tcart__showPrice(i)+"</span></div>"),$(".js-errorbox-all .t-form__errorbox-text").append('<p data-rule-filled="true" class="t-form__errorbox-item js-rule-error js-rule-error-minorder" style="display: none;">'+tcart__dict(11,"Minimum order")+": "+tcart__showPrice(i)+"</p>"));var e=$(".t706").attr("data-cart-mincntorder");void 0!==e&&""!=e&&e>0&&void 0===window.tcart_mincntorder&&(e*=1,window.tcart_mincntorder=e,$(".t706__cartwin-prodamount-wrap").prepend('<div class="t706__cartwin-prodamount-mincntorder t706__minimal"><span>'+tcart__dict(12,"Minimum quantity")+": "+e+"</span></div>"),$(".t706__cartwin-totalamount-wrap").prepend('<div class="t706__cartwin-prodamount-mincntorder t706__minimal"><span>'+tcart__dict(12,"Minimum quantity")+": "+e+"</span></div>"),$(".js-errorbox-all .t-form__errorbox-text").append('<p data-rule-filled="true"  class="t-form__errorbox-item js-rule-error js-rule-error-minquantity" style="display: none;">'+tcart__dict(12,"Minimum quantity")+": "+e+"</p>")),tcart__addDelivery(),tcart__updateTotalProductsinCartObj()}
function tcart__saveLocalObj(){if(!(void 0!==window.tcart_dontstore&&"y"==window.tcart_dontstore||void 0!==window.tcart_maxstoredays&&0==window.tcart_maxstoredays)){if("object"==typeof window.tcart){window.tcart.updated=Math.floor(Date.now()/1e3);var t=JSON.stringify(window.tcart);if("object"==typeof localStorage)try{localStorage.setItem("tcart",t)}catch(t){console.error("Your web browser does not support storing a Cart data locally.")}}window.tcart_newDeliveryActive&&window.tcart.amount&&window.tcart.total&&tcart__rerenderDeliveryServices()}}
function tcart__syncProductsObject__LStoObj(){if(!(void 0!==window.tcart_dontstore&&"y"==window.tcart_dontstore||void 0!==window.tcart_maxstoredays&&0==window.tcart_maxstoredays||"object"!=typeof localStorage))try{var t=localStorage.getItem("tcart"),r=JSON.parse(t);"object"==typeof r.products&&(window.tcart.products=r.products,tcart__updateTotalProductsinCartObj())}catch(t){}}
function tcart__addEvents(){$(".t706__carticon").click(function(){tcart__openCart()}),$(".t706__cartwin-close").click(function(){tcart__closeCart()}),$(".t706__cartwin-closebtn").click(function(){tcart__closeCart()}),$(".t706").find(".js-form-proccess").attr("data-formcart","y"),$(".t706__cartwin").mousedown(function(t){if(t.target==this){var r=$(window).width()-17;if(t.clientX>r)return;tcart__closeCart()}})}
function tcart__addEvent__links(){$('[href^="#order"]').not("[data-link-event-setted]").on("click",function(t){t.preventDefault();var r=$(this),o=r.closest("form");if(o.length){var a=window.tildaForm.validate(o);if(window.tildaForm.showErrors(o,a))return!1}if(r.attr("data-link-event-setted","yes"),void 0===r.attr("data-dbclk-prevent")||"yes"!=r.attr("data-dbclk-prevent")){r.attr("data-dbclk-prevent","yes"),setTimeout(function(){r.removeAttr("data-dbclk-prevent")},1e3),$("body").hasClass("t-body_popupshowed")&&($("body").removeClass("t-body_popupshowed"),$(".t-popup").removeClass("t-popup_show"),setTimeout(function(){$(".t-popup").not(".t-popup_show").css("display","none")},300),tcart__clearProdUrl());var i=r.attr("href"),e="0",c="",n="",d="",s="",_="",u="",l="",p="",w="",m="",v="",f="";if("#order:"==i.substring(0,7)){var y=i.substring(7);if(void 0!==y&&""!=y){if(y.indexOf(":::")>0){var h=y.indexOf(":::");if(y.indexOf("=")>0&&y.indexOf("=")<y.indexOf(":::")){var b=y.substring(h+3);y=y.substring(0,h)}}if(y.indexOf("=")>0){var g=y.split("=");void 0!==g[0]&&(c=g[0]),void 0!==g[1]&&(e=g[1]),e=tcart__cleanPrice(e)}else c=y;void 0!==b&&""!=b&&b.indexOf("=")>0&&void 0!==(g=b.split("="))[0]&&void 0!==g[1]&&""!=g[0]&&""!=g[1]&&"image"==g[0]&&g[1].indexOf("tildacdn.com")>0&&(n=g[1]),""==u&&(void 0===(u=r.closest(".r").attr("id").replace("rec",""))&&(u=""))}}var k=$(this).closest(".js-product");if(void 0!==k){if(""==c&&(void 0===(c=k.find(".js-product-name").text())&&(c="")),""!=e&&0!=e||(e=tcart__cleanPrice(e=k.find(".js-product-price").text())),""==n)if(void 0!==k.attr("data-product-img")&&""!=k.attr("data-product-img"))n=k.attr("data-product-img");else{var E=k.find(".js-product-img");if(void 0!==E&&(E.is("img")&&(n=E.attr("src")),E.is("div"))){n="";var U=E.css("background-image");void 0!==U&&""!=U&&(n=U.replace("url(","").replace(")","").replace(/\"/gi,""))}}""==s&&(void 0===(s=k.attr("data-product-lid"))&&(s="")),""==_&&(void 0===(_=k.attr("data-product-uid"))&&(_="")),""==u&&(void 0===(u=k.closest(".r").attr("id").replace("rec",""))&&(u="")),""==l&&(void 0===(l=k.attr("data-product-inv"))&&(l=""));var j=[];k.find(".js-product-edition-option").each(function(){var t=$(this),r=t.find(".js-product-edition-option-name").text(),o=t.find("option:selected").val(),a=t.find("option:selected").attr("data-product-edition-variant-price");if(a=tcart__cleanPrice(a),void 0!==r&&void 0!==o){var i={};""!=r&&(r=tcart__escapeHtml(r)),""!=o&&(o=(o=tcart__escapeHtml(o)).replace(/(?:\r\n|\r|\n)/g,"")),r.length>1&&":"==r.charAt(r.length-1)&&(r=r.substring(0,r.length-1)),i.option=r,i.variant=o,i.price=a,j.push(i)}}),k.find(".js-product-option").each(function(){var t=$(this),r=t.find(".js-product-option-name").text(),o=t.find("option:selected").val(),a=t.find("option:selected").attr("data-product-variant-price");if(a=tcart__cleanPrice(a),void 0!==r&&void 0!==o){var i={};""!=r&&(r=tcart__escapeHtml(r)),""!=o&&(o=(o=tcart__escapeHtml(o)).replace(/(?:\r\n|\r|\n)/g,"")),r.length>1&&":"==r.charAt(r.length-1)&&(r=r.substring(0,r.length-1)),i.option=r,i.variant=o,i.price=a,j.push(i)}}),""==d&&(void 0===(d=k.find(".js-product-sku").text())&&(d="")),""==p&&(void 0===(p=k.attr("data-product-pack-label"))&&(p="")),""==w&&(void 0===(w=k.attr("data-product-pack-m"))&&(w="")),""==m&&(void 0===(m=k.attr("data-product-pack-x"))&&(m="")),""==v&&(void 0===(v=k.attr("data-product-pack-y"))&&(v="")),""==f&&(void 0===(f=k.attr("data-product-pack-z"))&&(f=""))}var x=k.attr("data-product-url"),S=k.find('a[href="#order"]').not(".t-btn").length,P=k.find(".js-product-link").not('[href="#prodpopup"]').not('[href="#order"]').attr("href");if(void 0===x&&P?x=P:void 0===x&&u&&s&&!S?x=window.location.origin+window.location.pathname+"#!/tproduct/"+u+"-"+s:void 0===x&&(x=window.location.origin+window.location.pathname+"#rec"+u),""!=c||""!=e&&0!=e){""==c&&(c="NoName"),""==e&&(e=0),""!=c&&(c=tcart__escapeHtml(c)),""!=n&&(n=tcart__escapeHtmlImg(n));var T={};if(T.name=c,T.price=e,T.img=n,T.recid=u,T.lid=s,T.pack_label=p,T.pack_m=w,T.pack_x=m,T.pack_y=v,T.pack_z=f,T.url=x,void 0!==j&&j.length>0&&(T.options=j),void 0!==d&&""!=d&&(d=tcart__escapeHtml(d),T.sku=d),void 0!==_&&""!=_&&(T.uid=_),void 0!==s&&""!=s&&(T.lid=s),void 0!==l&&l>0&&(T.inv=parseInt(l,10)),tcart__addProduct(T),void 0!==window.tcart_sendevent_onadd&&"y"==window.tcart_sendevent_onadd)try{Tilda.sendEcommerceEvent("add",[T])}catch(t){if(window.Tilda&&"function"==typeof Tilda.sendEventToStatistics){var O="/tilda/cart/add/";u>0&&(O+=u),_&&_>0?O+="-u"+_:s&&s>0&&(O+="-"+s);var D=c,C=e;Tilda.sendEventToStatistics(O,D,window.location.href,C)}}}}})}

// function tcart__addProduct(t){var r=Math.floor(Date.now()/1e3);tcart__syncProductsObject__LStoObj();var o=window.tcart.products,a="";o.length>0&&$.each(o,function(o,i){if(void 0!==window.tcart_oneproduct&&"y"==window.tcart_oneproduct){if(i.name==t.name&&i.price==t.price){if(void 0===i.options&&void 0===t.options&&void 0===i.sku&&void 0===t.sku)return a="yes",!1;if(void 0===i.options&&void 0===t.options&&void 0!==i.sku&&void 0!==t.sku&&i.sku==t.sku)return a="yes",!1}}else if(i.name==t.name&&i.price==t.price){var e="y",c="";if("object"==typeof i.options&&"object"==typeof t.options&&$.each(i.options,function(r,o){if("object"==typeof o&&"object"==typeof t.options[r]){if(o.option!==t.options[r].option||o.variant!==t.options[r].variant||o.price!==t.options[r].price)return e=!1}else if(void 0===o||void 0===t.options[r])return e=!1}),(void 0===i.sku&&void 0===t.sku||i.sku==t.sku)&&(c="y"),"y"==e&&"y"==c)return window.tcart.products[o].quantity>0&&void 0!==t.inv&&t.inv>0&&window.tcart.products[o].quantity==t.inv?(alert(tcart__dict(13,"Sorry, limit reached, this is the maximum quantity of goods in stock")),a="yes",!1):(window.tcart.products[o].quantity++,window.tcart.products[o].amount=window.tcart.products[o].price*window.tcart.products[o].quantity,window.tcart.products[o].amount=tcart__roundPrice(window.tcart.products[o].amount),window.tcart.products[o].ts=r,a="yes",!1)}}),""==a&&(t.amount=t.price,t.quantity=1,t.ts=r,window.tcart.products.push(t)),tcart__updateTotalProductsinCartObj(),tcart__reDrawCartIcon(),tcart__saveLocalObj()?setTimeout(function(){tcart__openCart()},10):($(".t706__carticon").addClass("t706__carticon_neworder"),setTimeout(function(){$(".t706__carticon").removeClass("t706__carticon_neworder")},2e3))}
function tcart__addProduct(t){var r=Math.floor(Date.now()/1e3);tcart__syncProductsObject__LStoObj();var o=window.tcart.products,a="";o.length>0&&$.each(o,function(o,i){if(void 0!==window.tcart_oneproduct&&"y"==window.tcart_oneproduct){if(i.name==t.name&&i.price==t.price){if(void 0===i.options&&void 0===t.options&&void 0===i.sku&&void 0===t.sku)return a="yes",!1;if(void 0===i.options&&void 0===t.options&&void 0!==i.sku&&void 0!==t.sku&&i.sku==t.sku)return a="yes",!1}}else if(i.name==t.name&&i.price==t.price){var e="y",c="";if("object"==typeof i.options&&"object"==typeof t.options&&$.each(i.options,function(r,o){if("object"==typeof o&&"object"==typeof t.options[r]){if(o.option!==t.options[r].option||o.variant!==t.options[r].variant||o.price!==t.options[r].price)return e=!1}else if(void 0===o||void 0===t.options[r])return e=!1}),(void 0===i.sku&&void 0===t.sku||i.sku==t.sku)&&(c="y"),"y"==e&&"y"==c)return window.tcart.products[o].quantity>0&&void 0!==t.inv&&t.inv>0&&window.tcart.products[o].quantity==t.inv?(alert(tcart__dict(13,"Sorry, limit reached, this is the maximum quantity of goods in stock")),a="yes",!1):(window.tcart.products[o].quantity++,window.tcart.products[o].amount=window.tcart.products[o].price*window.tcart.products[o].quantity,window.tcart.products[o].amount=tcart__roundPrice(window.tcart.products[o].amount),window.tcart.products[o].ts=r,a="yes",!1)}}),""==a&&(t.amount=t.price,t.quantity=1,t.ts=r,window.tcart.products.push(t)),tcart__updateTotalProductsinCartObj(),tcart__reDrawCartIcon(),tcart__saveLocalObj(),"yes"==$(".t706").attr("data-opencart-onorder")?setTimeout(function(){tcart__openCart()},10):($(".t706__carticon").addClass("t706__carticon_neworder"),setTimeout(function(){$(".t706__carticon").removeClass("t706__carticon_neworder")},2e3))}
function tcart__updateTotalProductsinCartObj(){var t=window.tcart.products;if(t.length>0){var r=0,o=0;$.each(t,function(t,a){r+=1*a.quantity,o=1*o+1*a.amount}),o=tcart__roundPrice(o),window.tcart.total=r,window.tcart.prodamount=o;var a=o;if("object"==typeof window.tcart.promocode&&void 0!==window.tcart.promocode.promocode&&""!=window.tcart.promocode.promocode){var i=0;void 0!==window.tcart.promocode.discountsum&&window.tcart.promocode.discountsum>0?i=1*window.tcart.promocode.discountsum:void 0!==window.tcart.promocode.discountpercent&&window.tcart.promocode.discountpercent>0?i=tcart__roundPrice(a*window.tcart.promocode.discountpercent*1/100):console.error("Cart Some error."),(a=tcart__roundPrice(a-=i))<0&&(a=0),window.tcart.prodamount_discountsum=i,window.tcart.prodamount_withdiscount=a}"object"==typeof window.tcart.delivery&&void 0!==window.tcart.delivery.price&&window.tcart.delivery.price>0&&window.tcart.prodamount>0&&(void 0!==window.tcart.delivery.freedl&&window.tcart.delivery.freedl>0&&a>=window.tcart.delivery.freedl||(a+=1*window.tcart.delivery.price)),a>0&&(a=tcart__roundPrice(a)),window.tcart.amount=a}else window.tcart.total=0,window.tcart.prodamount=0,window.tcart.amount=0}
function tcart__reDrawCartIcon(){var t=window.tcart,r=$(".t706__carticon");1==t.total&&(r.css("opacity",0),r.animate({opacity:1},300)),t.total>0?(r.addClass("t706__carticon_showed"),r.find(".t706__carticon-counter").html(t.total)):(r.removeClass("t706__carticon_showed"),r.find(".t706__carticon-counter").html("")),$(".t706__carticon-text").html("=&nbsp;"+tcart__showPrice(window.tcart.prodamount))}
function tcart__openCart(){$(".t706__carticon").removeClass("t706__carticon_showed"),$("body").addClass("t706__body_cartwinshowed"),setTimeout(function(){tcart__lockScroll()},500),tcart__syncProductsObject__LStoObj();var t=$(".t706__cartwin");if(t.css("opacity",0),t.addClass("t706__cartwin_showed"),t.animate({opacity:1},300),tcart__reDrawProducts(),tcart__reDrawTotal(),$(document).keyup(tcart__keyUpFunc),"y"==window.lazy)try{t_lazyload_update()}catch(t){console.error("js lazyload not loaded")}$(".t706 .t-form .t-radio__wrapper-delivery").each(function(t,r){"y"!==$(r).attr("data-delivery-services")||window.tcart_newDeliveryActive||("undefined"!=typeof tcart_newDelivery&&"function"==typeof tcart_newDelivery.init?tcart_newDelivery.init(window.tcart__ymapApiKey):(jQuery.cachedZoomScript||(jQuery.cachedZoomScript=function(t){var r={dataType:"script",cache:!0,url:t};return jQuery.ajax(r)}),$.cachedZoomScript("https://static.tildacdn.com/js/tilda-delivery-1.0.min.js").done(function(t,r){"success"==r?tcart_newDelivery.init(window.tcart__ymapApiKey):console.log("Upload script failed, error: "+r)})))})}
function tcart__reDrawProducts(){var t=$(".t706__cartwin-products"),r=window.tcart.products,o="";if(r.length>0&&$.each(r,function(t,r){""!=r.img&&(o="yes")}),r.length>0){var a="";$.each(r,function(t,r){a+='<div class="t706__product" data-cart-product-i="'+t+'">',"yes"==o&&(a+='<div class="t706__product-thumb"><div class="t706__product-imgdiv" style="background-image:url('+r.img+');"></div></div>'),a+='<div class="t706__product-title t-descr t-descr_sm">',r.url?a+='<a style="color: inherit" target="_blank" href="'+r.url+'">'+r.name+"</a>":a+=r.name,void 0!==r.options&&r.options.length>0&&(a+='<div style="opacity:0.7;font-size:12px;font-weight:400;">',$.each(r.options,function(t,r){a+="<div class='option-select_" + [t] + "'>"+r.option+": "+r.variant+"</div>"}),a+="</div>"),void 0!==r.sku&&""!=r.sku&&(a+='<div style="opacity:0.7;font-size:12px;font-weight:400;">',a+=r.sku,a+="</div>"),a+="</div>",void 0!==window.tcart_oneproduct&&"y"==window.tcart_oneproduct?a+='<div class="t706__product-plusminus t-descr t-descr_sm" style="display:none;"><span class="t706__product-quantity">'+r.quantity+"</span></div>":a+='<div class="t706__product-plusminus t-descr t-descr_sm"><span class="t706__product-minus"><img src="https://static.tildacdn.com/lib/linea/c8eecd27-9482-6c4f-7896-3eb09f6a1091/arrows_circle_minus.svg" style="width:16px;height:16px;border:0;"></span><span class="t706__product-quantity">'+r.quantity+'</span><span class="t706__product-plus"><img src="https://static.tildacdn.com/lib/linea/c47d1e0c-6880-dc39-ae34-521197f7fba7/arrows_circle_plus.svg" style="width:16px;height:16px;border:0;"></span></div>',a+='<div class="t706__product-amount t-descr t-descr_sm">',r.amount>0&&(a+=tcart__showPrice(r.amount)),a+="</div>",a+='<div class="t706__product-del"><img src="https://static.tildacdn.com/lib/linea/1bec3cd7-e9d1-2879-5880-19b597ef9f1a/arrows_circle_remove.svg" style="width:20px;height:20px;border:0;"></div>',a+="</div>"}),t.html(a),tcart__addEvents__forProducts()}else t.html("")}
function tcart__reDrawTotal(){$(".t706__cartwin-prodamount").html(tcart__showPrice(window.tcart.prodamount)),$(".t706__cartwin-totalamount").html(tcart__showPrice(window.tcart.amount));var t,r,o=$(".t706__cartwin-totalamount-info");o.html(""),"object"!=typeof window.tcart.promocode&&"object"!=typeof window.tcart.delivery||(o.css("display","block"),t='<span class="t706__cartwin-totalamount-info_label">'+tcart__dict(2,"Subtotal")+":</span>",r='<span class="t706__cartwin-totalamount-info_value">'+tcart__showPrice(window.tcart.prodamount)+"</span>",o.append(t+r+"<br>")),"object"==typeof window.tcart.promocode&&(t='<span class="t706__cartwin-totalamount-info_label">'+tcart__dict(9,"Promo code")+":</span>",r='<span class="t706__cartwin-totalamount-info_value">'+window.tcart.promocode.promocode+(void 0!==window.tcart.promocode.discountpercent?" "+window.tcart.promocode.discountpercent+"% ":"")+"</span>",o.append(t+r+"<br>"),t='<span class="t706__cartwin-totalamount-info_label">'+tcart__dict(10,"Discount")+":</span>",r='<span class="t706__cartwin-totalamount-info_value">'+tcart__showPrice(window.tcart.prodamount_discountsum)+"</span>",o.append(t+r+"<br>"),window.tcart.prodamount_withdiscount>0?(t='<span class="t706__cartwin-totalamount-info_label">'+tcart__dict(8,"Subtotal with discount")+":</span>",r='<span class="t706__cartwin-totalamount-info_value">'+tcart__showPrice(window.tcart.prodamount_withdiscount)+"</span>",o.append(t+r+"<br>")):(t='<span class="t706__cartwin-totalamount-info_label">'+tcart__dict(8,"Subtotal with discount")+":</span>",r='<span class="t706__cartwin-totalamount-info_value"> 0<br></span>',o.append(t+r))),"object"==typeof window.tcart.delivery&&void 0!==window.tcart.delivery.name&&void 0!==window.tcart.delivery.price&&(window.tcart.delivery.price>0||window.tcart.delivery["service-id"])&&(void 0!==window.tcart.delivery.freedl&&window.tcart.delivery.freedl>0&&window.tcart.prodamount>=window.tcart.delivery.freedl&&(window.tcart.prodamount_withdiscount>=window.tcart.delivery.freedl||void 0===window.tcart.prodamount_withdiscount)?(t='<span class="t706__cartwin-totalamount-info_label">'+window.tcart.delivery.name+":</span>",r='<span class="t706__cartwin-totalamount-info_value"> 0 ('+tcart__dict(14,"free")+")<br></span>",o.append(t+r)):window.tcart.delivery.price>0&&(t='<span class="t706__cartwin-totalamount-info_label">'+window.tcart.delivery.name+":</span>",r='<span class="t706__cartwin-totalamount-info_value">'+tcart__showPrice(window.tcart.delivery.price)+"</span>",o.append(t+r+"<br>"))),0==window.tcart.prodamount?$(".t706__cartwin-prodamount-wrap").css("display","none"):$(".t706__cartwin-prodamount-wrap").css("display","block"),tcart__changeSubmitStatus(),0==window.tcart.amount?$(".t706__cartwin-totalamount-wrap").css("display","none"):window.tcart.prodamount==window.tcart.amount?$(".t706__orderform").length&&$(".t706__orderform").height()>700?$(".t706__cartwin-totalamount-wrap").css("display","block"):$(".t706__cartwin-totalamount-wrap").css("display","none"):$(".t706__cartwin-totalamount-wrap").css("display","block"),void 0!==window.tcart.promocode&&($(".t706__cartwin-totalamount-wrap").css("display","block"),0==window.tcart.amount&&$(".t706__cartwin-totalamount").html("0")),void 0!==window.tcart.delivery&&void 0!==window.tcart.delivery.price&&window.tcart.delivery.price>0&&$(".t706__cartwin-totalamount-wrap").css("display","block"),$(".t706__carticon-text").html("=&nbsp;"+tcart__showPrice(window.tcart.prodamount))}
function tcart__changeSubmitStatus(){var t=window.tcart_newDeliveryActive,r=void 0!==window.tcart_minorder&&window.tcart_minorder>0,o=void 0!==window.tcart_mincntorder&&window.tcart_mincntorder>0;if(t&&window.tcart.emtpyDeliveryServices&&($(".t706 .t-form__submit button").addClass("t706__submit_disable"),$(".t706 .t-form__submit button").attr("disabled","disabled")),r&&o){if(r&&(window.tcart.prodamount>=window.tcart_minorder?$(".t706__cartwin-prodamount-minorder").css("display","none"):$(".t706__cartwin-prodamount-minorder").css("display","block")),o&&(window.tcart.total>=window.tcart_mincntorder?$(".t706__cartwin-prodamount-mincntorder").css("display","none"):$(".t706__cartwin-prodamount-mincntorder").css("display","block")),window.tcart.prodamount>=window.tcart_minorder&&window.tcart.total>=window.tcart_mincntorder){if(t&&window.tcart.emtpyDeliveryServices)return;$(".t706").find(".t-submit").removeClass("t706__submit_disable"),$(".t706 .t-form__submit button").attr("disabled",!1)}}else if(r||o){if(r)if(window.tcart.prodamount>=window.tcart_minorder){if(t&&window.tcart.emtpyDeliveryServices)return;$(".t706__cartwin-prodamount-minorder").css("display","none"),$(".t706").find(".t-submit").removeClass("t706__submit_disable"),$(".t706 .t-form__submit button").attr("disabled",!1)}else $(".t706__cartwin-prodamount-minorder").css("display","block");if(o)if(window.tcart.total>=window.tcart_mincntorder){if(t&&window.tcart.emtpyDeliveryServices)return;$(".t706__cartwin-prodamount-mincntorder").css("display","none"),$(".t706").find(".t-submit").removeClass("t706__submit_disable"),$(".t706 .t-form__submit button").attr("disabled",!1)}else $(".t706__cartwin-prodamount-mincntorder").css("display","block")}else t&&!window.tcart.emtpyDeliveryServices&&($(".t706").find(".t-submit").removeClass("t706__submit_disable"),$(".t706 .t-form__submit button").attr("disabled",!1))}
function tcart__addEvents__forProducts(){$(".t706__product-plus").click(function(){tcart__product__plus($(this))}),$(".t706__product-minus").click(function(){tcart__product__minus($(this))}),$(".t706__product-del").click(function(){tcart__product__del($(this))}),$(".t706__product-quantity").click(function(){tcart__product__editquantity($(this))})}
function tcart__closeCart(){$("body").removeClass("t706__body_cartwinshowed"),tcart__unlockScroll(),void 0!==window.tcart_dontstore&&"y"==window.tcart_dontstore&&("undefind"!=typeof window.tcart&&"undefind"!=typeof window.tcart.products&&(window.tcart.products=[]),tcart__updateTotalProductsinCartObj(),tcart__saveLocalObj(),$(".t706__carticon-counter").html(window.tcart.total),tcart__reDrawTotal(),tcart__reDrawProducts()),window.tcart.total>0&&$(".t706__carticon").addClass("t706__carticon_showed"),tcart__delZeroquantity_inCartObj(),$(document).unbind("keyup",tcart__keyUpFunc),$(".t706__carticon").removeClass("t706__carticon_neworder"),$(".t706__cartwin").animate({opacity:0},300),setTimeout(function(){$(".t706__cartwin").removeClass("t706__cartwin_showed"),$(".t706__cartwin").css("opacity","1")},300),void 0!==window.tcart_success&&"yes"==window.tcart_success&&location.reload()}
function tcart__keyUpFunc(t){27==t.keyCode&&tcart__closeCart()}
function tcart__product__plus(t){var r=t.closest(".t706__product"),o=r.attr("data-cart-product-i");window.tcart.products[o].quantity>0&&void 0!==window.tcart.products[o].inv&&window.tcart.products[o].inv>0&&window.tcart.products[o].inv==window.tcart.products[o].quantity?alert(tcart__dict(13,"Sorry, limit reached, this is the maximum quantity of goods in stock")):(window.tcart.products[o].quantity++,window.tcart.products[o].amount=window.tcart.products[o].price*window.tcart.products[o].quantity,window.tcart.products[o].amount=tcart__roundPrice(window.tcart.products[o].amount),r.find(".t706__product-quantity").html(window.tcart.products[o].quantity),window.tcart.products[o].amount>0?r.find(".t706__product-amount").html(tcart__showPrice(window.tcart.products[o].amount)):r.find(".t706__product-amount").html(""),tcart__updateTotalProductsinCartObj(),$(".t706__carticon-counter").html(window.tcart.total),tcart__reDrawTotal(),tcart__saveLocalObj())}
function tcart__product__minus(t){var r=t.closest(".t706__product"),o=r.attr("data-cart-product-i");window.tcart.products[o].quantity>0&&window.tcart.products[o].quantity--,window.tcart.products[o].amount=window.tcart.products[o].price*window.tcart.products[o].quantity,window.tcart.products[o].amount=tcart__roundPrice(window.tcart.products[o].amount),r.find(".t706__product-quantity").html(window.tcart.products[o].quantity),window.tcart.products[o].amount>0&&r.find(".t706__product-amount").html(tcart__showPrice(window.tcart.products[o].amount)),0==window.tcart.products[o].quantity&&tcart__product__del(t),tcart__updateTotalProductsinCartObj(),$(".t706__carticon-counter").html(window.tcart.total),tcart__reDrawTotal(),tcart__saveLocalObj()}
function tcart__product__del(t){var r=t.closest(".t706__product"),o=r.attr("data-cart-product-i");window.tcart.products.splice(o,1),r.remove(),tcart__updateTotalProductsinCartObj(),$(".t706__carticon-counter").html(window.tcart.total),tcart__reDrawTotal(),tcart__saveLocalObj(),tcart__reDrawProducts(),0==window.tcart.products.length&&tcart__closeCart()}
function tcart__product__editquantity(t){if(!t.find(".t706__product-quantity-inp").length){var r=t.closest(".t706__product"),o=r.attr("data-cart-product-i"),a=t.text(),i='<input type="text" name="tilda-tmp-cart-qnt" class="t706__product-quantity-inp" value="'+(0==a||a>0?parseInt(a,10):1)+'" style="width:30px;">';t.html(i),t.addClass("t706__product-quantity_editing");var e=t.find(".t706__product-quantity-inp");e.focus(function(){var t=this;setTimeout(function(){t.selectionStart=t.selectionEnd=1e4},0)}),e.focus(),e.focusout(function(){var a=e.val();a=parseInt(a,10),tcart__product__updateQuantity(t,r,o,a>0?a:1),t.text(window.tcart.products[o].quantity),t.removeClass("t706__product-quantity_editing")})}}
function tcart__product__updateQuantity(t,r,o,a){a>0?(void 0!==window.tcart.products[o].inv&&window.tcart.products[o].inv>0&&a>window.tcart.products[o].inv&&(alert(tcart__dict(13,"Sorry, limit reached, this is the maximum quantity of goods in stock")),a=window.tcart.products[o].inv),window.tcart.products[o].quantity=a,window.tcart.products[o].amount=window.tcart.products[o].price*window.tcart.products[o].quantity,window.tcart.products[o].amount=tcart__roundPrice(window.tcart.products[o].amount),r.find(".t706__product-quantity").html(window.tcart.products[o].quantity),window.tcart.products[o].amount>0?r.find(".t706__product-amount").html(tcart__showPrice(window.tcart.products[o].amount)):r.find(".t706__product-amount").html("")):tcart__product__del(t),tcart__updateTotalProductsinCartObj(),$(".t706__carticon-counter").html(window.tcart.total),tcart__reDrawTotal(),tcart__saveLocalObj(),0==a&&tcart__reDrawProducts()}
function tcart__delZeroquantity_inCartObj(){var t=window.tcart.products,r="";t.length>0&&$.each(t,function(t,o){void 0!==o&&0==o.quantity&&(window.tcart.products.splice(t,1),r="yes")}),"yes"==r&&tcart__saveLocalObj()}
function tcart__drawBottomTotalAmount(){var t="";t+='<div class="t706__cartwin-totalamount-wrap t-descr t-descr_xl">',t+='<div class="t706__cartwin-totalamount-info" style="margin-top: 10px; font-size:14px; font-weight:400;"></div>',t+='<span class="t706__cartwin-totalamount-label">'+tcart__dict(1,"Total")+":&nbsp;</span>",t+='<span class="t706__cartwin-totalamount"></span>',t+="</div>",$(".t706 .t-form__errorbox-middle").before(t)}
function tcart__addDelivery(){var t=$(".t706 .t-form .t-radio__wrapper-delivery");if(0!==t.length){var r=$(".t706 .t-form .t-radio__wrapper-delivery input:checked").val(),o=$(".t706 .t-form .t-radio__wrapper-delivery input:checked").attr("data-delivery-price"),a=$(".t706 .t-form .t-radio__wrapper-delivery .t-radio_delivery:checked").attr("data-service-id");if(void 0!==r&&void 0!==o&&""!=r){o=tcart__cleanPrice(o);var i=r.indexOf("=");i>0&&(r=(r=r.substring(0,i)).trim()),window.tcart.delivery={},window.tcart.delivery.name=r,window.tcart.delivery.price=o,a&&(window.tcart.delivery.service_id=a),window.tcart_newDeliveryActive&&window.tcart_newDelivery.deliveryState.freeDeliveryThreshold?window.tcart.delivery.freedl=window.tcart_newDelivery.deliveryState.freeDeliveryThreshold:void 0!==t.attr("data-delivery-free")&&t.attr("data-delivery-free")>0&&(window.tcart.delivery.freedl=parseInt(t.attr("data-delivery-free")))}var e=$(".t706 .t-form .t-radio__wrapper-delivery input");e.length&&e.change(function(){tcart__updateDelivery()})}}
function tcart__updateDelivery(){var t=$(".t706 .t-form .t-radio__wrapper-delivery input:checked").val(),r=$(".t706 .t-form .t-radio__wrapper-delivery input:checked").attr("data-delivery-price");if(void 0!==t&&void 0!==r){if(r=tcart__cleanPrice(r),""!=t){var o=t.indexOf("=");o>0&&(t=(t=t.substring(0,o)).trim())}if(window.tcart.delivery={},window.tcart.delivery.name=t,window.tcart.delivery.price=r,window.tcart_newDeliveryActive&&window.tcart_newDelivery.deliveryState.freeDeliveryThreshold)window.tcart.delivery.freedl=window.tcart_newDelivery.deliveryState.freeDeliveryThreshold;else{var a=$(".t706 .t-form .t-radio__wrapper-delivery");void 0!==a.attr("data-delivery-free")&&a.attr("data-delivery-free")>0&&(window.tcart.delivery.freedl=parseInt(a.attr("data-delivery-free")))}}else void 0!==window.tcart.delivery&&delete window.tcart.delivery;$(".t706 #customdelivery").length&&(tcart_newDelivery.fillTcartDelivery(),tcart_newDelivery.setFullAddress(tcart_newDelivery.getFullAddress())),tcart__updateTotalProductsinCartObj(),tcart__reDrawTotal()}
function tcart__addPromocode(t){"object"!=typeof window.tcart.promocode?("object"==typeof t&&void 0!==t.promocode&&""!=t.promocode&&(t.discountsum>0||t.discountpercent>0)&&(window.tcart.promocode=t),tcart__updateTotalProductsinCartObj(),tcart__reDrawTotal()):console.error("Error. Promocode already activated before")}
function tcart__addEvent__selectpayment(){if(0!=$(".t706").find(".t-input-group_pm").length){var t=$(".t706 .t-form .t-radio__wrapper-payment input");t.length&&(t.change(function(){var t=$(".t706 .t-form .t-radio__wrapper-payment input:checked").attr("data-payment-variant-system");void 0!==t&&""!=t||(t=""),$(".t706").attr("data-payment-variant-system",t),window.tcart.system=t}),$(".t706 .t-form .t-radio__wrapper-payment input:checked").trigger("change"))}}
function tcart__escapeHtml(t){var r={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return t.replace(/[<>"']/g,function(t){return r[t]})}
function tcart__escapeHtmlImg(t){var r={"<":"&lt;",">":"&gt;",'"':"&quot;"};return t.replace(/[<>"]/g,function(t){return r[t]})}
function tcart__cleanPrice(t){return void 0===t||""==t||0==t?t=0:(t=(t=t.replace(",",".")).replace(/[^0-9\.]/g,""),t=parseFloat(t).toFixed(2),isNaN(t)&&(t=0),t=parseFloat(t),(t*=1)<0&&(t=0)),t}
function tcart__roundPrice(t){return void 0===t||""==t||0==t?t=0:(t=parseFloat(t).toFixed(2),t=parseFloat(t),(t*=1)<0&&(t=0)),t}
function tcart__showPrice(t){if(void 0===t||0==t||""==t)t="";else{if(t=t.toString(),void 0!==window.tcart.currency_dec&&"00"==window.tcart.currency_dec)if(-1===t.indexOf(".")&&-1===t.indexOf(","))t+=".00";else{1===t.substr(t.indexOf(".")+1).length&&(t+="0")}t=t.replace(/\B(?=(\d{3})+(?!\d))/g," "),void 0!==window.tcart.currency_sep&&","==window.tcart.currency_sep&&(t=t.replace(".",",")),t=window.tcart.currency_txt_l+t+window.tcart.currency_txt_r}return t}
function tcart__lockScroll(){if(window.isiOS&&!window.MSStream&&""!==window.isiOSVersion&&void 0!==window.isiOSVersion&&11===window.isiOSVersion[0]){var t=$("body");if(!t.hasClass("t-body_scroll-locked")){var r=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;t.addClass("t-body_scroll-locked"),t.css("top","-"+r+"px"),t.attr("data-popup-scrolltop",r)}}}
function tcart__unlockScroll(){if(window.isiOS&&!window.MSStream&&""!==window.isiOSVersion&&void 0!==window.isiOSVersion&&11===window.isiOSVersion[0]){var t=$("body");if(t.hasClass("t-body_scroll-locked")){var r=$("body").attr("data-popup-scrolltop");t.removeClass("t-body_scroll-locked"),t.css("top",""),t.removeAttr("data-popup-scrolltop"),window.scrollTo(0,r)}}}
function tcart__clearProdUrl(){try{var t=window.location.href;if(r=t.indexOf("#!/tproduct/"),window.isiOS&&r<0&&((r=t.indexOf("%23!/tproduct/"))<0&&(r=t.indexOf("#%21%2Ftproduct%2F"))),r<0){var r=t.indexOf("/tproduct/");r<0&&(r=t.indexOf("%2Ftproduct%2F"))}if(r<0)return;t=t.substring(0,r),void 0!==history.replaceState&&window.history.replaceState("","",t)}catch(t){}}
//******************** forms****************
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else{if(typeof exports==='object'){factory(require('jquery'))}else{factory(jQuery)}}}(function($){var ua=navigator.userAgent,iPhone=/iphone/i.test(ua),chrome=/chrome/i.test(ua),android=/android/i.test(ua),caretTimeoutId;$.mask={definitions:{'9':"[0-9]",'a':"[A-Za-z]",'Р°':"[Рђ-РЇР°-СЏРЃС‘]",'*':"[A-Za-zРђ-РЇР°-СЏРЃС‘0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:'_'};$.fn.extend({caret:function(begin,end){var range;if(this.length===0||this.is(":hidden")||this.get(0)!==document.activeElement){return}
if(typeof begin=='number'){end=(typeof end==='number')?end:begin;return this.each(function(){if(this.setSelectionRange){this.setSelectionRange(begin,end)}else{if(this.createTextRange){range=this.createTextRange();range.collapse(!0);range.moveEnd('character',end);range.moveStart('character',begin);range.select()}}})}else{if(this[0].setSelectionRange){begin=this[0].selectionStart;end=this[0].selectionEnd}else{if(document.selection&&document.selection.createRange){range=document.selection.createRange();begin=0-range.duplicate().moveStart('character',-100000);end=begin+range.text.length}}
return{begin:begin,end:end}}},unmask:function(){return this.trigger("unmask")},mask:function(mask,settings){var input,defs,tests,partialPosition,firstNonMaskPos,lastRequiredNonMaskPos,len,oldVal;if(!mask&&this.length>0){input=$(this[0]);var fn=input.data($.mask.dataName)
return fn?fn():undefined}
settings=$.extend({autoclear:$.mask.autoclear,placeholder:$.mask.placeholder,completed:null},settings);defs=$.mask.definitions;tests=[];partialPosition=len=mask.length;firstNonMaskPos=null;mask=String(mask);$.each(mask.split(""),function(i,c){if(c=='?'){len--;partialPosition=i}else{if(defs[c]){tests.push(new RegExp(defs[c]));if(firstNonMaskPos===null){firstNonMaskPos=tests.length-1}
if(i<partialPosition){lastRequiredNonMaskPos=tests.length-1}}else{tests.push(null)}}});return this.trigger("unmask").each(function(){var input=$(this),buffer=$.map(mask.split(""),function(c,i){if(c!='?'){return defs[c]?getPlaceholder(i):c}}),defaultBuffer=buffer.join(''),focusText=input.val();function tryFireCompleted(){if(!settings.completed){return}
for(var i=firstNonMaskPos;i<=lastRequiredNonMaskPos;i++){if(tests[i]&&buffer[i]===getPlaceholder(i)){return}}
settings.completed.call(input)}
function getPlaceholder(i){if(i<settings.placeholder.length){return settings.placeholder.charAt(i)}
return settings.placeholder.charAt(0)}
function seekNext(pos){while(++pos<len&&!tests[pos]);return pos}
function seekPrev(pos){while(--pos>=0&&!tests[pos]);return pos}
function shiftL(begin,end){var i,j;if(begin<0){return}
for(i=begin,j=seekNext(end);i<len;i++){if(tests[i]){if(j<len&&tests[i].test(buffer[j])){buffer[i]=buffer[j];buffer[j]=getPlaceholder(j)}else{break}
j=seekNext(j)}}
writeBuffer();input.caret(Math.max(firstNonMaskPos,begin))}
function shiftR(pos){var i,c,j,t;for(i=pos,c=getPlaceholder(pos);i<len;i++){if(tests[i]){j=seekNext(i);t=buffer[i];buffer[i]=c;if(j<len&&tests[j].test(t)){c=t}else{break}}}}
function androidInputEvent(e){var curVal=input.val();var pos=input.caret();var proxy=function(){$.proxy($.fn.caret,input,pos.begin,pos.begin)()};if(oldVal&&oldVal.length&&oldVal.length>curVal.length){var nextPos=checkVal(!0);var curPos=pos.end;while(curPos>0&&!tests[curPos-1]){curPos--}
if(curPos===0){curPos=nextPos}
pos.begin=curPos;setTimeout(function(){proxy();tryFireCompleted()},0)}else{pos.begin=checkVal(!0);setTimeout(function(){proxy();tryFireCompleted()},0)}}
function blurEvent(e){checkVal();if(input.val()!=focusText){input.change()}}
function keydownEvent(e){if(input.prop("readonly")){return}
var k=e.which||e.keyCode,pos,begin,end;oldVal=input.val();if(k===8||k===46||(iPhone&&k===127)){pos=input.caret();begin=pos.begin;end=pos.end;if(end-begin===0){begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));end=k===46?seekNext(end):end}
clearBuffer(begin,end);shiftL(begin,end-1);e.preventDefault()}else{if(k===13){blurEvent.call(this,e)}else{if(k===27){input.val(focusText);input.caret(0,checkVal());e.preventDefault()}}}}
function keypressEvent(e){if(input.prop("readonly")){return}
var k=e.which||e.keyCode,pos=input.caret(),p,c,next;if(e.ctrlKey||e.altKey||e.metaKey||k<32){return}else{if(k&&k!==13){if(pos.end-pos.begin!==0){clearBuffer(pos.begin,pos.end);shiftL(pos.begin,pos.end-1)}
p=seekNext(pos.begin-1);if(p<len){c=String.fromCharCode(k);if(tests[p].test(c)){shiftR(p);buffer[p]=c;writeBuffer();next=seekNext(p);if(android){var proxy=function(){$.proxy($.fn.caret,input,next)()};setTimeout(proxy,0)}else{input.caret(next)}
if(pos.begin<=lastRequiredNonMaskPos){tryFireCompleted()}}}
e.preventDefault()}}}
function clearBuffer(start,end){var i;for(i=start;i<end&&i<len;i++){if(tests[i]){buffer[i]=getPlaceholder(i)}}}
function writeBuffer(){input.val(buffer.join(''))}
function checkVal(allow){var test=input.val(),lastMatch=-1,i,c,pos;for(i=0,pos=0;i<len;i++){if(tests[i]){buffer[i]=getPlaceholder(i);while(pos++<test.length){c=test.charAt(pos-1);if(tests[i].test(c)){buffer[i]=c;lastMatch=i;break}}
if(pos>test.length){clearBuffer(i+1,len);break}}else{if(buffer[i]===test.charAt(pos)){pos++}
if(i<partialPosition){lastMatch=i}}}
if(allow){writeBuffer()}else{if(lastMatch+1<partialPosition){if(settings.autoclear||buffer.join('')===defaultBuffer){if(input.val())input.val("");clearBuffer(0,len)}else{writeBuffer()}}else{writeBuffer();input.val(input.val().substring(0,lastMatch+1))}}
return(partialPosition?i:firstNonMaskPos)}
input.data($.mask.dataName,function(){return $.map(buffer,function(c,i){return tests[i]&&c!=getPlaceholder(i)?c:null}).join('')});input.one("unmask",function(){input.off(".mask").removeData($.mask.dataName)}).on("focus.mask",function(){if(input.prop("readonly")){return}
clearTimeout(caretTimeoutId);var pos;focusText=input.val();pos=checkVal();caretTimeoutId=setTimeout(function(){if(input.get(0)!==document.activeElement){return}
writeBuffer();if(pos==mask.replace("?","").length){input.caret(0,pos)}else{input.caret(pos)}},10)}).on("blur.mask",blurEvent).on("keydown.mask",keydownEvent).on("keypress.mask",keypressEvent).on("input.mask paste.mask",function(){if(input.prop("readonly")){return}
setTimeout(function(){var pos=checkVal(!0);input.caret(pos);tryFireCompleted()},0)});if(chrome&&android)
{input.off('input.mask').on('input.mask',androidInputEvent)}
checkVal()})}})}));
(function($) {
	window.rainbowForm = {
		versionLib: '01.001',
		isRecaptchaScriptInit: !1,
		currentFormProccessing: !1,
		arMessages: {
			'RU': {
				'success': 'Спасибо! Данные успешно отправлены.',
				'successorder': 'Спасибо! Заказ оформлен. Пожалуйста, подождите. Идет переход к оплате....'
			}
		},
		arValidateErrors: {
			'RU': {
				'email': 'Укажите, пожалуйста, корректный email',
				'url': 'Укажите, пожалуйста, корректный URL',
				'phone': 'Укажите, пожалуйста, корректный номер телефона',
				'number': 'Укажите, пожалуйста, корректный номер',
				'date': 'Укажите, пожалуйста, корректную дату',
				'time': 'Укажите, пожалуйста, корректное время (ЧЧ:ММ)',
				'name': 'Укажите, пожалуйста, имя',
				'namerus': 'Укажите, пожалуйста, имя (только кириллица)',
				'nameeng': 'Укажите, пожалуйста, имя (только латиница)',
				'string': 'Вы написали некорректные символы. Разрешены только буквы, числа и знаки пунктуации',
				'req': 'Пожалуйста, заполните все обязательные поля',
				'reqfield': 'Обязательное поле',
				'emptyfill': 'Ни одно поле не заполнено'
			}
		}
	};
	$(document).ready(function() {
		window.rainbowForm.validate = function($jform) {
			var arError = [];
			var isEmptyValue = !0;
			$jform.find('.js-tilda-rule').each(function() {
				var req = $(this).data('tilda-req') || 0;
				var rule = $(this).data('tilda-rule') || 'none',
					regExp, str, domainpart;
				var error = {};
				var val = $(this).val();
				var valnospace = '';
				error.obj = $(this);
				error.type = [];
				if (val && val.length > 0) {
					valnospace = val.replace(/\s/g, '');
					val = val.trim()
				}
				if (val.length > 0) {
					isEmptyValue = !1
				}
				if (req == 1 && ((val.length == 0 && valnospace.length == 0) || (($(this).attr('type') == 'checkbox' || $(this).attr('type') == 'radio') && $(this).closest('form').find('[name="' + $(this).attr('name') + '"]:checked').length == 0))) {
					error.type.push('req')
				} else {
					switch (rule) {
						case 'email':
							regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
							if (val.length > 0 && !val.match(regExp)) {
								error.type.push('email')
							}
							break;
						case 'url':
							regExp = /^((https?|ftp):\/\/)?[a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9][a-zA-Zёа-яЁА-ЯЁёäöüÄÖÜßèéûşç0-9\.\-]{0,253}\.[a-zA-Zёа-яЁА-Я]{2,10}\/?$/;
							if (val.length > 0) {
								str = val.split('//');
								if (str && str.length > 1) {
									str = str[1]
								} else {
									str = str[0]
								}
								str = str.split('/');
								if (str && str.length > 0 && str[0] > '') {
									str = str[0];
									if (!str.match(regExp)) {
										error.type.push('url')
									}
								} else {
									if (!str || str[0] == '') {
										error.type.push('url')
									}
									str = ''
								}
							}
							break;
						case 'phone':
							regExp = /^[0-9\(\)\-\+]+$/gi;
							if (valnospace.length > 0 && !valnospace.match(regExp)) {
								error.type.push('phone')
							} else {
								str = valnospace.replace(/[^0-9]+/g, '');
								if (str.indexOf('000') == 1 || str.indexOf('111') == 1 || str.indexOf('222') == 1 || str.indexOf('333') == 1 || str.indexOf('444') == 1 || (str.indexOf('555') == 1 && str.substring(0, 1) != '0') || str.indexOf('666') == 1 || (str.indexOf('8888') == 1 && str.substring(0, 1) != '4')) {
									error.type.push('phone')
								}
							}
							break;
						case 'number':
							regExp = /^[0-9]+$/gi;
							if (valnospace.length > 0 && !valnospace.match(regExp)) {
								error.type.push('number')
							}
							break;
						case 'date':
							regExp = /^[0-9]{1,4}[\-\.\/][0-9]{1,2}[\-\.\/][0-9]{1,4}$/gi;
							if (valnospace.length > 0 && !valnospace.match(regExp)) {
								error.type.push('date')
							}
							break;
						case 'time':
							regExp = /^[0-9]{2}[:\.][0-9]{2}$/gi;
							if (valnospace.length > 0 && !valnospace.match(regExp)) {
								error.type.push('time')
							}
							break;
						case 'name':
							regExp = /^([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\u0041-\u007A\u00C0-\u02B8\uFB1D-\uFB1F\uFB2A-\uFB4E]{1,})([ЁёäöüÄÖÜßèéûҐґЄєІіЇїӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶA-Za-z\u0041-\u007A\u00C0-\u02B8\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\uFB1D-\uFB1F\uFB2A-\uFB4E\-\'\s\.]{0,})$/gi;
							if (val.length > 0 && !val.match(regExp)) {
								error.type.push('name')
							}
							break;
						case 'nameeng':
							regExp = /^([A-Za-z\s]{1,}((\-)?[A-Za-z\.\s](\')?){0,})*$/i;
							if (val.length > 0 && !val.match(regExp)) {
								error.type.push('nameeng')
							}
							break;
						case 'namerus':
							regExp = /^([А-Яа-яЁё\s]{1,}((\-)?[А-Яа-яЁё\.\s](\')?){0,})*$/i;
							if (val.length > 0 && !val.match(regExp)) {
								error.type.push('namerus')
							}
							break;
						case 'string':
							regExp = /^[A-Za-zА-Яа-я0-9ЁёЁёäöüÄÖÜßèéûӐӑЙйК̆к̆Ӄ̆ӄ̆Ԛ̆ԛ̆Г̆г̆Ҕ̆ҕ̆ӖӗѢ̆ѣ̆ӁӂꚄ̆ꚅ̆ҊҋО̆о̆Ө̆ө̆Ꚍ̆ꚍ̆ЎўХ̆х̆Џ̆џ̆Ꚏ̆ꚏ̆Ꚇ̆ꚇ̆Ҽ̆ҽ̆Ш̆ш̆Ꚗ̆ꚗ̆Щ̆щ̆Ы̆ы̆Э̆э̆Ю̆ю̆Я̆я̆А́а́ЃѓД́д́Е́е́Ё́ёӘ́ә́З́з́И́и́І́і́Ї́ї́ЌќЛ́л́Н́н́О́о́Р́р́С́с́Т́т́У́у́Ӱ́ӱ́Ү́ү́Х́х́Ц́ц́Ы́ы́Э́э́Ӭ́ӭ́Ю́ю́Ю̈́ю̈́Я́я́Ѣ́ѣ́ҒғӺӻҒ̌ғ̌Ј̵ј̵ҞҟҜҝԞԟӨөҎҏҰұӾӿҸҹҌҍҢңҚқҒғӘәҺһІіҰұҮүӨөȺⱥꜺꜻƂƃɃƀȻȼꞒꞓƋƌĐđɆɇǤǥꞠꞡĦħƗɨƗ́ɨ́Ɨ̀ɨ̀Ɨ̂ɨ̂Ɨ̌ɨ̌Ɨ̃ɨ̃Ɨ̄ɨ̄Ɨ̈ɨ̈Ɨ̋ɨ̋Ɨ̏ɨ̏Ɨ̧ɨ̧Ɨ̧̀ɨ̧̀Ɨ̧̂ɨ̧̂Ɨ̧̌ɨ̧̌ᵼɈɉɟɟ̟ʄʄ̊ʄ̥K̵k̵ꝀꝁꝂꝃꝄꝅꞢꞣŁłł̓Ł̣ł̣ᴌȽƚⱠⱡꝈꝉƛƛ̓ꞤꞥꝊꝋØøǾǿØ̀ø̀Ø̂øØ̌ø̌Ø̄ø̄Ø̃ø̃Ø̨ø̨Ø᷎ø᷎ᴓⱣᵽꝐꝑꝖꝗꝘꝙɌɍꞦꞧꞨꞩẜẝŦŧȾⱦᵺꝤꝥꝦꝧɄʉɄ́ʉ́Ʉ̀ʉ̀Ʉ̂ʉ̂Ʉ̌ʉ̌Ʉ̄ʉ̄Ʉ̃ʉ̃Ʉ̃́ʉ̃́Ʉ̈ʉ̈ʉ̞ᵾU̸u̸ᵿꝞꝟw̸ɎɏƵƶ\u0041-\u007A\u00C0-\u02B8\u0300-\u03FF\u0400-\u04FF\u0500-\u05FF\u0600-\u06FF\u3040-\u30FF\uFB1D-\uFB1F\uFB2A-\uFB4E,\.:;\"\'\`\-\_\+\?\!\%\$\@\*\&\^\s]$/i;
							if (val.length > 0 && !val.match(regExp)) {
								error.type.push('string')
							}
							break;
						default:
							break
					}
				}
				if (error.type && error.type.length > 0) {
					arError[arError.length] = error
				}
			});
			if (isEmptyValue && arError.length == 0) {
				arError = [{
					'obj': 'none',
					'type': ['emptyfill']
				}]
			}
			return arError
		};
		window.rainbowForm.hideErrors = function($jform) {
			$jform.find('.js-errorbox-all').hide();
			$jform.find('.js-rule-error').hide();
			$jform.find('.js-error-rule-all').html('');
			$jform.find('.js-successbox').hide();
			$jform.find('.js-error-control-box .t-input-error').html('');
			$jform.find('.js-error-control-box').removeClass('js-error-control-box');
			$jform.removeClass('js-send-form-error');
			$jform.removeClass('js-send-form-success');
			var $popupError = $('#tilda-popup-for-error');
			if ($popupError.length > 0) {
				$popupError.fadeOut()
			}
		};
		window.rainbowForm.showErrors = function($jform, arErrors) {
			if (!arErrors || arErrors.length == 0) {
				return !1
			}
			if ($jform.data('error-popup') == 'y') {
				return rainbowForm.showErrorInPopup($jform, arErrors)
			}
			var clsInputBoxSelector = $jform.data('inputbox');
			if (!clsInputBoxSelector) {
				clsInputBoxSelector = '.blockinput'
			}
			var arLang = window.rainbowForm.arValidateErrors[window.tildaBrowserLang] || {};
			var $fieldgroup, isFieldErrorBoxExist, isShowCommonErrors, $errItem, sError = '';
			for (var i = 0; i < arErrors.length; i++) {
				if (!arErrors[i] || !arErrors[i].obj) {
					continue
				}
				if (i == 0 && arErrors[i].obj == 'none') {
					$errItem = $jform.find('.js-rule-error-all');
					$errItem.html(arLang.emptyfill);
					$errItem.css('display', 'block').show();
					break
				}
				$fieldgroup = arErrors[i].obj.closest(clsInputBoxSelector).addClass('js-error-control-box')
				isFieldErrorBoxExist = 0;
				isShowCommonErrors = 1;
				if ($fieldgroup.find('.t-input-error').length > 0) {
					isFieldErrorBoxExist = 1
				}
				for (j = 0; j < arErrors[i].type.length; j++) {
					error = arErrors[i].type[j];
					sError = '';
					if (isShowCommonErrors == 1) {
						$errItem = $jform.find('.js-rule-error-' + error);
						if ($errItem.length > 0) {
							if ($errItem.text() == '' && arLang[error] > '') {
								$errItem.html(arLang[error])
							} else {
								sError = $errItem.eq(0).text()
							}
							$errItem.css('display', 'block').show()
						} else {
							if (arLang[error] > '') {
								$errItem = $jform.find('.js-rule-error-all');
								if ($errItem && $errItem.length > 0) {
									$errItem.html(arLang[error]);
									$errItem.css('display', 'block').show()
								}
							}
						}
					}
					if (isFieldErrorBoxExist) {
						if (sError == '') {
							if (arLang[error + 'field'] > '') {
								sError = arLang[error + 'field']
							} else {
								if (arLang[error] > '') {
									sError = arLang[error]
								}
							}
						}
						if (sError > '') {
							$fieldgroup.find('.t-input-error').html(sError)
						}
					}
				}
			}
			$jform.find('.js-errorbox-all').css('display', 'block').show();
			$jform.trigger('rainbowform:aftererror');
			return !0
		};
		window.rainbowForm.clearTCart = function($jform) {
			if ($jform.data('formcart') == 'y') {
				window.tcart = {
					amount: 0,
					currency: '',
					system: '',
					products: []
				};
				window.tcart.system = 'none';
				if (typeof localStorage === 'object') {
					try {
						localStorage.removeItem("tcart")
					} catch (e) {
						console.log('Your web browser does not support localStorage.')
					}
				}
				try {
					delete window.tcart;
					tcart__loadLocalObj()
				} catch (e) {}
				window.tcart_success = 'yes'
			}
		};
		window.rainbowForm.successEnd = function($jform, successurl, successcallback) {
			if ($jform.find('.js-successbox').length > 0) {
				if ($jform.find('.js-successbox').text() == '') {
					var arMessage = window.rainbowForm.arMessages[window.tildaBrowserLang] || {};
					if (arMessage.success) {
						$jform.find('.js-successbox').html(arMessage.success)
					}
				}
				if ($jform.data('success-popup') == 'y') {
					window.rainbowForm.showSuccessPopup($jform.find('.js-successbox').html())
				} else {
					$jform.find('.js-successbox').show()
				}
			}
			$jform.addClass('js-send-form-success');
			if (successcallback && successcallback.length > 0) {
				eval(successcallback + '($jform)')
			} else {
				if (successurl && successurl.length > 0) {
					setTimeout(function() {
						window.location.href = successurl
					}, 500)
				}
			}
			rainbowForm.clearTCart($jform);
			$jform.find('input[type=text]:visible').val('');
			$jform.find('textarea:visible').html('');
			$jform.find('textarea:visible').val('');
			$jform.data('rainbowformresult', {
				tranid: "0",
				orderid: "0"
			});
		};
		window.rainbowForm.send = function($jform, btnformsubmit, formtype, formskey) {
			if ($jform.data('formcart') == 'y') {
			    
				$jform.append('<input type="hidden" name="amount" value="' + window.tcart.amount + '">');
				$jform.append('<input type="hidden" name="total" value="' + window.tcart.total + '">');
				
				if (window.tcart.products > '') {
				    var iProductsCount = window.tcart.products.length
				    for (t = 0; t < iProductsCount; t = t + 1)
                    $jform.append('<input type="hidden" name="products_name_' + [t] + '" value="' + window.tcart.products[t].name + '">');
                }
                if (window.tcart.products > '') {
				    var iProductsCount = window.tcart.products.length
				    for (t = 0; t < iProductsCount; t = t + 1)
                    $jform.append('<input type="hidden" name="products_amount_' + [t] + '" value="' + window.tcart.products[t].amount + '">');
                }
                if (window.tcart.products > '') {
				    var iProductsCount = window.tcart.products.length
				    for (t = 0; t < iProductsCount; t = t + 1)
                    $jform.append('<input type="hidden" name="products_quantity_' + [t] + '" value="' + window.tcart.products[t].quantity + '">');
                }
                if (window.tcart.products > '') {
				    var iProductsCount = window.tcart.products.length
				    for (t = 0; t < iProductsCount; t = t + 1)
                    $jform.append('<input type="hidden" name="art_' + [t] + '" value="' + window.tcart.products[t].sku + '">');
                }
                if (window.tcart.products > '') {
				    var iProductsCount = window.tcart.products.length
				    for (t = 0; t < iProductsCount; t = t + 1)
                    $jform.append('<input type="hidden" name="razmer_' + [t] + '" value="' + window.tcart.products[t].options[0].variant + '">'); 
                }
        //         if (window.tcart.products > '') {
				    // var iProductsCount = window.tcart.products.length
				    // for (t = 0; t < iProductsCount; t = t + 1)
        //         	$jform.append('<input type="hidden" name="art_' + [t] + '" value="' + window.tcart.products[t].options[1].variant + '">');
        //         }

			}
			$jform.find('.js-form-spec-comments').val('');
			$formurl = '../send/send.php';

			$.ajax({
				type: "POST",
				url: $formurl,
				data: $jform.serialize(),
				dataType: "json",
				success: function(json) {
					var successurl = $jform.data('success-url');
					var successcallback = $jform.data('success-callback');
					var formsendedcallback = $jform.data('formsended-callback');
					btnformsubmit.removeClass('t-btn_sending');
					btnformsubmit.data('form-sending-status', '0');
					btnformsubmit.data('submitform', '');

					if (formsendedcallback && formsendedcallback.length > 0) {
						eval(formsendedcallback + '($jform);')
					}
					window.rainbowForm.successEnd($jform, successurl, successcallback)
				},
				error: function(error) {
					btnformsubmit.removeClass('t-btn_sending');
					btnformsubmit.data('form-sending-status', '0');
					btnformsubmit.data('submitform', '');
					var $errBox = $jform.find('.js-errorbox-all');
					if (!$errBox || $errBox.length == 0) {
						$jform.prepend('<div class="js-errorbox-all"></div>');
						$errBox = $jform.find('.js-errorbox-all')
					}
					var $allError = $errBox.find('.js-rule-error-all');
					if (!$allError || $allError.length == 0) {
						$errBox.append('<p class="js-rule-error-all"></p>');
						$allError = $errBox.find('.js-rule-error-all')
					}
					if (error && error.responseText > '') {
						$allError.html(error.responseText + '. Please, try again later.')
					} else {
						if (error && error.statusText) {
							$allError.html('Error [' + error.statusText + ']. Please, try again later.')
						} else {
							$allError.html('Unknown error. Please, try again later.')
						}
					}
					$allError.show();
					$errBox.show();
					$jform.addClass('js-send-form-error');
					$jform.trigger('rainbowform:aftererror')
				},
				timeout: 15000
			});
			return !1
		};
		window.rainbowForm_initMasks = function() {
			$('.js-tilda-mask').each(function() {
				var mask = $(this).data('tilda-mask');
				var maskplaceholder = $(this).data('tilda-mask-holder');
				if (mask && !$(this).data('tilda-mask-init')) {
					if (maskplaceholder && maskplaceholder > '') {
						$(this).mask('' + mask, {
							placeholder: '' + maskplaceholder
						})
					} else {
						$(this).mask('' + mask)
					}
					$(this).data('tilda-mask-init', '1')
				}
			})
		};
		window.rainbowForm_initMasks();
		$('.r').off('click', '.js-form-proccess [type=submit]');
        $('.r').on('click', '.js-form-proccess [type=submit]', function(event) {
            event.preventDefault();
            var btnformsubmit = $(this);
            var btnstatus = btnformsubmit.data('form-sending-status');
            if (btnstatus >= '1') {
                return !1
            }
            var $activeForm = $(this).closest('form'),
                arErrors = !1;
            if ($activeForm.length == 0) {
                return !1
            }
            btnformsubmit.addClass('t-btn_sending');
            btnformsubmit.data('form-sending-status', '1');
            btnformsubmit.data('submitform', $activeForm);
            window.rainbowForm.hideErrors($activeForm);
            arErrors = window.rainbowForm.validate($activeForm);
            if (window.rainbowForm.showErrors($activeForm, arErrors)) {
                btnformsubmit.removeClass('t-btn_sending');
                btnformsubmit.data('form-sending-status', '0');
                btnformsubmit.data('submitform', '');
                return !1
            } else {
                var formtype = $activeForm.data('formactiontype');
                var formskey = $('#allrecords').data('tilda-formskey');
                if ($activeForm.find('.js-formaction-services').length == 0 && formtype != 1 && formskey == '') {
                    var $errBox = $activeForm.find('.js-errorbox-all');
                    if (!$errBox || $errBox.length == 0) {
                        $activeForm.prepend('<div class="js-errorbox-all"></div>');
                        $errBox = $activeForm.find('.js-errorbox-all')
                    }
                    var $allError = $errBox.find('.js-rule-error-all');
                    if (!$allError || $allError.length == 0) {
                        $errBox.append('<p class="js-rule-error-all">' + json.error + '</p>');
                        $allError = $errBox.find('.js-rule-error-all')
                    }
                }
                window.rainbowForm.send($activeForm, btnformsubmit, formtype, formskey)
            }
            return !1
        });
	})
})(jQuery);