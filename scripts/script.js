* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
/*    border: 1px solid black;*/
}

body {
    background-image: url("../images/PeopleEatingHavingFun.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 10px;
    padding: 10px;
}

ul {
    list-style: none;
}

label {
    font-size: 10px;
    padding: 0%;
    margin: 0%;
}

#recipeForm {
    display: none;
};

input.form-control {
  width: 90%;
  height: 30px;
  padding: 0%;
  margin: 0%;
  font-size: x-small;
  text-align: center;
  border: 1px solid black;
}

textarea.form-control {
    width: 90%;
    height: 125px;
    padding: 2%;
    margin: 0%;
    font-size: x-small;
    text-align: center;
    border: 1px solid black; 
}

button.btn {
  width: 40%;
  height: 15%;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  padding: 4px;
  border: 1px solid black;
}

hr.green {
  border: 2px solid green;
}

h5.card-title {
    font-weight: bold;
    text-decoration: underline;
    font-size: 75%;
}

p.card-text {
    font-size: 75%;
}

.container {
    overflow: hidden;
}

.container .articles {
    max-width: 100%;
    height: auto;
    display: block;
}

.container {
    max-width: 1170px;
    margin: auto;
}

#recipeTitle {
    text-align: center;
};

.form-group {
    padding: 0%;
    margin: 0%;
}

.row {
     display: flex;
     flex-wrap: wrap;
}

.col {
    padding: 0px;
}

.footer{   
        font-size: 12px;
        color: #808080;
        text-align: left;
}
    
.footer {
    background-color: rgba(0, 0, 0, 0.856);
    padding: 0 5px;
}
.footer-col {
    width: 25%;
    padding: 0 5px;
}
.footer-col h4 {
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 5px;
    font-weight: 500;
    position: relative;
    text-decoration: underline;
}
/*.footer-col h4::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #e91e63;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
}*/
.footer-col ul li:not(:last-child){
    margin-bottom: 5px;
}
.footer-col ul li a {
    font-size: 10px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
}
.footer-col ul li a:hover{
    color: #ffffff;
    padding: 5px;
}
/*.footer-col .social-links a{
    display: inline-block;
    height: 10px;
    width: 40px;
    background-color: rgba(255, 255, 255, o.2);
    margin: 0 2px 2px 0;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
    color: #24262b;
    background-color: #ffffff;
}
*/
/* Responsive */
@media(max-width: 767px){
    .footer-col {
        width: 50%;
        margin-bottom: 5px;
    }
}
@media(max-width: 576px){
    .footer-col {
        width: 100%;
    }
}
