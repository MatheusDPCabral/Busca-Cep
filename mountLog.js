function mountLog() {
  let logs = JSON.parse(localStorage.getItem('logs'))
  let logsList = ""
  for (let log of logs) {
    logsList += `<li class="collection-item item-log">${log.date} <br>buscou ${log.log}<a href="#"><i style="color: #ee6e73;
    font-size: 33px;
    margin-left: -6px;
    margin-right: 2px;" onclick="logLoad('${log.log.split('buscou ')}')" class="material-icons">visibility</i></a></li>`
  }
  $("#resultado").html(logsList)
}
