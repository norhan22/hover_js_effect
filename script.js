/////////////////////////////////////////////////////////
//Helpers
/////////////////////////////////////////////////////////
// Selectors
const
    $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document);

///////////////////////////////////////////////////////////////////////////
// Hover Effect
//////////////////////////////////////////////////////////////////////////
var oldX = 0,
  oldY = 0,
  element_oldTop = 0,
  element_oldLeft = 0,
  selectors = $$('.hover_moving_effect');

function startHover(e) {
  const that = e.target;
  element_oldTop = that.style.top;
  element_oldLeft = that.style.left;

  if (e.pageY > oldY) that.style.top = '20px';
  else that.style.top = '-20px';

  if (e.pageX > oldX) that.style.left = '20px';
  else that.style.left = '-20px';

  oldX = e.pageX;
  oldY = e.pageY;
}

function endHover(e) {
  const that = e.target;
  that.style.left = 0;
  that.style.top = 0;
}

selectors.forEach((s) => {
  s.onmousemove = (e) => startHover(e);
  s.onmouseleave = (e) => endHover(e);
  // Touch screens
  s.ondragenter = (e) => startHover(e);
  s.ondragend = (e) => endHover(e);
});