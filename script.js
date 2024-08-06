// matrix-rainbow

const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height =window.innerHeight;

// var rect = document.getElementById('Matrix').getBoundingClientRect();
// var height = rect.height;
// var width = rect.width;
console.log(canvas.height,canvas.width);


const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 10;
const columns = 3000;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width,canvas.height );
	
	context.fillStyle = '#fff';
	context.font = fontSize + 'px';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);



document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links');
    const tabContents = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links and hide all contents
            navLinks.forEach(nav => nav.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('show'));

            // Add active class to the clicked link
            link.classList.add('active');
            
            // Get the target content ID from the clicked link
            const targetId = link.getAttribute('data-target');
            
            // Show the content corresponding to the clicked link
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('show');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollingDiv = document.querySelector('.projects');

    scrollingDiv.addEventListener('mousemove', (event) => {
        const rect = scrollingDiv.getBoundingClientRect();
        const divCenterX = rect.left + rect.width / 2;
        const divCenterY = rect.top + rect.height / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const offsetX = mouseX - divCenterX;
        const offsetY = mouseY - divCenterY;

        // scrollingDiv.style.transform = `translate(-50%, -50%) translate(${offsetX / 10}px, ${offsetY / 10}px)`;
    });

    scrollingDiv.addEventListener('mouseleave', () => {
        // scrollingDiv.style.transform = 'translate(-50%, -50%)'; // Reset position when mouse leaves
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const scrollableList = document.querySelector('.projects');
//     const parentDiv = document.querySelector('.proje');

//     let scrollPosition = 0;

//     parentDiv.addEventListener('wheel', (event) => {
//         event.preventDefault();
        
//         // Calculate the height difference between the parent and the list
//         const maxScroll = scrollableList.scrollHeight - parentDiv.clientHeight;

//         if (event.deltaY > 0 && scrollPosition < maxScroll) {
//             scrollPosition += 20; // Scroll down
//         } else if (event.deltaY < 0 && scrollPosition > 0) {
//             scrollPosition -= 20; // Scroll up
//         }
        
//         updateScrollPosition();
//     });

//     function updateScrollPosition() {
//         scrollableList.style.bottom = `${-scrollPosition}px`;
//     }
// });

