import React from 'react';
import Header from './components/Header';
import HomeWork1 from './9-homeworks/Session01/HomeWork1';
import Footer from './components/Footer';
import Baitap1 from './9-homeworks/Session02/Baitap1/Baitap1';
import Baitap2 from './9-homeworks/Session02/Baitap2/Baitap2';
import Baitap3 from './9-homeworks/Session02/Baitap3/Baitap3';
import LifeCycle from './Example/LifeCycle'
import './App.css'
import LifeCycleHook from './Example/LifeCycleHook';
import BlockUi01 from './9-homeworks/Session02/BlockUi01';
import BlockUi02 from './9-homeworks/Session02/BlockUi02';
import Practive from './components/Practive';
import BlockUi03 from './9-homeworks/Session02/BlockUi03/BlockUi03';
import Rating from './9-homeworks/Session03/RateBtn/Rating';
import From from './9-homeworks/2-example/Buoi6/From';
import MultipleInput from './9-homeworks/2-example/Buoi6/MultipleInput';
import LikesFunc from './9-homeworks/Session03/LikeBtn/LikesFunc';
import LikesClass from './9-homeworks/Session03/LikeBtn/LikesClass';
import RatingClass from './9-homeworks/Session03/RateBtn/RatingClass';
import Form from './9-homeworks/Session06/Form/Form';
import InputCustom from './Example/InputCustom/InputCustom';
import GetFetch from './Example/GetFetch/GetFetch';


function App() {
  // let N = 5
  // let a = 1, b = 1
  // let costMin
  // const cost = () =>{
  //   if(a*2 >= b){
  //     if(N%2 == 0){
  //       costMin = parseInt(String(N/2)) * b
  //       console.log(parseInt(String(N/2)))
  //     }else{
  //       costMin =parseInt(String(N/2))*b + a
  //     }
  //   }else{
  //     costMin = N*a
  //   }
  //   console.log(costMin)
  // }
  return (
    <>
      {/* Session02 */}

      {/* <Baitap1/>
      <div style={{display: 'flex'}}>
        <Baitap2/>
        <Baitap3/>
      </div> */}

      {/* <BlockUi01 text="BANDWIDTH" color1="violet" color2="red" percentage={20}/>
      <BlockUi01 text="STORAGE" color1="blue" color2="red" percentage={50}/>
      <BlockUi01 text="USERS" color1="green" color2="red" percentage={90}/>
      <BlockUi01 text="VISITORS" color1="pink" color2="red" percentage={30}/> */}

      {/* <BlockUi02 icon='fa-html5' text='HTML' percentage={50} background='green'/>
      <BlockUi02 icon='fa-css3' text='CSS' percentage={30} background='red'/>
      <BlockUi02 icon='fa-php' text='PHP' percentage={40} background='violet'/> */}

      {/* <div style={{display: 'flex'}}>
        <BlockUi03 icon='fa-facebook-f' content='Facebook' likes='5,00,000' bgColor='#619bec'/>
        <BlockUi03 icon='fa-twitter' content='Twitter' likes='40,000' bgColor='#31c8dd'/>
        <BlockUi03 icon='fa-google-plus-g' content='Google +' likes='4,60,000' bgColor='#f78153'/>
        <BlockUi03 icon='fa-pinterest' content='Printerest' likes='34,000' bgColor='#f75354'/>
      </div> */}

      {/* Session03 */}
      {/* <MusicPlayer/> */}
      {/* <Rating/>
      <RatingClass/> */}
      {/* <MultipleInput/> */}
      {/* <LikesFunc/>
      <LikesClass/> */}

      {/* Session06 */}
      {/* <Form/> */}

      {/* <InputCustom/> */}

      <GetFetch/>

    </>
  );
}

export default App;
