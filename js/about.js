const menuBtn = document.getElementById("menubtn");
const navLinks = document.getElementById('navlinks');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click',(e)=>{
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute('class',isOpen?'ri-close-line':'ri-menu-line')
});

 navLinks.addEventListener('click',(e)=>{
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class','ri-menu-line');
}) 
var minake= 'God is good';

const readmore = document.getElementById("extended");

function readMore(){
    readmore.innerHTML=`The company has also expanded its reach by launching a YouTube channel, where short films and other creative content will be showcased. 
focustripod_vz offers a range of services, including photography, cinematography, and film production, catering to various events such as graduations, weddings, birthday celebrations, and more.
As a creative services provider, focustripod_vz is committed to staying up-to-date with the latest trends and technologies. 
Marvellers and his team are always looking for new ways to innovate and improve their craft, whether it's through attending workshops and
conferences or simply experimenting with new techniques and equipment.
focustripod_vz has a strong presence on social media platforms like TikTok and Instagram, 
where it showcases its work and engages with its audience. By leveraging these platforms, 
focustripod_vz is able to reach a wider audience and attract new clients.
As focustripod_vz continues to grow and thrive, Marvellers remains humbled and grateful for the 
blessings and favor he has received. He recognizes that his success is not solely due to his own efforts, 
but also the result of the support and encouragement he has received from his loved ones, mentors, and clients.

As he often says:

'God's favor is upon me, guiding my steps and illuminating my path. His blessings have 
endowed me with the gift of creativity, and I am thankful for the opportunity to share this gift with the world.'

In conclusion, focustripod_vz is a testament to the power of passion, creativity, 
and hard work. From humble beginnings to becoming a reputable creative services provider, 
focustripod_vz continues to inspire and captivate audiences with its innovative and exceptional work. 
As the company looks to the future, it remains committed to pushing the boundaries of creativity and excellence, one frame at a time`
};