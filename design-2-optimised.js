"use strict"; var insertAfter = function (n, e) { e.parentNode.insertBefore(n, e.nextSibling) }, head = document.getElementsByTagName("HEAD")[0], style = document.createElement("STYLE"); style.innerHTML = '\n    body {\n      margin: 0;\n      background: #244477;\n    }\n    \n    @media(min-width: 0px){\n      .more-info {\n        font-family: "Calibre", helvetica, sans-serif;\n        width: 100vw;\n        padding: 40px 5vw;\n        background: #FFFFFF;\n        box-sizing: border-box;\n        position: fixed;\n        bottom: 0;\n      }\n      \n      .more-info__title {\n        color: #364B52;\n        display: block;\n        margin: 0;\n        font-weight: 600;\n        text-align: center;\n        text-transform: uppercase;\n      }\n\n      .more-info__decor-line {\n        display: none;\n        background: #4CB6F2;\n        height: 3px;\n        width: 25px;\n        margin: 10px 0;\n      }\n\n      .more-info__container {\n        display: flex;\n        justify-content: unset;\n        align-items: center;\n        flex-direction: column;\n      }\n\n      .more-info__paragraph {\n        padding: 20px 50px 40px 50px;\n        font-size: 17px;\n        letter-spacing: 0.8px;\n        font-weight: 300;\n        line-height: 1.5em;\n        color: #000000;\n      }\n\n      .more-info__cta {\n        background: #4CB6F2;\n        border: 0px solid #fff;\n        color: #fff;\n        padding: 15px 40px;\n        text-transform: uppercase;\n        font-weight: 700;\n      }\n\n      .btn {\n        margin-bottom: 0;\n        text-align: center;\n        vertical-align: middle;\n        -ms-touch-action: manipulation;\n        touch-action: manipulation;\n        cursor: pointer;\n        white-space: nowrap;\n        font-size: 14px;\n        line-height: 1.42857;\n        border-radius: 4px;\n      }\n\n      .btn:focus {\n        outline: none;\n      }\n\n      .btn-utc2 {\n        display: block;\n        color: #fff;\n        background: #2AB4EE;\n        border-color: #2AB4EE;\n        box-shadow: none;\n        padding: 15px 40px;\n        font-weight: 700;\n        text-decoration: none;\n        text-transform: uppercase;\n      }\n      \n      .btn-utc2:hover {\n        background: 0 0;\n        border: 1px solid #2AB4EE;\n        color: #2AB4EE;\n        -webkit-transition: all .3s ease;\n        -moz-transition: all .3s ease;\n        -ms-transition: all .3s ease;\n        -o-transition: all .3s ease;\n        transition: all .3s ease;\n      }\n\n      .more-info__btn--margin {\n        display: flex;\n      }\n\n      .display--inline {\n        display: inline;\n      }\n\n      .display--flex {\n        display: flex;\n      }\n\n      .margin-btn {\n        margin: 0;\n      }\n    }\n\n    @media(min-width: 768px){\n      .more-info {\n        display: block;\n        flex-direction: unset;\n        font-family: "Calibre", helvetica, sans-serif;\n        width: 100vw;\n        padding: 40px 5vw;\n      }\n      \n      .more-info__title {\n        color: #364B52;\n        display: block;\n        margin: 0;\n        font-weight: 600;\n        text-align: left;\n        text-transform: uppercase;\n      }\n\n      .more-info__decor-line {\n        display: block;\n        background: #4CB6F2;\n        height: 3px;\n        width: 25px;\n        margin: 10px 0;\n      }\n      \n      .more-info__container {\n        \n        display: flex;\n        justify-content: space-between;\n        align-items: unset;\n        flex-direction: unset;\n      }\n\n      .more-info__paragraph {\n        padding: 0;\n        font-size: 17px;\n        letter-spacing: 0.8px;\n        font-weight: 300;\n        line-height: 1.5em;\n        color: #000000;\n      }\n\n      .more-info__cta {\n        background: #4CB6F2;\n        border: 0px solid #fff;\n        color: #fff;\n        padding: 15px 40px;\n        text-transform: uppercase;\n        font-weight: 700;\n      }\n\n      .btn {\n        margin-bottom: 0;\n        text-align: center;\n        vertical-align: middle;\n        -ms-touch-action: manipulation;\n        touch-action: manipulation;\n        cursor: pointer;\n        white-space: nowrap;\n        font-size: 14px;\n        line-height: 1.42857;\n        border-radius: 4px;\n      }\n\n      .btn:focus {\n        outline: none;\n      }\n\n      .btn-utc2 {\n        display: block;\n        color: #fff;\n        background: #2AB4EE;\n        border-color: #2AB4EE;\n        box-shadow: none;\n        padding: 15px 40px;\n        font-weight: 700;\n        text-decoration: none;\n        text-transform: uppercase;\n      }\n      \n      .btn-utc2:hover {\n        background: 0 0;\n        border: 1px solid #2AB4EE;\n        color: #2AB4EE;\n        -webkit-transition: all .3s ease;\n        -moz-transition: all .3s ease;\n        -ms-transition: all .3s ease;\n        -o-transition: all .3s ease;\n        transition: all .3s ease;\n      }\n\n      .more-info__btn--margin {\n        display: flex;\n      }\n\n      .display--inline {\n        display: inline;\n      }\n\n      .display--flex {\n        display: flex;\n      }\n\n      .margin-btn {\n        margin-left: 40px;\n      }\n    }\n\n    @media(min-width: 1200px){\n      .more-info {\n        width: 82vw;\n        padding: 20px 12vw;\n        bottom: 100px\n      }\n    }\n  ', head.appendChild(style); var body = document.getElementsByTagName("body")[0], node = document.createElement("SECTION"); node.className = "more-info", node.id += "more-info", node.innerHTML = '\n    <div class="more-info__title" > Interested in our free audit ?</div >\n    <div class="more-info__decor-line"></div>\n    <div class="more-info__container">\n      <div class="more-info__paragraph">\n        We review your data configuration, look opportunities or red flags within your GA account, and experience talent skill set alongside of other A/B tests we\'ve run make immediate recommendations that are backed by data and are actionable - all packed within a 30 minute video\n      </div>\n      <div>\n        <button class="btn btn-utc2 margin-btn">find out more</button>\n      </div>\n    </div>\n  ', body.appendChild(node);