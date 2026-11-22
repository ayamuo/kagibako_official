// ログインの練習ページ：ID とパスワードの両方が入ったら「入力できました！」を出す。
// 入力した内容は、どこにも送らない・保存しない（送信は止め、値はこのページの中で確かめるだけ）
(() => {
  const form = document.getElementById('practice-form');
  const id = document.getElementById('login-id');
  const pw = document.getElementById('login-pw');
  const ok = document.getElementById('practice-ok');
  const need = document.getElementById('practice-need');
  const check = () => {
    const filled = !!(id.value && pw.value);
    ok.hidden = !filled;
    if (filled) need.hidden = true;
  };
  // 自動入力では input / change が出るブラウザが多い。出ないブラウザのために、しばらくの間は値も見に行く
  for (const el of [id, pw]) { el.addEventListener('input', check); el.addEventListener('change', check); }
  let n = 0;
  const timer = setInterval(() => { check(); if (++n > 600) clearInterval(timer); }, 500);
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // 送信しない
    check();
    need.hidden = !ok.hidden;
  });
})();
