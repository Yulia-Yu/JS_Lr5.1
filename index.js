import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const listProf= [
  {prof: "Web-разработчиков",
  discr: `Создают сложные и очень сложные сайты. Продумывают, чтобы
 пользователям было быстро и удобно.`},
  {prof: "Гейм-девелоперов",
  discr: `Создают видеоигры. Погружают всех нас в новые миры.`},
  {prof: "AI/ML-cпециалистов",
  discr: `Используют в деле искусственный интеллект и машинное
 обучение. Фактами и прогнозами делает бизнесу хорошо.`},
  {prof: "Аналитиков данных",
  discr: `С помощью чисел решают, куда двигаться компаниям. Помогают
 бизнесу получать еще больше денег.`},
  {prof: "Мобильных разработчиков",
  discr: `Создают мобильные приложения, которые найдут тебя везде.
 Умещают на маленьких экранах максимальный функционал.`}
 ]


  const listProf1= [
    {prof:"Специалист по инфо-безопасности",
    discr:`Защищает личные данные от черных капюшонов.
    Расследует информационные преступления.`},
    {prof:"Тестировщик",
    discr:`Проверяет работоспособность программного обеспечения, 
    оценивает его с точки зрения экспертов и обычных пользователей, 
    главная цель работы тестировщика ПО – выявить и устранить ошибки в софте.`},
    {prof:"Системный администратор",
    discr:`Управляет IT-инфраструктурой компании, предприятия. 
    Сисадмин настраивает ее, поддерживает и развивает.`}
  ]  

const listImg = ["logo_dvfu.png", "logo_imct.png"]
/*Передаем в качестве пропса список с рисунками*/
function Head(props) {
      const logoImages =listImg.map((img, index) =>
            <img key={index} src={img} />
          );
      return(
        <div className="head">
          {logoImages}
        </div>
      )
    }

function Tagline() {
  return(
    <h1>
      <b>Хватит</b> уже игр, <br/> пора <br/> разрабатывать и зарабатывать
    </h1>
  )
}


function Button(props) {
  let handleClickScroll = () => {

    let element = document.getElementById(props.a);
    if (element) {

      element.scrollIntoView({ behavior: 'smooth' });

    }
  };
  return (
    <input className="button" type="button" value={props.val} onClick={handleClickScroll}/>
  )
}


/*
function Button(props) {
  return (
    <input className="button" type="button" value={props.val} onClick={clickButton} />
  )
}


function clickButton(){
  return(
    window.location.assign('https://russky.digital/')
  )
}
class OnSecondPageButton extends React.Component {
  onclick () {
    window.location.assign('https://russky.digital/');
  }

  render() {
    return (<a onClick={(e) => this.onclick(e)}><i className="fas fa-chart-bar"></i></a>);
  }
} */

function Professions (props) {
  const listProf = props.list.map((item, index) =>
    <ProfItem key={index} prof={item.prof} discr={item.discr} />
  );
  return (
  <div className="prof">
    <h2 className='prof1'>{props.title} </h2>
    <ul>
      {listProf}
    </ul>
  </div>
  )
}
function Professions1 (props) {
  const listProf1 = props.list.map((item, index) =>
    <ProfItem key={index} prof={item.prof} discr={item.discr} />
  );
  return (
  <div className="prof" id='proff'>
    <h2 className='prof1'>{props.title} </h2>
    <ul>
      {listProf1}
    </ul>
  </div>
  )
}


function ProfItem(props) {
  const [isOpen, setOpenClose] = React.useState(false);
  const press = () => {
    setOpenClose(!isOpen);
  }
  return(
    <li onClick={press}>
      <span className="left">{props.prof}</span>
      <span className="right">
      {isOpen ? "×" : "+"}
      </span>
      {isOpen && <p> {props.discr}</p>}
    </li>
  )
}

function Content() {
    return(
    <>
    <Head listImg={listImg} />
    <Tagline/>
    <Button val={'Хочу учиться!'} a="proff"/>
    <Professions title="Обучаем на:" list={listProf} />
    <Professions1 title="Смотрите также:" list={listProf1} />
    </>
    )
}
    
root.render(<Content />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
