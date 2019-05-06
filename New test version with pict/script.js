
window.onload = () => {
  document.querySelector("#magicButton").addEventListener("click", function(){
    document.body.style.overflow = 'hidden'
    window.scrollTo({top:0, behavior: 'smooth'})
    document.querySelector('#iframeContainer').style.left = '0px'
    document.getElementsByTagName("section").style.opacity = "0.3"

  });
}