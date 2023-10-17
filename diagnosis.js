'use strict';
const result = document.getElementById("result"); // 診断スペースの要素を取得
result.style.visibility = "hidden"; // 非表示にする

function push() {
  const user_name = document.getElementById("user_name").value// ユーザーの名前を取得
  if (user_name === "") { // 空だったら診断されない
    alert("名前を入力してください");
  } else {
    const ary = [
      `${user_name}の今日の運勢は快晴です！なんでも絶好調な一日かも!のびのびと好きなことができそう!`,
      `${user_name}の今日の運勢は晴れです！気分もスッキリしていいことが起きる一日になるかも!ジョギングしてみるのも良さそう!`,
      `${user_name}の今日の運勢はくもりです！特に何事もなく落ち着いた一日かも!ゆっくり読書ができそう!`,
      `${user_name}の今日の運勢は雨です！少しよくないことが起こるかも。でも、雨が止んだ後は虹がかかりそう!`,
      `${user_name}の今日の運勢は雷です！思わぬアクシデントが起きる一日かも。でも、雷を乗り越えるととてもいいことがありそう!`,
      `${user_name}の今日の運勢は雪です！周りの様子や自分の行動に注意が必要な一日かも。でも、降る雪の中を観察してみると綺麗な結晶が見えそう!`,
      `${user_name}の今日の運勢は大雨です！とても良くないことが起きるかも。でも、次の日は快晴になりそう!`
    ];

    const ary_fortune = ary[Math.floor(Math.random() * ary.length)]; // 配列の値をランダムに取り出す

    const input_text = document.getElementById("input_text"); // 結果の文章を出力する要素
    input_text.innerHTML = ary_fortune; // 結果の文章を設定する

    result.style.visibility = "visible"; // 結果を表示
  }
}