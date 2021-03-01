let str = document.querySelector('.text').innerText;
let newStr = str.replace(/\s'|'\s|'$/g, '"');
document.querySelector('.text').innerText = newStr;



class Validation {
    constructor() {
        this.submitForm();
        this.cleanForm();
    }


        submitForm() {

           document.querySelector('.check').addEventListener('click', NameValidation.getNameValue);
           document.querySelector('.check').addEventListener('click', MailValidation.getMailValue);
           document.querySelector('.check').addEventListener('click', TelValidation.getTelValue);
            window.onload = () => {
               document.querySelector('.check').addEventListener('click',   NameValidation.checkName);
               document.querySelector('.check').addEventListener('click',   MailValidation.checkMail);
               document.querySelector('.check').addEventListener('click',   TelValidation.checkTel);
                document.querySelector('.check').addEventListener('click', ()=>{
                    document.getElementById('text').value = '';
                })
            }
        }
        cleanForm(){
            let cleanForm = document.querySelector('.clean');
           let inputs = document.querySelectorAll('input');
           let paragraphs = document.querySelectorAll('.cleanText');
           cleanForm.addEventListener('click', ()=>{
               inputs.forEach(input =>{
                   input.value = '';
                   input.style.border = '1px solid black';
               })
           })
            cleanForm.addEventListener('click', ()=>{
                paragraphs.forEach(paragraph =>{
                    paragraph.innerText= '';
                })
            })
        }
    }


class NameValidation {
    name = '';

    constructor() {
       this.name=name;
    }

    static getNameValue() {
        this.name = document.getElementById('name').value;
        return this.name;
    }

    static checkName() {
        let regexp = /^[а-яА-Яa-zA-Z]+$/ig;
        let nameTrue = regexp.exec(this.name);
        if (!nameTrue) {
            document.querySelector('.error').innerText = 'Имя должно содержать только буквы'
            document.getElementById('name').style.border = '1px solid red';
        } else document.getElementById('name').value = '';
    }
}
class MailValidation{
    mail = '';
    constructor(mail) {
        this.mail = mail;
    }
    static getMailValue() {
        this.mail = document.getElementById('mail').value;
        return this.mail;
    }

    static checkMail() {
        let regExp = /^[-._a-z]+@[a-z]+\.[a-z]{2,6}$/i;
        let mailTrue = regExp.exec(this.mail);
        if (!mailTrue) {
            document.querySelector('.errormail').innerText = 'неверный формат электронной почты'
            document.getElementById('mail').style.border = '1px solid red';
        } else document.getElementById('mail').value = '';
    }
}
class TelValidation{
    tel = '';
    constructor(tel){
       this.tel = tel;
    }

    static getTelValue() {
        this.tel = document.getElementById('tel').value;
        return this.tel;
    }

    static checkTel() {
        let regExp = /\+?\d?\(?\d{3}\)?\d{3}?[-]\d{4}/ig;
        let telTrue = regExp.exec(this.tel);
        if (!telTrue) {
            document.querySelector('.errortel').innerText = 'неверный формат номера телефона'
            document.getElementById('tel').style.border = '1px solid red';
        } else document.getElementById('tel').value = '';
    }

}

   let  validation = new  Validation();


