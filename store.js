const DW_KEY='dwgames_leaderboard_v1';
function getScores(){return JSON.parse(localStorage.getItem(DW_KEY)||'[]')}
function saveScore(game,name,score){const item={game,name:name||'游客',score:Number(score)||0,time:new Date().toLocaleString('zh-CN')};const scores=getScores();scores.push(item);scores.sort((a,b)=>b.score-a.score);localStorage.setItem(DW_KEY,JSON.stringify(scores.slice(0,50)));return item}
function clearScores(){localStorage.removeItem(DW_KEY)}
