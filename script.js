function selectChange() {
  var opt = document.getElementById("city").options[
    document.getElementById("city").selectedIndex
  ].value;
  //   console.log(opt);
  return opt;
}
