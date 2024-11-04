import $ from 'jquery';

import greatWall from './images/GREAT WALL OF CHINA.jpg';
import eiffelTower from './images/LA TOUR EIFFEL.jpg';
import leaningTower from './images/LEANING TOWER OF PISA.jpg';
import tajMahal from './images/TAJ MAHAL.jpg';
import pyramids from './images/PYRAMIDS OF GIZA.jpg';
import amberFort from './images/AMBER FORT.jpg';

const img_box = document.getElementById("root_slide");
        const images = [
            greatWall,
            eiffelTower,
            leaningTower,
            tajMahal,
            pyramids,
            amberFort
        ];

        images.forEach((src, index) => {
            const div_inside_img = document.createElement("div");
            div_inside_img.setAttribute("id", "img" + (index + 1));
            div_inside_img.setAttribute("class", "mySlides fade");
            img_box.appendChild(div_inside_img);

            const img = document.createElement("img");
            img.setAttribute("src", src);
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.borderRadius = "15px";
            div_inside_img.appendChild(img);
        });

        let slideIndex = 0;
        showSlides();

        function showSlides() {
            const allSlides = $(".mySlides");
            allSlides.hide();

            // If slideIndex exceeds length, reset to 0
            if (slideIndex >= allSlides.length) slideIndex = 0;

            // Show the current slide
            $(allSlides[slideIndex]).fadeIn(1000);
            
            // Increment the slide index
            slideIndex++;

            // Change slide every 5 seconds
            setTimeout(function() {
                $(allSlides[slideIndex - 1]).fadeOut(1000, showSlides);
            }, 5000);
        }
