const animationData = {
    container: document.getElementById('animation-container'),
    path:'json/Yin-Yang.json',
    render: 'svg',
    loop: true,
    autoplay: true,
    name: 'yin-yang-animation'
  };
  
const anim = bodymovin.loadAnimation(animationData);