import React from 'react';   
import Helmet from 'react-helmet';           //Reactを読み込んでいる
import './App.css';
import axios from 'axios';
const PORT = process.env.PORT || 4000;


function page1() {   //page1クラスにReact.Componentを継承する
        function newAcountCleate (){
            axios.get(`http://localhost:${PORT}/api1`)
            .then((res)=>{console.log(res.data)})
            .catch((error)=>{console.log(error)})

        }
        return (
            
            <React.Fragment>
                <Helmet>
                <link rel="stylesheet" href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css"/>
                </Helmet>
                <h1 className="title">チャットアプリ</h1>
                <main>
                    <dev className="section" id="section-new">
                            <label htmlFor="control-label">ルーム名</label>
                            <input type="text" id="roomname" name="roomname" placeholder="ルーム名を入力"/>
                            <label htmlFor="control-label">あなたの名前</label>
                            <input type="text" id="username" name="username" placeholder="あなたの名前を入力"/>
                            <label htmlFor="control-label">認証パスワード</label>
                            <input type="password" id="password" name="password" placeholder="パスワードを入力"/>
                            <button className="btn" onClick={()=>{newAcountCleate()}} type="submit" name="mode" value="Create">チャットルームを作る</button>
                    </dev>
                    <dev className="section" id="section-existing">
                            <label htmlFor="control-label">ルーム名</label>
                            <input type="text" id="roomname" name="roomname" placeholder="ルーム名を入力"/>
                            <label htmlFor="control-label">あなたの名前</label>
                            <input type="text" id="username" name="username" placeholder="あなたの名前を入力"/>
                            <label htmlFor="control-label">認証パスワード</label>
                            <input type="password" id="password" name="password" placeholder="パスワードを入力"/>
                            <button className="btn" type="submit" name="mode" value="Create">チャットルームを作る</button>
                    </dev>
                </main>
                
            </React.Fragment>
        );
}
export default page1;    