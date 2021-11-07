'use strict';

import adaptive from "./modules/adaptive";
import mobMenu from "./modules/mobMenu";
import "../../node_modules/jquery-validation/dist/jquery.validate";

import { Fancybox } from "@fancyapps/ui";
document.addEventListener('DOMContentLoaded', function () {
    mobMenu(846);
    adaptive();

    $(".consultation__form").each(function() {
        $(this).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: {
                    required: true,
                    digits: true,
                    minlength: 10,
                }
            },
            messages: {
                name: {
                    required: "Это поле обязательно",
                    minlength: "Имя слишком короткое"
                },
                phone: {
                    required: "Это поле обязательно",
                    digits: "Некоректный номер телефона",
                    minlength: "Некоректный номер телефона"
                }
            }
        });
    })

    $(".form2").each(function() {
        $(this).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                },
                phone: {
                    required: true,
                    digits: true,
                    minlength: 10,
                },
                message: {
                    required: true,
                    minlength: 100,
                    maxlenght: 1000,
                },
            },
            messages: {
                name: {
                    required: "Это поле обязательно",
                    minlength: "Имя слишком короткое"
                },
                phone: {
                    required: "Это поле обязательно",
                    digits: "Некоректный номер телефона",
                    minlength: "Некоректный номер телефона"
                },
                message :{
                    required: "Это поле обязательно",
                    minlength: "Сообщение должно содержать минимум 100 символов",
                    maxlength: "Сообщение должно содержать маскимум 1000 символов"
                }
            }
        });
    })
});